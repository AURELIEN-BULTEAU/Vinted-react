import { Link } from "react-router-dom";

const Header = ({ handleToken, userToken }) => {
  return (
    <div>
      <p>logo</p>
      {!userToken ? (
        <>
          {" "}
          <Link to="/login">
            <button>Se connecter</button>
          </Link>
          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>{" "}
        </>
      ) : (
        <button
          onClick={() => {
            handleToken(null);
          }}
        >
          Déconnection
        </button>
      )}
      <Link to="/publish">
        <button>Vends tes articles</button>
      </Link>
    </div>
  );
};
export default Header;
