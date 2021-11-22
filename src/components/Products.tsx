/** @format */

import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';

const Products = () => {
  return (
    <div>
      {popularProducts.map((product) => {
        return <Product />;
      })}
    </div>
  );
};

export default Products;
