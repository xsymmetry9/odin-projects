import { useState, createContext } from 'react';
import Header from "./HeaderAndFooter/Header";
import Footer from "./HeaderAndFooter/Footer";
import User from "./pages/User";
import styled from 'styled-components';
import { Outlet, useLoaderData } from 'react-router-dom';


const PageWrapper = styled.div`
background-color: #fafafa;
display: flex;
flex-direction: column;
`;

export const ShopContext = createContext({
  products: [],
  cart: {},
  setCart: () => {},
});

const App = () => {
  const [cart, setCart] = useState(new User("Gary"));

  const products = useLoaderData();

  return (
    <ShopContext.Provider value = {{products, cart, setCart}}>
      <PageWrapper>
        <Header />
          <Outlet />
        <Footer/>
      </PageWrapper>
    </ShopContext.Provider>

  );
};

export default App;
