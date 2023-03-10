import styled from 'styled-components';
import { CommonBtn } from '../../styledComponents/styledComponents';

export const AuthFormContainer = styled.section`
  position: relative;
  /* 임시로 오토 */
  overflow-y: auto;
  max-width: 640px;
  width: 100%;
  height: 100%;
  padding: 3rem 3rem;
`;

export const TopSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => props.theme.mainColor};
  & span {
    font-size: 1rem;
    margin-right: 0.6rem;
    color: ${(props) => props.theme.mainColor};
    filter: brightness(0.9);
  }
`;

export const MoveToLoginOrSignUpBtn = styled(CommonBtn)`
  padding: 0 0;
  box-shadow: 1px 1px 1px 1px ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.mainColorSemiDark};
  & a {
    padding: 0.4rem 1.2rem;
  }

  &:hover {
    box-shadow: none;
    transform: translate(1px, 1px);
  }
`;

export const Header = styled.header`
  margin-top: 2rem;
  color: ${(props) => props.theme.textColor};
  & h1 {
    color: ${(props) => props.theme.mainColor};
    font-size: 3rem;
    font-weight: bold;
  }

  & p {
    font-size: 1.4rem;
    opacity: 0.4;
  }

  @media screen and (max-width: 400px) {
    & h1 {
      font-size: 2rem;
    }
  }
`;

export const AuthForm = styled.form`
  margin-top: 3rem;
  @media screen and (max-width: 400px) {
    margin-top: 0.6rem;
  }
`;

export const AuthLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 1.4rem;

  & span {
    font-size: 1.2rem;
    color: ${(props) => props.theme.mainColor};
    filter: brightness(0.9);
  }

  & input {
    margin-top: 0.8rem;
    font-size: 1.2rem;
    padding: 0.8rem 0.6rem;
    border: 1px solid ${(props) => props.theme.mainColorSemiDark};
    border-radius: 1rem;
    box-shadow: 1px 1px 8px ${(props) => props.theme.mainColor};
  }

  & select {
    margin-top: 0.8rem;
    font-size: 1.2rem;
    padding: 0.8rem 0.6rem;
    border: 1px solid ${(props) => props.theme.mainColorSemiDark};
    border-radius: 1rem;
    box-shadow: 1px 1px 8px ${(props) => props.theme.mainColor};
  }

  @media screen and (max-width: 400px) {
    margin-top: 1rem;
    & input {
      margin-top: 0.4rem;
      font-size: 1rem;
      padding: 0.8rem 0.6rem;
      border: 1px solid ${(props) => props.theme.mainColorSemiDark};
      border-radius: 1rem;
      box-shadow: 1px 1px 8px ${(props) => props.theme.mainColor};
    }

    & select {
      margin-top: 0.4rem;
      font-size: 1rem;
      padding: 0.8rem 0.6rem;
      border: 1px solid ${(props) => props.theme.mainColorSemiDark};
      border-radius: 1rem;
      box-shadow: 1px 1px 8px ${(props) => props.theme.mainColor};
    }
  }
`;

export const LoginBtn = styled(CommonBtn)`
  background: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.textAccentColor};
  width: 100%;
  padding: 0.8rem auto;
  font-size: 1.2rem;
  box-shadow: 1px 1px 8px gray;
  margin-top: 3rem;

  @media screen and (max-width: 400px) {
    padding: 0.2rem auto;
    margin-top: 1.2rem;
  }
`;
