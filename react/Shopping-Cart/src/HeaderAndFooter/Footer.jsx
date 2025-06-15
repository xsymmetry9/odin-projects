import styled from "styled-components";
import Accordion from "../components/Accordion/Accordion";

const Header = styled.header`
background-color: rgb(255, 255, 255);
`;

const Container = styled.footer`
background-color: inherit;
padding: 3rem 0;
max-width: 1100px;
gap: 10px;
margin-inline: auto;
`
const Container_menu = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;

`

const Footer = () =>{
    return(
        <>
        <Header>
            <Container>
                <Container_menu>
                    <Accordion title = {"My Account"} items = {[
                        "Membership Program", "Sign In",
                        "Register",
                       "Order Status",
                        "Returns"
                    ]}/>
                    <Accordion title = {"Help"} items = {
                    [
                        "Faq",
                        "Accessible Statement",
                        "Services",
                        "Ordering",
                        "Shipping Policy",
                        "Returns",
                        "Redeem Gift Cards",
                        "Sizing",
                        "Our Products",
                    ]
                    }/>
                    <Accordion title = {"About Us"} items = {
                        [
                            "Our Business",
                            "Media",
                            "Investors",
                            "Strategic Sales",
                           "Affiliates and Creators",
                            "Sweat Colective",
                            "Further"
                        ]
                    }/>
                    <Accordion title = {"Contact Us"} items = {
                        [
                            "Live Chat",
                            "Email Sign Up",
                            "Contact Us",
                        ]
                    }/>
                    </Container_menu>
                </Container>
            </Header>

        </>
    )
}

export default Footer;