import JobSearchForm from '@src/components/home/JobPage/JobSearchForm';
import useUser from '@src/hooks/auth/useUser';
import styled from 'styled-components';
import JobContent from '../../components/home/JobPage/JobContent';
import JobNavbarVerticality from '../../components/home/JobPage/JobNavbarVerticality';

import { breakPoint, mediaMin } from '../../styledComponents/media';

export default function JobPages() {
  return (
    <Container>
      <JobNavbarVerticality />

      <JobContent />
    </Container>
  );
}

const Container = styled.section`
  background-color: ${(props) => props.theme.bgSemiDarkColor};
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
`;

const RightBox = styled.div`
  width: 100%;
  height: 100%;
`;
