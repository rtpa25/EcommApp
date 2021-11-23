/** @format */

import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';

const Wrapper = styled.div`
  @media only screen and (max-width: 685px) {
    flex-direction: column;
  }
`;

const ImgContainer = styled.div``;

const Image = styled.img`
  object-fit: cover;
  @media only screen and (max-width: 890px) {
    height: 100%;
  }
`;

const InfoContainer = styled.div`
  @media only screen and (max-width: 685px) {
    padding: 1rem 0;
  }
`;

const Title = styled.h1``;

const Desc = styled.p``;

const Price = styled.span``;

const FilterContainer = styled.div``;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 200;
`;

interface FilterColorProps {
  color: string;
}

const FilterColor = styled.div<FilterColorProps>`
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 0.4rem;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 0.625rem;
  padding: 0.4rem;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  @media only screen and (max-width: 1100px) {
    width: 75%;
  }
  @media only screen and (max-width: 685px) {
    width: 100%;
  }
`;

const AmountContainer = styled.div``;

const Amount = styled.span``;

const Button = styled.button`
  transition: all 0.3s ease;
  &:hover {
    background-color: #000;
    color: #00d8d8;
  }
  @media only screen and (max-width: 1100px) {
    font-size: 0.7rem;
  }
`;

const Product = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Wrapper className='flex p-12'>
        <ImgContainer className='flex-1'>
          <Image src='https://i.ibb.co/S6qMxwr/jean.jpg' />
        </ImgContainer>
        <InfoContainer className='flex-1 px-12 py-0'>
          <Title className='text-4xl text-gray-700 font-extralight'>
            Denim Jumpsuit
          </Title>
          <Desc className='mx-0 text-gray-700 my-7'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price className='text-4xl font-thin text-gray-500'>$ 20</Price>
          <FilterContainer className='flex justify-between w-6/12 mx-0 my-7'>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color='black' />
              <FilterColor color='darkblue' />
              <FilterColor color='gray' />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer className='flex items-center justify-between w-6/12'>
            <AmountContainer className='flex items-center text-semibold'>
              <Remove />
              <Amount className='flex items-center justify-center mx-2 my-0 border border-green-600 border-solid rounded-lg w-7 h-7'>
                1
              </Amount>
              <Add />
            </AmountContainer>
            <Button className='p-3.5 border border-green-600 border-solid font-medium'>
              ADD TO CART
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
