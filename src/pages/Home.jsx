import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="dom">
      <Link className="Links" to="/">
        Home
      </Link>
      <Link className="Links" to="/forma">
        Request form
      </Link>
      <Link className="Links" to="/admin">
        Admin
      </Link>
      <Link className="Links" to="/login">
        Sign Up
      </Link>
      <Link className="Links" to="/Signin">
        Sign In
      </Link>
    </div>
  );
}
export default Home;
