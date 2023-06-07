import React from "react";
import './ItemListContainer.css'
import Title from "../Title";
import { useState, useEffect } from "react";
import { getProducts } from "../../itemsStock";
import ItemList from "../ItemList";

export const ItemListContainer = ({greeting}) => {
   const [products, setProducts] = useState([])

   useEffect(() => {
        getProducts()
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
   }, [])

   return(
    <div>
        <h1>{greeting}</h1>
        <ItemList products={products}/>
    </div>
   )
}

export default ItemListContainer;