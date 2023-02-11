import axios from "axios";
import { useState } from "react";

const Signup = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newsLetter, setNewsLetter] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://site--backend-vinted--5nymxkyhzx9t.code.run/user/sign_up",
        { email, username, password, newsletter: newsLetter }
      );
      handleToken(response.data.token);

      //   console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="signup-container" onSubmit={handleSubmit}>
      <h1>S'inscrire</h1>
      <input
        type="email"
        placeholder="Email@"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <input
        type="checkbox"
        checked={newsLetter}
        onChange={() => {
          setNewsLetter(!newsLetter);
        }}
      />
      <input type="submit" value="S'inscrire" />
    </form>
  );
};

export default Signup;
