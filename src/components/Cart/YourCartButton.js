import { useContext, useEffect, useState } from "react";

import CartIcon from "./CartIcon.js";
import CartContext from "../../store/cart-context.js";
import styles from "./YourCartButton.module.scss";

const YourCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartContext = useContext(CartContext);

  const { items } = cartContext;

  const cartItemsNum = cartContext.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className={styles.text}>Your Cart</span>
      <span className={styles.badge}>{cartItemsNum}</span>
    </button>
  );
};

export default YourCartButton;
