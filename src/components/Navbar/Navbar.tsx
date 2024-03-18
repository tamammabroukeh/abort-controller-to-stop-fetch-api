import classes from "./Navbar.module.scss";

const Navbar = ({ setPage }: { setPage: (value: string) => void }) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="#" onClick={() => setPage("Home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setPage("about")}>
            About us
          </a>
        </li>
        <li>
          <a onClick={() => setPage("useEffect")}>
            useEffect
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setPage("products")}>
            products
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
