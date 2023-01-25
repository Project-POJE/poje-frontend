import styled, { useTheme } from 'styled-components';
import PartHeader from '../common/PartHeader';
import * as S from '../styledComponents';
export default function ProjectsContainer() {
  const theme = useTheme();
  return (
    <Container>
      <PartHeader title={'Projects'} color={theme.textColor} />
      <Content>
        <ProjectHeader>
          <ProjectTitle>무슨 노래 부르지?</ProjectTitle>
          <ProjectSubTitle>(1인 프로젝트)</ProjectSubTitle>
        </ProjectHeader>
      </Content>
    </Container>
  );
}
const Container = styled(S.CommonSection)`
  background: ${({ theme }) => theme.mainColorLight};
`;

const Content = styled.div`
  background: ${({ theme }) => theme.bgColor};
  border-radius: 1rem;
  padding: 2rem;
`;

const ProjectHeader = styled.div``;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontLargeSize};
`;

const ProjectSubTitle = styled.h4``;
