import { Link } from "react-router-dom";
function Footer(): JSX.Element {
  return (
    <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
      <p>Built by Alex </p>
      <div className="flex -mx-6">
        <a href="#" className="mx-3 hover:opacity-80 duration-150">
          About us
        </a>{" "}
        |
        <Link to="/list" className="mx-3 hover:opacity-80 duration-150">
          List
        </Link>{" "}
        |
        <Link to="/" className="mx-3 hover:opacity-80 duration-150">
          Home
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
