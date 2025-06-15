import React, {useContext} from 'react';
import { ShopContext } from '../App';
import { useOutletContext, useParams } from 'react-router-dom';
import Heading from "../components/Heading/Heading";
import Carousel from "../components/Carousel/Carousel";
import styled from 'styled-components';

const ContentWrapper = styled.div`
margin: 3rem;
`
const ItemLists = () =>{
    const {products, setCart} = useContext(ShopContext);
    const URLname = useParams();

    const addToCart = (item, quantity) => {
        setCart((prevCart) => ({
                    ...prevCart,
                    items: [...prevCart.items, { item, quantity }]
                }))
             
    };

    const getItemToCheck = () =>{
        switch(URLname){
            case "men":
                return "men's clothing";
                break;
            case "women":
                return "women's clothing";
                break;
            case "electronics":
                return "electronics";
                break;
            case "jewelry":
                return "jewelery";
                break;
            case "cart":
                return "cart";
                break;
            default:
                return "home"
        }
    }

    const checkThisItem = getItemToCheck();

    const PlotListItems = () =>{
        const men =[];
        const women = [];
        const jewelery = [];
        const electronics = [];
        products.forEach((item) =>{
            item.category === "men's clothing" ? men.push(item) : 
                item.category === "women's clothing" ? women.push(item) :
                item.category === "electronics" ? electronics.push(item) :
                item.category === "jewelery" ? jewelery.push(item) : false;
        });

        const arr = [];
        arr.push(men, women, jewelery, electronics);
        return(
            <>
                {
                    arr.map((item, index) => {
                        const headingTitle = item[0].category.toUpperCase(); //finds the first index category
                        return(
                        <div key={index}>
                            <Heading title = {headingTitle} headingType ={"h2"}/>
                            <Carousel items = {item} style = "medium" handle={addToCart}/>
                        </div>)
                    })
                }
            </>
        )
    }

    const ListItem = (items, str) =>{            
        const arr = [];
        items.forEach((item) =>{
            if(item.category == str)
            {
                arr.push(item);
            }
        })
        return arr;
    }
    const arr = ListItem(products, checkThisItem);

    return(
        <ContentWrapper>
             {checkThisItem == "home" ? 
                <PlotListItems /> : (
                checkThisItem === "cart" ? <h1>Cart</h1> : (
                    <Carousel items = {arr} style = "medium" handle={addToCart}/>
                )
             )}
        </ContentWrapper>
    )
}

export default ItemLists;