/** @format */
import styled from 'styled-components';

interface CategoryItemProps {
  id: number;
  img: string;
  title: string;
}

const Info = styled.div`
  top: 0;
  left: 0;
`;

const Container = styled.div`
  height: 70vh;
`;

const Button = styled.button`
  background-color: #fff;
  color: #000;
  transition: all 0.3s ease;
  &:hover {
    background-color: #000;
    color: #00d8d8;
  }
`;

const CategoryItem: React.FC<CategoryItemProps> = ({ img, title }) => {
  return (
    <Container className='relative flex-1'>
      <img src={img} alt='' className='object-cover w-full h-full' />
      <Info className='absolute flex flex-col items-center justify-center w-full h-full'>
        <h1 className='mb-5 text-4xl font-semibold text-white'>{title}</h1>
        <Button className='p-3 cursor-pointer'>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
