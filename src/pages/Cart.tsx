/** @format */
import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

interface TopButtonProps {
  bod: 'outlined' | 'filled';
}

const TopButton = styled.button<TopButtonProps>`
  padding: 0.625rem;
  font-weight: 600;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${(props) =>
      props.bod === 'outlined' ? 'black' : 'white'};
    border: ${(props) =>
      props.bod === 'filled' ? '1px solid rgba(16, 185, 129, 1)' : 'none'};
    color: ${(props) =>
      props.bod === 'filled' ? 'black' : 'rgba(16, 185, 129, 1)'};
  }
`;

const TopText = styled.span`
  cursor: pointer;
  text-decoration: underline;
  margin: 0 1.925rem;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 15rem;
`;

const Details = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

interface ProductColorProps {
  color: string;
}

const ProductColor = styled.div<ProductColorProps>`
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProductAmount = styled.div`
  font-size: 1.5rem;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 1.875rem;
  font-weight: 200;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 0.625rem;
  padding: 1.25rem;
  height: 50vh;
`;

const SummaryItem = styled.div`
  margin: 1.875rem 0;
  display: flex;
  justify-content: space-between;
`;

const Cart = () => {
  return (
    <div className=''>
      <Navbar />
      <Announcement />
      <div className='p-5 text-gray-700'>
        <h1 className='text-4xl font-light text-center'>YOUR BAG</h1>
        <div className='flex items-center justify-between p-5'>
          <TopButton
            bod='outlined'
            className='border border-green-500 border-solid '>
            CONTINUE SHOPPING
          </TopButton>
          <div>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </div>
          <TopButton bod='filled' className='text-green-500 bg-black '>
            CHECKOUT NOW
          </TopButton>
        </div>
        <div className='flex justify-between'>
          <Info className=''>
            <Product>
              <ProductDetail>
                <Image src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A' />
                <Details>
                  <span>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span>
                    <b>ID:</b> 93813718293
                  </span>
                  <ProductColor color='black' />
                  <span>
                    <b>Size:</b> 37.5
                  </span>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <hr />
            <Product>
              <ProductDetail>
                <Image src='https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png' />
                <Details>
                  <span>
                    <b>Product:</b> HAKURA T-SHIRT
                  </span>
                  <span>
                    <b>ID:</b> 93813718293
                  </span>
                  <ProductColor color='gray' />
                  <span>
                    <b>Size:</b> M
                  </span>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary className=''>
            <h1 className='text-4xl font-extralight'>ORDER SUMMARY</h1>
            <SummaryItem>
              <span>Subtotal</span>
              <span>$ 80</span>
            </SummaryItem>
            <SummaryItem>
              <span>Estimated Shipping</span>
              <span>$ 5.90</span>
            </SummaryItem>
            <SummaryItem>
              <span>Shipping Discount</span>
              <span>$ -5.90</span>
            </SummaryItem>
            <SummaryItem className='text-xl font-semibold'>
              <span>Total</span>
              <span>$ 80</span>
            </SummaryItem>
            <TopButton
              bod='outlined'
              className='border border-green-500 border-solid '>
              CHECKOUT NOW
            </TopButton>
          </Summary>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Cart;
