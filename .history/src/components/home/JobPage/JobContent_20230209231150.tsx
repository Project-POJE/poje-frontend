import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';
import JobPortfolios from './JobPortfoliosByCategory';
import JobSearchForm from './JobSearchForm';

export interface ProfileItemType {
  titleImg: string;
  title: string;
  description: string;
  like: number;
}

export default function JobContent() {
  return (
    <ProfileContainer>
      <JobSearchForm />
      <ErrorBoundary
        FallbackComponent={<div>해당 직무의 리스트가 존재하지 않습니다.</div>}
      >
        <Suspense fallback={<div>로딩중</div>}>
          <JobPortfolios />
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
