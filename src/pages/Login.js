import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://site--backend-vinted--5nymxkyhzx9t.code.run/user/login",
        { email, password }
      );
      // console.log(response.data);
      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="signup-container" onSubmit={handleSubmit}>
      <p>Se connecter</p>
      <input
        type="email"
        placeholder="Email@"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input type="submit" value="Connection" />
    </form>
  );
};
export default Login;
