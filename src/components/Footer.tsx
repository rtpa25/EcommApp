/** @format */

import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@material-ui/icons';
import styled from 'styled-components';

interface SocialIconProps {
  color: string;
}

const SocialIcon = styled.div<SocialIconProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.8rem;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: teal;
    transform: scaleY(1.1);
    box-shadow: rgba(0, 0, 0, 0.2);
  }
`;

const ContactItem = styled.div`
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: teal;
    transform: scaleY(1.1);
    box-shadow: rgba(0, 0, 0, 0.2);
  }
`;

const Footer = () => {
  return (
    <div className='flex'>
      <div className='flex flex-col flex-1 p-7'>
        <h1 className='text-4xl font-semibold'>LAMA.</h1>
        <p className='my-7 '>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className='flex '>
          <SocialIcon color='3B5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <Pinterest />
          </SocialIcon>
        </div>
      </div>
      <div className=' p-7'>
        <Title>Useful Links</Title>
        <ul className='flex flex-wrap p-0 m-0'>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </ul>
      </div>
      <div className=' p-7'>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} /> 622 Dixie Path , South
          Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} /> contact@lama.dev
        </ContactItem>
        <img src='https://i.ibb.co/Qfvn4z6/payment.png' alt='payment methods' />
      </div>
    </div>
  );
};

export default Footer;