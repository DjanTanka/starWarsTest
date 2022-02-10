import React, {useCallback, useState} from "react";
import axios from "axios";

import Popover from "../Popover/Popover";

import {useStore} from "../../store";

import styles from "./ItemProduct.module.sass";
import {INCORRECT_MAIL, NO_MAIL} from "../../contants/Error";

const ItemProduct = ({itemProdact}) => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");

  const mailRegEx =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  const {err, setErr} = useStore();
  const imgSrc = `${process.env.API}${itemProdact?.image}`;
  const handlePreOrder = async (id) => {
    if (email) {
      const isEmailCorrect = mailRegEx.test(email);
      if (!isEmailCorrect) {
        setErr(INCORRECT_MAIL);
      } else {
        setErr("");
        try {
          const {data} = await axios.post(`/api/create-order`, {
            productId: id,
            email,
          });
          setSuccess(data.data.message);
        } catch (error) {
          setErr(error?.message);
        }
      }
    } else {
      setErr(NO_MAIL);
    }
  };

  const handleEmailChange = useCallback(
    (e) => setEmail(e.target.value),
    [setEmail]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.contaner}>
        <div className={styles.picture}>
          <img src={imgSrc} />
        </div>
        <div className={styles.descAndOrder}>
          <h2>{itemProdact.name}</h2>
          <p>{itemProdact.description}</p>
          <div className={styles.preOrder}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            ></input>
            <button onClick={() => handlePreOrder(itemProdact.id)}>
              Pre-Order Now
            </button>
          </div>
        </div>
      </div>
      {success && <Popover success={success} setSuccess={setSuccess} />}
    </div>
  );
};

export default ItemProduct;
