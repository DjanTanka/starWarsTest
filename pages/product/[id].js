import {useEffect} from "react";
import {useStore} from "../../src/store";
import axios from "../../src/heplers/axios";
import ItemProduct from "../../src/components/ItemProduct/ItemProduct";
import {useRouter} from "next/router";
import ProductsList from "../../src/components/ProductsList/ProductsList";
import styles from "../Index.module.sass";
import Header from "../../src/components/Header/Header";
import Popover from "../../src/components/Popover/Popover";

const Item = () => {
  const {itemProduct, setItemProduct, err, setErr} = useStore();
  const router = useRouter();
  const getProductById = async (id) => {
    try {
      const {data} = await axios.get(`products/${id}`);
      setItemProduct(data.data);
      setErr("");
    } catch (error) {
      setErr(error.message);
    }
  };

  useEffect(() => {
    if (typeof router.query.id !== "undefined") {
      getProductById(router.query.id);
    }
  }, [router.query.id]);

  return (
    <div className={styles.wrapper}>
      <Header />
      {itemProduct.product && <ItemProduct itemProdact={itemProduct.product} />}
      {itemProduct.relatedProducts && (
        <ProductsList
          products={itemProduct.relatedProducts}
          isItemProduct={true}
        />
      )}
      {err && <Popover />}
    </div>
  );
};

export default Item;
