import React from "react";
import Aux from "../../../hoc/Aux.js";
import Button from "../../UI/Button/Button";
const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>
        Your order for burger with the following ingredients has been placed
      </h3>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total price:{props.price}</strong>
      </p>
      <p>Continue to checkout</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        Continue
      </Button>
    </Aux>
  );
};
export default orderSummary;
