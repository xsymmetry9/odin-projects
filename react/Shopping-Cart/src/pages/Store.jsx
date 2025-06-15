import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
padding: 10px;
`
const Store = () =>{


    return(
        <>
            <Content>
                <Outlet />
            </Content>
        </>
    )
}
export default Store;