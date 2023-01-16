
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getFirestore, collection, getDocs, query,where } from "firebase/firestore";
export const ItemListContainer = () => {
   const [data,setData] = useState([]);
   const {categorias}= useParams ();
   useEffect (()=>{
    const querydb = getFirestore();
    const queryCollection = collection(querydb,"productos");
   if(categorias){
    const queryCategorias = query(queryCollection,where("category","==", categorias))
    getDocs(queryCategorias)
    .then(res => setData(res.docs.map(product => ({id: product.id,...product.data}))))
   } else{
    getDocs(queryCollection)
    .then(res => setData(res.docs.map(product => ({id: product.id,...product.data()}))))
   }
 
    
   })
return (
<i className="bi bi-cart"></i>
    );
}
export default ItemListContainer;