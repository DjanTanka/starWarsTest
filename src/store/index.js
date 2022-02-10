import {createContext, useContext, useState} from "react";
import { WRONG } from "../contants/Error";

const StoreContext = createContext({});

export function useStore() {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error(WRONG);
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
  return <StoreContext.Provider value={value} {...children} />;
}
