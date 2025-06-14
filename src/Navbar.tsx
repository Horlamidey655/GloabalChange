import { Link } from "react-router-dom";
import { useUser } from "./UseUser";

const Navbar = () => {
  const { user, logout } = useUser();

  return (
    <nav>
      {user ? (
        <>
          <span>Welcome, {user}</span>
          <button onClick={logout} style={{ marginLeft: "1rem" }}>
            Logout
          </button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
