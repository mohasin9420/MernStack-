import React from "react";

function ProductCard(props) {
 return (
<div>
 <h2>{props.productName}</h2>
 <p>Price: ${props.price}</p>
 <img src={props.imageUrl} alt={props.productName} />
</div>
 );
}

export default ProductCard;