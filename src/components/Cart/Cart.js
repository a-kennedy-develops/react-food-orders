import Modal from "../UI/Modal";
import styles from "./Cart.module.scss";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{ id: "c1", name: "Fish & Chips", amount: 1, price: 14.99 }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
          <span>Total Amount</span>
          <span>$14.99</span>
      </div>
      <div className={styles.actions}>
          <button className={styles['button--alt']}>Close</button>
          <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
