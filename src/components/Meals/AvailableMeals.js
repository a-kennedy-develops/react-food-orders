import Card from "../UI/Card.js";
import MealItem from "./MealItem/MealItem.js";

import { useEffect, useState } from "react";

import styles from "./AvailableMeals.module.scss";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  // const [meals, setMeals] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://react-food-orders-default-rtdb.firebaseio.com/meals.json');
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals();
    
  }, []);

  if (isLoading) {
    return <section className={styles.MealsLoading}>
      <p>Loading...</p>
    </section>
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
