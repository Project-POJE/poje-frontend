import styled from 'styled-components';
import JobNavbar from '../../components/home/JobPage/JobNavbar';

const items = [
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
  {
    titleImg: '',
    title: '안녕씹세요',
    name: '유승윤',
  },
];

export default function JobPages() {
  return <Container></Container>;
}

const Container = styled.section`
  background-color: ${(props) => props.theme.mainColorSemiDark};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const PortFolioContainer = styled.section`
  z-index: 40;
  height: 100%;
  background-color: ${(props) => props.theme.mainColorSemiDark};
`;

const PortFolioList = styled.ul`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 350px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 420px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const PortFolioItem = styled.li``;
