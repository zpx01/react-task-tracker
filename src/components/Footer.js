import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <br />
      <p>Copyright Zeeshan Patel &copy; 2021</p>
      <br />
      <div align="center">
        <Link to="/about">
          <button className="btn">About</button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
