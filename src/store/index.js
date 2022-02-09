import {createContext, useContext, useState} from "react";

const Store = createContext({});

export function useStore() {
  const store = useContext(Store);
  if (!store) {
    throw new Error("Something wrong!");
  } else {
    return store;
  }
}

export default function StoreProvider(children) {
  const [products, setProducts] = useState([]);
  const [itemProduct, setItemProduct] = useState({});
  const [count, setCount] = useState({totalPages: 1, count: 1});
  const [err, setErr] = useState('');

  const value = {
    products,
    setProducts,
    itemProduct,
    setItemProduct,
    count,
    setCount,
    err,
    setErr,
  };
  return <Store.Provider value={value} {...children} />;
}
