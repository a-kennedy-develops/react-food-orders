import Card from "../UI/Card.js";
import MealItem from "./MealItem/MealItem.js";
import styles from "./AvailableMeals.module.scss";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Veggie Pizza",
    description: "Most popular veggie pizza in town!",
    price: 17.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "A messy, American classic",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "A large, healthy salad loaded with flavor",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
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
