/** @format */

import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';

const FilterContainer = styled.div`
  @media only screen and (max-width: 520px) {
    display: flex;
    flex-direction: column;
  }
`;
const Filter = styled.div`
  margin: 1.75rem;
  @media only screen and (max-width: 925px) {
    display: flex;
    flex-direction: column;
  }
`;

const FilterText = styled.span`
  font-size: 1.875rem;
  font-weight: 300;
  margin-right: 1.25rem;
  @media only screen and (max-width: 520px) {
    font-size: 1.5rem;
  }
`;

const Select = styled.select`
  padding: 0.625rem;
  margin: 1.25rem;
`;
const Option = styled.option``;

const Tiltle = styled.h1`
  @media only screen and (max-width: 520px) {
    font-size: 2rem;
  }
`;

const ProductList = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Tiltle className='text-5xl font-semibold m-7'>Dresses</Tiltle>
      <FilterContainer className='flex justify-between'>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
