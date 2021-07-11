import { useContext } from "react";

import CartIcon from "./CartIcon.js";
import CartContext from "../../store/cart-context.js";
import styles from "./YourCartButton.module.scss";

const YourCartButton = (props) => {
  const cartContext = useContext(CartContext);

  const cartItemsNum = cartContext.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className={styles.text}>Your Cart</span>
      <span className={styles.badge}>{cartItemsNum}</span>
    </button>
  );
};

export default YourCartButton;
