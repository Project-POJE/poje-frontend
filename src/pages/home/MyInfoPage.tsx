import MiniProfile from '@src/components/member/MiniProfile';
import MyPortfolioListContainer from '@src/components/member/MyPortfolioListContainer';
import styled from 'styled-components';

export default function MyInfoPage() {
  return (
    <MyInfoPageContainer>
      <MiniProfile />
      <MyPortfolioListContainer />
    </MyInfoPageContainer>
  );
}

const MyInfoPageContainer = styled.section`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;
