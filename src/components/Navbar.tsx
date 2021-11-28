/** @format */

import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../hooks';

const Container = styled.div`
  @media only screen and (max-width: 890px) {
    height: 4rem;
  }
`;

const SearchBar = styled.div`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;
const Right = styled.div`
  @media only screen and (max-width: 890px) {
    justify-content: flex-start;
  }
  @media only screen and (max-width: 420px) {
    font-size: 1rem;
  }
`;

const Heading = styled.h1`
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: teal;
  }
  @media only screen and (max-width: 420px) {
    font-size: 1.5rem;
  }
`;

const Input = styled.input`
  &:focus {
    outline: none !important;
    border: 1px solid teal;
  }
`;

const Navbar = () => {
  const cartQuantity = useAppSelector((state) => state.cart.quantity);

  return (
    <Container className='h-24'>
      <div className='flex justify-between px-4 py-4'>
        <SearchBar className='flex items-center p-2 ml-10 border border-gray-300 border-solid'>
          <Input className='border-none' />
          <Search style={{ color: 'gray', fontSize: 19 }} />
        </SearchBar>

        <div className='text-center'>
          <Heading className='text-4xl font-semibold'>NYKA.</Heading>
        </div>
        <Right className='flex items-center justify-end '>
          <div className='right-btn'>REGISTER</div>
          <div className='right-btn'>SIGNIN</div>
          <Link to={'/cart'}>
            <div className='right-btn'>
              <Badge badgeContent={cartQuantity} color='primary'>
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </Link>
        </Right>
      </div>
    </Container>
  );
};

export default Navbar;
