import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../axios-order";
import Spinner from "../../../components/UI/Spinner/Spinner";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };
  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Riya",
        address: {
          street: "Ambedkar Road",
          pincode: "400601",
          country: "India",
        },
        email: "rvg7437@gmail.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("./orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };
  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="your name"
        />
        <input
          className={classes.Input}
          type="text"
          name="email"
          placeholder="email"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="street"
        />
        <input
          className={classes.Input}
          type="text"
          name="postal"
          placeholder="postalCode"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          Order Now
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h3>Enter your contact details</h3>
        {form}
      </div>
    );
  }
}
export default ContactData;
