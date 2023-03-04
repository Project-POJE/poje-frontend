import styled from 'styled-components';

export default function PasswordModifyPage() {
  return (
    <PwModifyPageContainer>
      <h2>비밀번호 변경하기</h2>
      <Item>
        <Label>현재 비밀번호</Label>
        <CommonInput />
      </Item>
    </PwModifyPageContainer>
  );
}

const PwModifyPageContainer = styled.form`
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  color: ${({ theme }) => theme.textColor};
`;

const Title = styled.h2`
  margin-bottom: 0.6rem 0;
`;

const Label = styled.label``;

const CommonInput = styled.input`
  color: ${({ theme }) => theme.textColor};
  font-size: 1.6rem;
  border: none;
  border-bottom: 1px solid black;
  background: transparent;
  outline: none;
  width: 100%;
`;

const Item = styled.div``;
