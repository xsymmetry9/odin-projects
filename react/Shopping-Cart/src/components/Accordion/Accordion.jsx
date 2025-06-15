import styled from "styled-components";
import React, {useEffect, useState} from "react";

const Footer_primarySection = styled.div`


`
const ListContainer = styled.ul`
padding: 0;
margin: 0;
display: ${(props) => (props.visible ? "block" : "none")};

`

const Button = styled.button`
width: 100%;
text-align: left;
margin: 0;
padding: 12px 0;
background-color: transparent;
border: none;
outline: none;
cursor: pointer;
font-size: .875rem;
font-weight: 600;
`

const Title = styled.h3`
font-size: .875rem;
font-weight: 600;
padding: 12px 0;
`

const List = styled.li`
color: rgb(83, 86, 90);
font-size: 17px;
list-style: none;
padding: 8px 0;
`;

const Accordion = (props) =>{
    const [visible, setVisible] = useState(true);
    const [activate, setActivate] = useState(false);

    useEffect(() =>{
        const handleResize = () =>{
            if(window.innerWidth >= 800)
            {
                setVisible(true);
                setActivate(false);
            } else {
                setVisible(false);
                setActivate(true); //sets to default

            }
        };

        handleResize();
        window.addEventListener(("resize"), handleResize);
        return() => window.removeEventListener(("resize"), handleResize);
    }, []);

    const handleButton = () =>{
        setVisible((prevVisible) => !prevVisible);
    }
    return (
        <Footer_primarySection>
            {!activate ? <Title>{props.title}</Title> : (<Button onClick={handleButton}>{props.title}</Button>)}
                <ListContainer visible ={visible}>
                    {props.items.map((item, index) => (
                        <List key ={index}>{item}</List>)
                    )}
                </ListContainer>
        </Footer_primarySection>
    )


}
export default Accordion;