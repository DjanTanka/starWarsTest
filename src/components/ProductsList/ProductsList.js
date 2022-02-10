import {useRouter} from "next/router";
import React, {useCallback} from "react";

import styles from "./ProductsList.module.sass";

const ProductsList = ({products, isLoading, isItemProduct}) => {
  const history = useRouter();

  const handleGotoItem = useCallback((id) => {
    history.push(`/product/${id}`);
  });

  return (
    <div className={styles.wrapper}>
      {isItemProduct && <h1>Related Figures</h1>}
      <div className={styles.contaner}>
        {products.map((product) => (
          <div
            key={`${product.id}-${product.name}`}
            className={styles.item}
            onClick={() => handleGotoItem(product.id)}
          >
            <img src={`${process.env.API}${product.image}`} />
            <h1>{product.name}</h1>
            <div className={styles.discription}>{product.shortDescription}</div>
            <button>{`Buy $${product.price * 0.01}`}</button>
          </div>
        ))}
      </div>

      {isLoading && <div>loading....</div>}
    </div>
  );
};

export default ProductsList;
