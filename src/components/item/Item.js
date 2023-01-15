
import React from "react";
import { Link } from "react-router-dom";

export const Item = ({info}) => {
    return (
<link to={"/detalle/${info.id}"}> 
</link>
    );
}
export default Item;