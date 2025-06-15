import styled from "styled-components";

const Text = styled.p`
    font-size:1.5em
    text-align: center;
    color: #BF4F74;
`;
const Wrapper = styled.section`
    background: papayawhip;
`;
const Loading = () =>{

    return(
        <>
            <Wrapper >
                <Text>Items are loading ...</Text>
            </Wrapper>
        </>);
}

export default Loading;