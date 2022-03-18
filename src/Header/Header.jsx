import './Header.css';

const Header = () => {
  return (
    <header className="Header-main">
      <div className='Header'>
        <h1>Scr<strong>ee</strong>no</h1>
        <nav>
          <ul>
            <li to="/">Exemplets</li>
            <li to="/about">Pricing</li>
            <li to="/contact">About</li>
          </ul>
        </nav>
        <div className="Button">
          <button id="login">Login</button>
          <button id="start">Start Free Trail</button>
        </div>
      </div>
    </header>
  );
}
export default Header;