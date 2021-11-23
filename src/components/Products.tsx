/** @format */

import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-template-rows: repeat(auto-fit, 1fr);
`;

const Products = () => {
  return (
    <Container className='flex flex-wrap p-7'>
      {popularProducts.map((product) => {
        return <Product img={product.img} id={product.id} />;
      })}
    </Container>
  );
};

export default Products;
