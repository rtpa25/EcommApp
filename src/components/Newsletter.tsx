/** @format */

import { Send } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  text-align: center;
`;
const Input = styled.input`
  flex: 8;
  padding: 1rem;
  &:focus {
    outline: none !important;
    border: 1px solid teal;
  }
`;
const Button = styled.button`
  flex: 1;
  background-color: teal;
  color: white;
  transition: all 0.3s ease;
  &:hover {
    background-color: black;
    color: teal;
  }
`;

const Newsletter = () => {
  return (
    <Container className='flex flex-col items-center justify-center'>
      <h1 className='mb-10 font-semibold text-7xl'>Newsletter</h1>
      <div className='mb-10 text-xl font-light'>
        Get timely updates from your favorite products.
      </div>
      <div className='flex items-center justify-between w-5/12 h-12 bg-white border border-gray-100 border-solid'>
        <Input placeholder='Your email' className='h-12' />
        <Button className='h-12'>
          <Send />
        </Button>
      </div>
    </Container>
  );
};

export default Newsletter;
