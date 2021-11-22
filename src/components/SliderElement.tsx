/** @format */

import styled from 'styled-components';

interface Props {
  id: number;
  img: string;
  title: string;
  description: string;
  bg: string;
}

const Button = styled.button`
  transition: all 0.3s ease;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const SliderElement: React.FC<Props> = ({ img, title, description, bg }) => {
  return (
    <div
      className='flex items-center w-screen h-screen justify-evenly'
      style={{ backgroundColor: bg }}>
      <div className='flex-1 h-full'>
        <img src={img} alt='SUMMER SALE' className='w-full' />
      </div>
      <div className='flex-1 p-16'>
        <h1 className='font-semibold text-8xl'>{title}</h1>
        <p className='mx-0 my-16 text-xl font-normal tracking-widest'>
          {description}
        </p>
        <Button className='p-3.5 text-xl font-normal border border-solid border-black'>
          SHOP NOW
        </Button>
      </div>
    </div>
  );
};

export default SliderElement;
