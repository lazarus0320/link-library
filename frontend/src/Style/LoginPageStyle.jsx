import styled from 'styled-components';
import loginBackground from '../images/logInBackground.png';

import { LoginSlider } from '../Components/LoginSlider';

export const Logo = styled.img`
  width: 250px;
  height: 50px;
  align-self: flex-start;
  margin-top: 22px;

  @media screen and (max-width: 768px) {
    align-self: center;
  }
`;

export const Background = styled.div`
  background-image: url(${loginBackground});
  background-size: cover;
  background-position: center;
  position: fixed;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

export const Container = styled.div`
  width: 70vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 90vw;
    height: 70vh;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 50px;
  }
`;

export const LoginBox = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
`;

export const Form1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25vw;

  @media screen and (max-width: 768px) {
    padding-left: 0;
    margin-bottom: 30px;
    justify-content: center;
  }
`;

export const Form2 = styled.form`
  display: flex;
  flex-direction: column;
  width: 25vw;
  text-align: center;
  font-size: 1.2rem;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    width: 60vw;
    justify-content: center;
  }
`;

export const BottomMargin = styled.div`
  margin-bottom: 5vh;
`;

export const ImgForm = () => {
  return (
    <>
      <BottomMargin />
      <LoginSlider />
    </>
  );
};

export const Input = styled.input`
  height: 45px;
  padding-left: 10px;
  margin-bottom: 20px;
  font-size: 1rem;
  border: none;
  background-color: #dee2e6;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  height: 45px;
  background-color: #f03e3e;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 1.4rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    background-color: #ff6b6b;
  }
`;
