import React from "react";
import { createAProduct } from "../store/singleProduct";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../store/singleProduct"

class Adminform extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      imageUrl: "",
      description: "",
      quantity: "",
      price: "",
      fruitOrVeggie: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addToCart({ ...this.state });
  }

  render() {
    const { name, imageUrl, description, quantity, price, fruitOrVeggie } =
      this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <div id="classComponentForm">
        <form onSubmit={handleSubmit}>
          <h3>Add Product</h3>
          <label htmlFor="name"> Name:</label>
          <input name="name" onChange={handleChange} value={name} />

          <label htmlFor="imageUrl">imageUrl:</label>
          <input name="imageUrl" onChange={handleChange} value={imageUrl} />

          <label htmlFor="description">description:</label>
          <input
            name="description"
            onChange={handleChange}
            value={description}
          />

          <label htmlFor="quantity">quantity:</label>
          <input name="quantity" onChange={handleChange} value={quantity} />

          <label htmlFor="price">price:</label>
          <input name="price" onChange={handleChange} value={price} />

          <label htmlFor="fruitOrVeggie">Fruit Or Veggie:</label>
          <input
            name="fruitOrVeggie"
            onChange={handleChange}
            value={fruitOrVeggie}
          />

          <button id="button-12" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({

  addToCart: (product) => dispatch(createAProduct(product)),
  getProduct: (id) => dispatch(fetchSingleProduct(id)),
});

export default connect(null, mapDispatchToProps)(Adminform);