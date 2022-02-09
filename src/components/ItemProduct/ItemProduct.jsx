import axios from "axios";
import React, {useState} from "react";
// import axios from "../../heplers/axios";
import {useStore} from "../../store";
import styles from "./ItemProduct.module.sass";

const ItemProduct = ({itemProdact}) => {
  const {err, setErr} = useStore();
  const [email, setEmail] = useState("");
  const imgSrc = `${process.env.API}${itemProdact?.image}`;
  const handlePreOrder = async (id) => {
    console.log("---id", id);
    if (email) {
      const isEmailCorrect =
        /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
          email
        );
      if (!isEmailCorrect) {
        setErr("incorrect email");
      } else {

      setErr("");
      const {res} = await axios.post(`/api/create-order`, {
        productId: id,
        email,
      });
      console.log("---res", res);
      }
    } else {
      setErr("введите емэйл");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.contaner}>
        <div className={styles.picture}>
          <img src={imgSrc} />
        </div>
        <div className={styles.descAndOrder}>
          <h1>{itemProdact.name}</h1>
          <p>{itemProdact.description}</p>
          <div className={styles.preOrder}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <button onClick={() => handlePreOrder(itemProdact.id)}>
              Pre-Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;
