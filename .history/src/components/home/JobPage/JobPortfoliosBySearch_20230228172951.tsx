import styled from 'styled-components';
import JobPortfolioListContent from './JobProfileListContent';

export default function JobPortfoliosBySearch() {
  return (
    <ProfileContainer>
      <JobPortfolioListContent >
        <div>1</div>
      </JobPortfolioListContent>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 1rem 2rem;
  overflow: auto;
  max-width: 1600px;
`;