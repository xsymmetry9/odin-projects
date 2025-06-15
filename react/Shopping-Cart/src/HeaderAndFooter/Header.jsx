import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../App";

const HeaderWrapper = styled.header`
background-color: rgb(255, 255, 255);
`
const Navigation = styled.nav`
max-width: 1100px;
padding: 10px 0;
margin-inline: auto;
display: flex;
justify-content: space-between;
`
//Why does the ul adds automatcially margin and padding?
const UnorderedList = styled.ul`
display: flex;
align-items: center;
list-style: none;
padding: 0;
margin: 0;
`
const List = styled.li`
display: flex;
gap: 5px;
`
const StyledLink = styled(Link)`
text-decoration: none;
text-transform: uppercase;
color: rgb(0, 0, 0);
padding: 5px 20px;
font-size: 16px;
font-weight: 600;
    &:hover
    {
        color: red;
    }
`;

const Header = () =>{
    const {cart} = useContext(ShopContext);

    return(
        <>
            <HeaderWrapper>
                <Navigation>
                    <StyledLink to= "/"><p>Logo</p></StyledLink>
                    <UnorderedList >
                        <List><StyledLink to ="store/women">Women</StyledLink></List>
                        <List><StyledLink to ="store/men">Men</StyledLink></List>
                        <List><StyledLink to ="store/jewelry">Jewelry</StyledLink></List>
                        <List><StyledLink to ="store/electronics">Electronics</StyledLink></List>
                        <List><StyledLink to= "store/cart">Cart <span>{cart.items.length}</span></StyledLink></List>
                    </UnorderedList>
                </Navigation>
            </HeaderWrapper>
        </>
    )
}

export default Header;