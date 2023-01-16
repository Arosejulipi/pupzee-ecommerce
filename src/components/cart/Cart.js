
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "./ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";
export const Cart = () => {
    const {carrito,totalPrecio} = useCartContext ();
const order = {
    buyer:{
        name: "pablo",
        email: "pablo@gmail.com",
        phone: "16464"
    },
    items:carrito.map(product => ({id:product.id, name:product.name, price:product.price, quantity:product.quantity})),
 }
} 
const handleClick = () => {
const db = getFirestore();
const ordersCollection = collection(db,"orders");
addDoc(ordersCollection,order)
.then(((id)) => console.log(id))
}
 
 return (
<div>
   {
   carrito.map(product => <ItemCart key={product.id} product={product}/>)}
    <Link to={"/"}>seguir comprando</Link>
<p>Total:{totalPrecio}</p>
<button onClick={handleClick}>Terminar compra</button>
</div>
    );

export default Cart;