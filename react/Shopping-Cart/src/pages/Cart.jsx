import styled from "styled-components";
import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../App";
import { useOutletContext, Link } from "react-router-dom";
import RenderImage from "../components/Image/RenderImage";

const Content = styled.div`
max-width: 1100px;
width: 100%;
margin-inline: auto;
`;
const Container = styled.div`
display: flex;

gap: 10px;

align-items: center;
padding-bottom: 12px;
`
const Delete = styled.button`
background-color: red;
font-size: 16px;
padding: 2px 8px;
color: white;
border: none;
border-radius: 5px;`

const ItemInformationWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`
const PriceItemWrapper = styled.div`
display: flex;
gap: 20px;
`

const ItemWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`

const ContentWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;`

const UnorderedList = styled.ul`
  list-style: none;

`
const List = ({item, quantity}) =>{
    const [total, setTotal] = useState(0);

    useEffect(() =>{
        const handleTotal = () => {
            setTotal(quantity * item.price);
          };

          handleTotal();
      })

    return(
        <Container>
            <div>
                <RenderImage item={item} style={"image-size-medium"}/>
            </div>
            <ItemInformationWrapper>
                <h3>{item.title}</h3>
                <PriceItemWrapper>
                    <ItemWrapper>
                        <p>Item Price</p>
                        <span>{item.price}</span>
                    </ItemWrapper>
                    <ItemWrapper>
                        <p>Quantity</p>
                        <span>{quantity}</span>
                    </ItemWrapper>
                    <ItemWrapper>
                        <p>Total Price</p>
                        <span>{total}</span>
                    </ItemWrapper>
                </PriceItemWrapper>

        
            </ItemInformationWrapper>
      
   
   
        </Container>
    )
}
const ListItems = ({items}) =>{
    return(
        <UnorderedList>
            {
                items.map((item, index) => {
                    return(
                        <li key={index}>
                            <List item ={item.item} quantity = {item.quantity} />
                        </li>
                    )
                })
            }
        </UnorderedList>
    )
}
const Cart = () =>{
    const {cart} = useContext(ShopContext);
    const [total, setTotal] = useState(0);

      useEffect(() =>{
        const handleTotal = () => {
            const { items } = cart;
            let newTotal = 0;
            cart.items.forEach((item) => {
              newTotal += item.item.price * item.quantity;
            });
            setTotal(newTotal);
          };

          handleTotal();
      }, [cart])

      const plotTotal = ()=>{
        console.log(total);
      }

      const Cart = () => {
        return(
        
            <Content>
                <h1>My Bag <span>({cart.items.length})</span></h1>
                <Link to="/store">Continue Shopping</Link>
                <ContentWrapper>
                    <ul>
                        {cart.items.length > 0 ? <ListItems items ={cart.items}/> : <p>Your cart is empty</p>}
                    </ul>
                    <div>
                        <h1>Order Summary</h1>
                        <Wrapper><span>Subtotal</span><span>${total.toFixed(2)}</span></Wrapper>
                        <Wrapper><span>Shipping</span><span>0</span></Wrapper>
                        <Wrapper><span>Tax</span><span>0</span></Wrapper>
                        <Wrapper><span>Estimated Total</span><span>${total.toFixed(2)}</span></Wrapper>
                        <button onClick={plotTotal}>Checkout</button>
                    </div>
                </ContentWrapper>
            </Content>
        )
      }
    return(
        <>
            <Cart /> 
        </>
    )
}

export default Cart;