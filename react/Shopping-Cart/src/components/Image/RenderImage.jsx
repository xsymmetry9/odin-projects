import styles from "./Image.module.css";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
align-items:center;
justify-content: center;
overflow: hidden;
`
const Image = styled.img`
object-fit: contain;
aspect-ratio: 3/4;
`

const RenderImage = ({item, style}) =>{
    const {image, title} = item;
    return(
        <Wrapper>
            <Image className ={styles[style]} src={image} alt={title}/>
        </Wrapper>
    )
}

export default RenderImage;