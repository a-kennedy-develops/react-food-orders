import { Fragment } from "react";
import YourCartButton from '../Cart/YourCartButton.js'
import styles from "./Header.module.scss";

import pizzaHero from '../../assets/pizzaHero.jpg';

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <YourCartButton/>
      </header>
      <div className={styles['hero-image']}>
        <img src={pizzaHero} alt='Delicious, veggie pizza'/>
      </div>
    </Fragment>
  );
};

export default Header;
