import { useRef, useState } from 'react';
import styles from './Checkout.module.scss';

const isEmpty = value => value.trim() === '';
const isFiveDigits = value => value.trim().length === 5;

const Checkout = (props) => {
    const [formInputsValid, setFormInputsValid] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    })

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
      event.preventDefault();

      const enteredName = nameInputRef.current.value;
      const enteredStreet = streetInputRef.current.value;
      const enteredPostalCode = postalCodeInputRef.current.value;
      const enteredCity = cityInputRef.current.value;

      const enteredNameIsValid = !isEmpty(enteredName);
      const enteredStreetIsValid = !isEmpty(enteredStreet);
      const enteredCityIsValid = !isEmpty(enteredCity);
      const enteredPostalCodeIsValid = isFiveDigits(enteredPostalCode);

      setFormInputsValid({
          name: enteredNameIsValid,
          street: enteredStreetIsValid,
          city: enteredCityIsValid,
          postalCode: enteredPostalCodeIsValid
      });

      const formIsValid = 
      enteredNameIsValid && 
      enteredStreetIsValid && 
      enteredCityIsValid && 
      enteredPostalCodeIsValid;

      if (!formIsValid) {
          return;
      }

      //Submit
      props.onConfirm({
          name: enteredName,
          street: enteredStreet,
          city: enteredCity,
          postalCode: enteredPostalCode
      })
    };
  
    return (
      <form className={styles.form} onSubmit={confirmHandler}>
        <div className={`${styles.control} ${formInputsValid.name ? '' : styles.invalid}`}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' ref={nameInputRef}/>
          {!formInputsValid.name && <p>Please enter a valid name</p>}
        </div>
        <div className={`${styles.control} ${formInputsValid.street ? '' : styles.invalid}`}>
          <label htmlFor='street'>Street</label>
          <input type='text' id='street' ref={streetInputRef}/>
          {!formInputsValid.street && <p>Please enter a valid street</p>}
        </div>
        <div className={`${styles.control} ${formInputsValid.postalCode ? '' : styles.invalid}`}>
          <label htmlFor='postal'>Postal Code</label>
          <input type='text' id='postal' ref={postalCodeInputRef}/>
          {!formInputsValid.postalCode && <p>Please enter a valid postal code</p>}
        </div>
        <div className={`${styles.control} ${formInputsValid.city ? '' : styles.invalid}`}>
          <label htmlFor='city'>City</label>
          <input type='text' id='city' ref={cityInputRef}/>
          {!formInputsValid.city && <p>Please enter a valid city</p>}
        </div>
        <div className={styles.actions}>
          <button type='button' onClick={props.onCancel}>
            Cancel
          </button>
          <button className={styles.submit}>Confirm</button>
        </div>
      </form>
    );
  };
  
  export default Checkout;