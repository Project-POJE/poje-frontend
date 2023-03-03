import useMyInfo from '@src/hooks/member/useMyInfo';
import styled from 'styled-components';
import LoadingSpiner from '@src/components/portfolio/common/LoadingSpiner';

export default function MiniProfile() {
  const { userInfo, isLoading } = useMyInfo();
  console.log(userInfo, isLoading);
  return (
    <Container>
      {isLoading && <LoadingSpiner text={'로딩중'} />}
      <ProfileImg src={userInfo?.profileImg} />
      <NickName>{userInfo?.nickName}</NickName>
      <Email>{userInfo?.email}</Email>
      <UpdateBtn>프로필 수정</UpdateBtn>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 8rem;
  height: 8rem;
`;

const NickName = styled.h2`
  font-size: ${({ theme }) => theme.fontLargeSize};
  margin: 0.4rem 0;
`;

const Email = styled.p`
  font-size: ${({ theme }) => theme.fontRegular};
`;

const UpdateBtn = styled.button``;
