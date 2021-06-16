import CartIcon from "./CartIcon.js";
import styles from "./YourCartButton.module.scss";

const YourCartButton = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className={styles.text}>Your Cart</span>
      <span className={styles.badge}>1</span>
    </button>
  );
};

export default YourCartButton;
