import React from "react";

class Product extends React.Component {
  demo() {
    const productlist = ["laptop", "printer", "projector", "usb"];

    return (
      <ul>
        {productlist.map((product, index) => (
          <li key={product + index}>
            {product}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h2>Product List</h2>
        {this.demo()}
      </div>
    );
  }
}


export default Product;