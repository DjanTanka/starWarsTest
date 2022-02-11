import {useEffect, useRef, useState} from "react";
import Header from "../src/components/Header/Header";
import ProductsList from "../src/components/ProductsList/ProductsList";
import styles from "./Index.module.sass";
import axios from "../src/heplers/axios";
import {useScrollEnd} from "../src/hooks/useScrollEnd";
import {useStore} from "../src/store";
import Popover from "../src/components/Popover/Popover";

const Home = () => {
  const {products, setProducts, count, setCount, err, setErr} = useStore();
  const ref = useRef();
  const isScrollEnd = useScrollEnd(ref);

  const [isLoading, setLoading] = useState(false);

  const getProductsByPage = async () => {
    try {
      setLoading(true);
      const {data} = await axios.get(`products?page=${count.count}`);
      setProducts((prev) => [...prev, ...data.data]);
      setCount((prev) => ({
        totalPages: data.meta.totalPages,
        count: prev.count + 1,
      }));
      setLoading(false);
    } catch (error) {
      setErr(error);
    }
  };

  useEffect(() => {
    getProductsByPage();
  }, []);

  useEffect(() => {
    if (isScrollEnd) {
      getProductsByPage();
    }
  }, [isScrollEnd]);

  return (
    <div ref={ref} className={styles.wrapper}>
      <Header isProductList={true} />
      <ProductsList products={products} isLoading={isLoading} />
      {err && <Popover />}
    </div>
  );
};

export default Home;
