import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { ShopContext } from "../App";

const Banner = styled.section`
display: grid;
justify-content: center;
align-items: center;
background-color: white;
color: black;
height: 692px;
overflow: hidden;
border-bottom: 1px solid lightgray;
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 1100px;
width: 100%;
`

const Heading = styled.h2`
color: inherit;
font-size: 56px;
margin: 0;
`
const Paragraph = styled.p`
color: inherit;
font-size: 28px;
margin: 0;
margin-top: 6px;
`

const CTAWrapper = styled.div`
margin: 19px;
`
const StyledLink = styled(Link)`
text-decoration: none;
font-size: 17px;
color: white;
font-weight: 500;
background-color: rgb(0, 113, 227);
padding: 12px 20px;
text-align: center;
border-radius: 980px;
&:hover{
    background-color:rgba(0, 113, 227, .7)}

`
const Homepage = () =>{
    const {products, cart, setCart} = useContext(ShopContext);
    console.log('This is the products: ' + products.length);
    console.log('This cart belongs to: ' + cart.name);

    return(
        <>
        <Banner>
            <Wrapper>
                <Heading>Our Collection</Heading>
                <Paragraph>Beautifully Designed. Carefully made for you.</Paragraph>
                <CTAWrapper>
                    <StyledLink to="/store">Explore more</StyledLink>
                </CTAWrapper>
            </Wrapper>
        </Banner>

 

        </>
    )
}

export default Homepage;