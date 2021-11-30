/** @format */

import styled from 'styled-components';
import { AvatarGenerator } from 'random-avatar-generator';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Container = styled.div`
  box-shadow: 13px 13px 31px 7px rgba(0, 0, 0, 0.62);
  -webkit-box-shadow: 13px 13px 31px 7px rgba(0, 0, 0, 0.62);
  -moz-box-shadow: 13px 13px 31px 7px rgba(0, 0, 0, 0.62);
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10rem;
  padding: 5rem;
  width: 70%;
`;
const ImageContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Avatar = styled.img``;
const Username = styled.h2`
  font-size: 2.25rem;
  margin-left: 1rem;
  @media only screen and (max-width: 1200px) {
    font-size: 1.5rem;
  }
`;
const TextContainer = styled.div`
  flex: 3;
  font-size: 2.25rem;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TextContainerItem = styled.div`
  display: flex;
  margin: 0.5rem 0;
`;
const Key = styled.h3`
  margin-right: 1rem;

  @media only screen and (max-width: 1200px) {
    font-size: 1.5rem;
  }
  color: rgba(4, 120, 87, 1);
`;
const Value = styled.h3`
  color: #646464;
  @media only screen and (max-width: 1200px) {
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  margin-top: 3rem;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  padding: 1rem;
  background-color: #000;
  color: #00d8d8;
  &:hover {
    background-color: #fff;
    color: teal;
    border: 2px solid teal;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

const UserProfile = () => {
  const generator = new AvatarGenerator();
  const avatar = generator.generateRandomAvatar();

  return (
    <>
      <Navbar />
      <Announcement />
      <div className='flex items-center justify-center'>
        <Container>
          <ImageContainer>
            <Avatar src={avatar} />
            <Username>Ronit Panda</Username>
          </ImageContainer>
          <TextContainer>
            <TextContainerItem>
              <Key>Email:</Key>
              <Value>pandaronit25@gmail.com</Value>
            </TextContainerItem>
            <TextContainerItem>
              <Key>Shopping Since:</Key>
              <Value>24/12/2020</Value>
            </TextContainerItem>
            <TextContainerItem>
              <Button>Show Cart</Button>
            </TextContainerItem>
          </TextContainer>
        </Container>
      </div>

      <Newsletter />
      <Footer />
    </>
  );
};

export default UserProfile;
