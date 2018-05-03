//Here we set the item/product by it's unique id
//import React & react router here
//import the style 


import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { PROD_IMAGE, ScreenSize } from '../../config';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

//set the mobile screensize & all queries
const mobile = ScreenSize.mobile;

const Wrapper = styled.li`
  /* text-decoration: none; */
  /* padding: 5px; */
  margin: 15px;
  position: relative;
  flex: 40%;
  @media (max-width: ${mobile}) {
    flex: 100%;
  }
`;

const Card = styled(Paper)`
  padding: 25px;
`;

const IMG = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  /* margin-bottom: 10px; */
  /* height: 100%; */
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  color: blue;
`;
const Price = styled.p`
  font-family: 'Roboto', sans-serif;
  color: blue;
`;

//return the id, name, image and price parameters
export default ({ id, name, image, price }) => {
  return (
    <Wrapper>
      <Card>
        <IMG src={`${PROD_IMAGE}${image}`} />
        <Details>
          <Title>{name}</Title>
          <Price>${price}</Price>
        </Details>
        <Link to={`/product/${id}`}>
          <RaisedButton label="view item" />
        </Link>
      </Card>
    </Wrapper>
  );
};