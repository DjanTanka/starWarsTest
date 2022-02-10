import React from "react";

import styles from "./Header.module.sass";

const Header = ({isProductList}) => {
  return (
    <div className={styles.contaner}>
      <img src="/logo.png" alt="logo" />
      {isProductList && (
        <>
          <div className={styles.productName}>Star Wars Figures</div>
          <div className={styles.description}>
            Find the latest products for the biggest fans of the iconic saga.
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
