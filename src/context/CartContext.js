import React, { Children, useContext } from "react";
export const CartContext = React.createContext ([])
import { useState } from "react";
export const useCartContext = () => useContext (CartContext)
export const CartProvider = ({children}) => {
const [carrito, setCarrito] = useState ([]);


const borrarProducto = (id) => setCarrito (carrito.filter(product => product.id !== id));
const productoCarrito = (id) => {return carrito.find (product => product.id === id )? true : false; }
const limpiar = () => setCarrito ([]);

const agregarProducto = (item,quantity) => {
    let nuevoCarrito;
    let producto = carrito.find(product => product.id === item.id);
    if (producto){
        producto.quantity += quantity;
        nuevoCarrito = [...carrito];
    }else{
        producto = {...item, quantity: quantity};
        nuevoCarrito = [...carrito,producto];
    }
setCarrito(nuevoCarrito)
}
   return (
<CartContext.Provider value={{
   
    borrarProducto,
    productoCarrito,
    limpiar,
}}>
    {children}
</CartContext.Provider>
    );
}
export default CartProvider;