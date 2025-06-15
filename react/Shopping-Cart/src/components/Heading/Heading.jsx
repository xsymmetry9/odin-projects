import styled from "styled-components";

const Title1 = styled.h1`
    color: black;
    font-size: 3rem;
    text-transform: capitalize;
    text-align: center;
`;
const Title2 = styled.h2`
    font-size: 2rem;
    text-align: center;

`;
const Title3 = styled.h3`
    font-size: 1.5em;
`;
const Title4 = styled.h4`
    font-size: 1.5em;
`;

const Heading = ({title, headingType}) => {
    switch(headingType){
        case "h1":
            return <Title1>{title}</Title1>
        case "h2":
            return <Title2>{title}</Title2>
        case "h3":
            return <Title3>{title}</Title3>
        case "h4":
            return <Title4>{title}</Title4>
        }   
    }
export default Heading;