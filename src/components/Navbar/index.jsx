import { Link } from 'react-router-dom';
import SNavbar from './style';

export default function Navbar() {
  return (
    <SNavbar>
      <Link to="/">Home</Link>
      <Link to="/searchpage">Search Page</Link>
    </SNavbar>
  );
}
