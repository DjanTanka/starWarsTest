import { useRouter } from "next/router";
import React from "react";

import styles from "./ProductsList.module.sass";

const Products = ({products, isLoading}) => {

  const history = useRouter()

  const handleGotoItem = (id) => {
    history.push(`/product/${id}`)
  }

  return (
    <div className={styles.contaner}>
      {products.map((product) => (
        <div
          key={`${product.id}-${product.name}`}
          className={styles.item}
          onClick={() => handleGotoItem(product.id)}
        >
          <img src={`https://react-test-starwars.vercel.app${product.image}`} />
          <h1>{product.name}</h1>
          <div className={styles.discription}>{product.shortDescription}</div>
          <button>{`Buy $${product.price * 0.01}`}</button>
        </div>
      ))}
       {isLoading && <div>loading....</div>}
    </div>
  );
};

export default Products;
