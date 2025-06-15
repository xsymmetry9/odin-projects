import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Cards/Card";

const Container = styled.div`
  position: relative;
  width: 1100px;
  padding: 12px;
  overflow: hidden;
  margin: 0 auto; 
  background: #fff;
  background-clip: padding-box;

  &:: before{
  content: "";
  position: absolute;
  top:-2px;
  left: -2px;
  'right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  z-index: -1
  border-radius: 15px;
  }
`;

const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  list-style: none;
  transition: transform 0.5s ease;
  padding: 0;
  margin: 0;
`;

const List = styled.li`
  display: flex;
  flex: 0 0 33.33%; /* Adjust to show three items */
  box-sizing: border-box;
`;

const StyledLink = styled(Link)`
text-decoration: none;
`

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: black;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
  font-size: 24px; /* Increase size for better visibility */
`;

const LeftButton = styled(Button)`
  left: 0;
`;

const RightButton = styled(Button)`
  right: 0;
`;

const Carousel = (props) => {
  const {items, style, handle} = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(items.length - 3, 0) : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= items.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <>  
      <Container>
        <LeftButton onClick={handlePrevClick}>&#9664;</LeftButton> {/* Left arrow */}
        <RightButton onClick={handleNextClick}>&#9654;</RightButton> {/* Right arrow */}
        <ListContainer style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
          {items.map((item, index) => (
            <List key={index}>
              {/* <StyledLink to={`/store/${item.id}`}>
                <Card item={item} style={style} cart = {cart} />
              </StyledLink> */}
              <Card item={item} style={style} handle = {handle} />

            </List>
          ))}
        </ListContainer>
      </Container>
    </>
  );
};

export default Carousel;
