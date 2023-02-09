import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';
import JobPortfoliosByCategory from './JobPortfoliosByCategory';

export default function JobSearchContent() {
  return (
    <ProfileContainer>
      <ErrorBoundary
        FallbackComponent={() => <div>해당 직무는 존재하지 않습니다.</div>}
      >
        <Suspense fallback={<div>로딩중</div>}>
          <JobPortfoliosByCategory />
        </Suspense>
      </ErrorBoundary>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 1rem 2rem;
  overflow: auto;
`;
