import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <p>logo</p>
      <Link to="/login">
        <button>Se connecter</button>
      </Link>
      <Link to="/signup">
        <button>S'inscrire</button>
      </Link>
      <button>Déconnection</button>
    </div>
  );
};
export default Header;
