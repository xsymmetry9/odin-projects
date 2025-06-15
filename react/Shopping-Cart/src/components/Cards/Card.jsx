import styled from "styled-components";
import React, {useState} from 'react';
import RenderImage from "../Image/RenderImage";
import { Form } from "react-router-dom";

const Wrapper = styled.div`
    width: 260px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1rem;
    border: 2px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

`;

const TitlePriceWrapper = styled.div`
    margin-top: 0.6rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const Title = styled.h3`
    font-size: 1.2em;
    font-weight: 600;
    color: #333;
`;

const Price = styled.p`
    font-size: 1.1em;
    color: #007bff;
    font-weight: 500;
`;

const FormContainer = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
    padding-bottom: 1.8rem;
`
const Input = styled.input.attrs({type: "number", min: 0, max: 10})`
    width: 40px;
    height: auto;
    padding: 12px 8px;
    border: #333 1px solid;
    text-align: center;
    font-size: .9rem;
    font-weight: 400;
`;

const Button = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 10px;
    background-color: #c8102e;
    font-size: .9rem;
    font-weight: 600;
    color: white;
    padding: 12px 6px;

        &:hover {
        background-color: #a00d25;
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`
const Card = (props) => {
    const [quantity, setQuantity] = useState(0)
    const { item, style, handle } = props;

    const handleInput = (e) =>{
        setQuantity(e.target.value);
    }
    const handleButtonClick = () =>{
        handle(item, quantity);
        alert("You have bought an item");
        setQuantity(0);
    }
    return (
        <Wrapper>
                <RenderImage item={item} style={`image-size-${style}`} />
                <TitlePriceWrapper>
                    <Title>{item.title}</Title>
                    <Price>${item.price}</Price>
                    <FormContainer>
                        <Input value = {quantity} onChange={handleInput}></Input>
                        <Button onClick={handleButtonClick}>Add to Cart</Button>
                    </FormContainer>
                </TitlePriceWrapper>      
        </Wrapper>
    );
};

export default Card;
