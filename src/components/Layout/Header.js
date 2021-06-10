import { Fragment } from "react";
import styles from "./Header.module.scss";

import pizzaHero from '../../assets/pizzaHero.jpg';

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={styles['hero-image']}>
        <img src={pizzaHero} alt='Delicious, veggie pizza'/>
      </div>
    </Fragment>
  );
};

export default Header;
