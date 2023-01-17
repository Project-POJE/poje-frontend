import { AiFillTag } from 'react-icons/ai';
import styled from 'styled-components';
import { BsFillPersonFill } from 'react-icons/bs';

BsFillPersonFill;
AiFillCalendar;
FaMapMarkerAlt;
BsFillTelephoneFill;
MdEmail;
BsFillPencilFill;
export default function PortfolioAboutMe() {
  return (
    <CommonSection>
      <CommonHeader>
        <AiFillTag />
        <HeaderTitle>About Me</HeaderTitle>
      </CommonHeader>
    </CommonSection>
  );
}

const CommonSection = styled.section`
  padding: 6rem 6rem 6rem 6rem;
`;

const CommonHeader = styled.div`
  color: ${({ theme }) => theme.textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSectionTitle};
  gap: 1rem;
`;

const HeaderTitle = styled.h3`
  font-weight: 900;
  border-bottom: 1px solid black;
`;
