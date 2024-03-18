import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [counter, setCounter] = useState(0);
  const [products, setProducts] = useState([]);
  console.log("component");
  useEffect(() => {
    const controler = new AbortController();
    const signal = controler.signal;
    // const fetchProducts = async () => {
    //   try {
    //     const response = await fetch("https://fakestoreapi.com/products", {
    //       signal,
    //     });
    //     const data = await response.json();
    //     setProducts(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchProducts();
    // IIFE
    (async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          signal,
        });
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
    return () => {
      controler.abort();
    };
  }, []);
  useEffect(() => {
    console.log("mounteing");
    return () => {
      console.log("unmounting");
    };
  }, [counter]);
  return (
    <div>
      {products.length ? (
        products.map((product: { id: number; title: string }) => (
          <h3 key={product.id}>{product.title}</h3>
        ))
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default UseEffectHook;
