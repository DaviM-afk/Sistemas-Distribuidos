import { Link } from "react-router-dom";
import "../../assets/css/NavBar.css"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">início</Link></li>
        <li><Link to="/users">leitores</Link></li>
        <li><Link to="/books">livros</Link></li>
        <li><Link to="/loans">emprestados</Link></li>
        <li><Link to="/reports">relat0rios</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
