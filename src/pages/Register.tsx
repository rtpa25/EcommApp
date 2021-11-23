/** @format */

import styled from 'styled-components';

const Container = styled.div`
  background: linear-gradient(rgba(0, 78, 14, 0.5), rgba(209, 209, 209, 0.5)),
    url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
`;

const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.5);
  flex: 1;
  min-width: 40%;
  margin: 1.25rem 0.625rem 0 0;
  padding: 0.625rem;
`;

const Button = styled.button`
  transition: all 0.3s ease;
  &:hover {
    background-color: #000;
    color: #00d8d8;
  }
`;

const Register = () => {
  return (
    <Container className='flex items-center justify-center w-screen h-screen'>
      <div className='w-5/12 bg-white p-7'>
        <h1 className='text-4xl font-light text-gray-700'>CREATE AN ACCOUNT</h1>
        <form className='flex flex-wrap'>
          <Input placeholder='name' />
          <Input placeholder='last name' />
          <Input placeholder='username' />
          <Input placeholder='email' />
          <Input placeholder='password' />
          <Input placeholder='confirm password' />
          <span className='mx-0 my-5 text-sm text-gray-500'>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <Button className='w-5/12 p-3 text-white bg-green-700'>CREATE</Button>
        </form>
      </div>
    </Container>
  );
};

export default Register;
