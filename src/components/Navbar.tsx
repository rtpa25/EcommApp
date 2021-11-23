/** @format */

import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components';

const Heading = styled.h1`
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: teal;
  }
`;

const Input = styled.input`
  &:focus {
    outline: none !important;
    border: 1px solid teal;
  }
`;

const Navbar = () => {
  return (
    <div className='h-24'>
      <div className='flex justify-between px-4 py-4'>
        <div className='flex items-center flex-1'>
          <span className='text-lg font-light cursor-pointer'>EN</span>
          <div className='flex items-center p-2 ml-10 border border-gray-300 border-solid'>
            <Input className='border-none' />
            <Search style={{ color: 'gray', fontSize: 19 }} />
          </div>
        </div>
        <div className='flex-1 text-center'>
          <Heading className='text-4xl font-semibold'>LAMA.</Heading>
        </div>
        <div className='flex items-center justify-end flex-1'>
          <div className='right-btn'>REGISTER</div>
          <div className='right-btn'>SIGN IN</div>
          <div className='right-btn'>
            <Badge badgeContent={4} color='primary'>
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
