import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20, fontSize: "20px", display: "flex", gap: "20px" }}>
      <div>
        <Link to="/" style={{color: "white", textDecoration: "none"}}>Home</Link>
      </div>
      <div>
        <Link to="/about" style={{color: "white", textDecoration: "none"}}>About</Link>
      </div>
      <div>
        <Link to="/products" style={{color: "white", textDecoration: "none"}}>Products</Link>
      </div>
      <div>
        <Link to="/products/men" style={{color: "white", textDecoration: "none"}}>Men</Link>
      </div>
      <div>
        <Link to="/products/women" style={{color: "white", textDecoration: "none"}}>Women</Link>
      </div>
      <div>
        <Link to="/products/kids" style={{color: "white", textDecoration: "none"}}>Kids</Link>
      </div>
      <div>
        <Link to="/products/homedecor" style={{color: "white", textDecoration: "none"}}>Home decor</Link>
      </div>
    </nav>
  );
};
