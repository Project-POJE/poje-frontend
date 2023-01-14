import styled from 'styled-components';
import JobNavbar from '../../components/home/JobPage/JobNavbar';
import { CgProfile } from 'react-icons/cg';
const items = [
  {
    titleImg: '',
    title: '안녕씹세요',
    name: '유승윤',
  },
  {
    titleImg: '',
    title: '좆런트엔드',
    name: '유승윤',
  },
  {
    titleImg: '',
    title: '안녕씹세요',
    name: '유승윤',
  },
  {
    titleImg: '',
    title: '안녕씹세요',
    name: '유승윤',
  },
  {
    titleImg: '',
    title: '안녕씹세요',
    name: '유승윤',
  },
];

export default function JobPages() {
  return (
    <Container>
      <JobNavbar />
      <PortFolioContainer>
        <PortFolioList>
          {items.map((item) => {
            return (
              <PortFolioItem>
                <PortFolioCard>
                  <ProfileImg
                    src={`${process.env.PUBLIC_URL}/public_assets/basicProfileImg.webp`}
                  />
                  <ProfileContent>
                    <h1>{item.name}</h1>
                    <p>{item.title}</p>
                    <span>{item.name}</span>
                  </ProfileContent>
                </PortFolioCard>
                {/* <img
                  src={
                    item.titleImg ||
                    `${process.env.PUBLIC_URL}/public_assets/write.jpg`
                  }
                /> */}
                {/* <h2>{item.title}</h2>
                <span>{item.name}</span> */}
              </PortFolioItem>
            );
          })}
        </PortFolioList>
      </PortFolioContainer>
    </Container>
  );
}

const Container = styled.section`
  background-color: ${(props) => props.theme.mainColorSemiDark};
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const PortFolioContainer = styled.section`
  z-index: 40;
  height: 100%;
  background-color: ${(props) => props.theme.mainColorSemiDark};
  overflow: auto;
`;

const PortFolioList = styled.ul`
  /* background-color: ${({ theme }) => theme.bgColor}; */
  margin: 0 auto;
  display: grid;
  grid-auto-rows: minmax(220px, 250px);
  padding: 2rem 2rem;
  overflow-y: auto;
  min-height: 0;
  gap: 10px;
  max-width: 1800px;

  @media screen and (max-width: 350px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media screen and (min-width: 1400px) {
    grid-template-columns: repeat(7, 1fr);
  }
  @media screen and (min-width: 1600px) {
    grid-template-columns: repeat(8, 1fr);
  }
  @media screen and (min-width: 1800px) {
    grid-template-columns: repeat(9, 1fr);
  }
`;

const PortFolioItem = styled.li`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  & > img {
    width: 100%;
    height: 200px;
  }
`;

const PortFolioCard = styled.div`
  position: relative;
  background: ${({ theme }) => theme.mainColorLight};
  width: 100%;
  height: 80%;
  border: 3px solid ${({ theme }) => theme.mainColor};
  border-radius: 1rem;
`;

const ProfileImg = styled.img`
  width: 50%;
  height: 50%;
  margin-left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid ${({ theme }) => theme.mainColor};
`;

const ProfileContent = styled.div`
  position: absolute;
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);

  & > h1 {
    font-size: 1.6rem;
    font-weight: 600;
    color: ${({ theme }) => theme.mainColorThickDark};
    margin-bottom: 0.6rem;
  }

  & > p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.mainColorSemiDark};
  }
`;
