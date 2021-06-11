import CartIcon from "./CartIcon.js";
import styles from "./YourCartButton.module.scss";

const YourCartButton = (props) => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>0</span>
    </button>
  );
};

export default YourCartButton;
