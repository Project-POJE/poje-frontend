import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { CommonBtn } from '../../styledComponents/styledComponents';
import { AuthFormContainer } from './styledComponets';

export default function AuthLoginForm() {
  const { register, handleSubmit } = useForm();
  return (
    <AuthFormContainer>
      <TopSide>
        <span>계정이 없으신가요?</span>
        <MoveToLoginOrSignUpBtn>SignUp</MoveToLoginOrSignUpBtn>
      </TopSide>
    </AuthFormContainer>
  );
}

const TopSide = styled.div`
  display: flex;
  align-items: center;
`;

const MoveToLoginOrSignUpBtn = styled(CommonBtn)`
  box-shadow: 2px 2px 3px 3px gray;
`;
