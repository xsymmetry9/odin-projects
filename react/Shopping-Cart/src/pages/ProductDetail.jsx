import React, {useState, useEffect} from 'react';
import { Link, useParams, useOutletContext } from 'react-router-dom';
import Loading from './Loading';
import RenderImage from '../components/Image/RenderImage';
import styled from 'styled-components';
import Cart from "./Cart";

const Container = styled.div`
max-width: 1100px;
padding: 3rem 0;
margin-inline: auto;
display: grid;
grid-template-columns: 1fr 1fr;
`

const Wrapper = styled.div`
`
const ProductDetail = (props) =>{
    const [state, setState] = useState({items: [], status: "loading"});
    const {id} = useParams();

    useEffect(() => {
      fetch('https://fakestoreapi.com/products', { mode: "cors" })
        .then((response) => response.json())
        .then((response) => setState({items: response, status: "loaded"}))
        .catch((error) => {
          console.log("error", error);
          setState({items: [], status: "error"});
        })
    }, []);

    const item = state.items.find((item) => item.id === parseInt(id));
  
    return(
        <>
            {state.status === "loading" ? <Loading /> : (
                <Container>
                    <RenderImage item={item} style={`image-size-${"large"}`} />
                    <Wrapper>
                        <h1>{item.title}</h1>
                        <p>${item.price.toFixed(2)}</p>
                        <p>{item.description}</p>
                        <button>Add to Cart</button>
                        <Link to="/store">go back to store</Link>

                    </Wrapper>
       
                </Container>
          
            )}
        </>
    )
}

export default ProductDetail;