
import React from "react";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import { useState } from "react";
import { useEffect } from "react";
const productoaa = {id:1, Image:"https://res.cloudinary.com/dvvf8gdci/image/upload/v1673461507/cld-sample.jpg",description:"juego",price:120}
export const ItemDetailContainer = () => {
    const [data,setData] = useState({});
    useEffect (() =>{
        const getData= new Promise (resolve => {
            setTimeout(()=> {
                resolve(productoaa);
            },3000);
        })
        getData.then(res=>setData(res));
    },[])
    return (
<ItemDetail data={data}/>
    );
}
export default ItemDetailContainer;