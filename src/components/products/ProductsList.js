//import react | styles | set screen size queries here 
//export the products list here
//include the style for the queries here
//set the styling for mobile readyness color blue
import React from 'react';
import ProductsListItem from './ProductsListItem';
import styled from 'styled-components';
import { ScreenSize } from '../../config';



const mobile = ScreenSize.mobile;

const Wrapper = styled.div``;

const ListContainer = styled.ul`
  padding: 0px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  @media (max-width: ${mobile}) {
    flex-wrap: column;
  }
`;
const TitlePanel = styled.div`
  padding: 25px;
  text-align: center;
  @media (max-width: ${mobile}) {
    padding: 5px;
  }
`;
const Title = styled.h1`
  /* font-family: 'Roboto', sans-serif; */
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: blue;
  font-size: 3em;
  margin: 0;
  display: inline-block;
  border-bottom: 1px solid #383838;
  padding-bottom: 10px;
  @media (max-width: ${mobile}) {
    font-size: 1.5em;
    margin-top: 5px;
  }
`;


export default ({ products }) => {
  return (
    <Wrapper>
      <TitlePanel>
        <Title>IBM Invetory 2018</Title>
      </TitlePanel>
      <ListContainer>
        {products.map(item => (
          <ProductsListItem
            key={item._id}
            name={item.name}
            id={item._id}
            price={item.price}
            image={item.imagePath}
          />
        ))}
      </ListContainer>
    </Wrapper>
  );
};