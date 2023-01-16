import React, { Children, useContext } from "react";
export const CartContext = React.createContext ([])
import { useState } from "react";
export const useCartContext = () => useContext (CartContext)
const CartProvider = ({children}) => {
const [carrito, setCarrito] = useState ([]);

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
const borrarProducto = (id) => setCarrito (carrito.filter(product => product.id !== id));
const productoCarrito = (id) => {return carrito.find (product => product.id === id )? true : false; }
const limpiar = () => setCarrito ([]);
const totalPrecio = () => {
    return carrito.reduce ((prev,act)=> prev + act.quantity * act.price, 0) ;
}
const totalProductos = () => carrito.reduce ((acumulador,productoActual) => acumulador + productoActual.quantity, 0);
   return (
<CartContext.Provider value={{
   agregarProducto,
    borrarProducto,
    productoCarrito,
    limpiar,
    totalPrecio,
    totalProductos,
    carrito
}}>
    {children}
</CartContext.Provider>
    );
}
export default CartProvider;