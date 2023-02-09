import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';
import usePortfolioCRUD from '@src/hooks/portfolio/usePortfolioCRUD';
import { useParams } from 'react-router-dom';
export default function JobSearchForm() {
  const param = useParams<{ type: string }>();
  const { createPortfolio } = usePortfolioCRUD();

  return (
    <Form>
      <Container>
        <BiSearchAlt2 className='icon' />
        <SearchBar />
        <SearchBtn />
      </Container>
      <PortfolioMakeBtn
        type='button'
        onClick={() => createPortfolio({ job: param.type || '전체' })}
      >
        포트폴리오 만들기
      </PortfolioMakeBtn>
    </Form>
  );
}

const Form = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  background: ${({ theme }) => theme.bgColor};
  width: 60%;
  margin: 0 auto;
  .icon {
    font-size: 2rem;
  }
  display: flex;
  border-radius: 1rem;
  overflow: hidden;
`;

const SearchBar = styled.input.attrs({ type: 'text' })`
  width: 100%;
  border: none;
`;

const SearchBtn = styled.button`
  flex-shrink: 0;
  opacity: 0;
`;

const PortfolioMakeBtn = styled.button`
  font-size: ${({ theme }) => theme.fontRegular};
  position: absolute;
  right: 1rem;
  border: 2px solid ${({ theme }) => theme.bgColor};
  padding: 0.6rem;
  border-radius: 1rem;
`;
