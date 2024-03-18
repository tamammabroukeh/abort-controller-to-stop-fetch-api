import { Fragment, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Navbar/Home";
import AboutUs from "./components/Navbar/AboutUs";
import Products from "./components/products";
import UseEffectHook from "./components/useEffectHook";

function App() {
  const [page, setPage] = useState("Home");
  return (
    <Fragment>
      <Navbar setPage={setPage} />
      {page === "Home" && <Home />}
      {page === "about" && <AboutUs />}
      {page === "products" && <Products />}
      {page === "useEffect" && <UseEffectHook />}
    </Fragment>
  );
}

export default App;
