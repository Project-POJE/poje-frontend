import styled from 'styled-components';
import { BsFillPersonFill, BsFillPencilFill } from 'react-icons/bs';
import { AiFillCalendar } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { breakPoint } from '../../../styledComponents/media';
import usePortfolioAboutMe from '@src/hooks/portfolio/aboutMe/usePortfolioAboutMe';
import { useRecoilState } from 'recoil';
import ModifyBtn from '../common/ModifyBtn';
import { isModifyModeFormPortfolioAboutMe } from '@src/store/portfolio/modify';
import { RxGithubLogo } from 'react-icons/rx';
import { FaBloggerB } from 'react-icons/fa';

export default function PortfolioAboutMe() {
  const { aboutMe } = usePortfolioAboutMe();
  const [isModifyMode, setModifyMode] = useRecoilState(
    isModifyModeFormPortfolioAboutMe
  );
  return (
    <>
      <InfoList>
        <InfoItem>
          <InfoDiv>
          <BsFillPersonFill className='font' />
          <InfoText>
            <p>이름</p>
            <p>{aboutMe.nickName}</p>
          </InfoText>
          </InfoDiv>
        </InfoItem>
        <InfoItem>
          <InfoDiv>
            <MdEmail className='font' />
            <InfoText>
              <p>이메일</p>
              <p>{aboutMe.email}</p>
            </InfoText>
          </InfoDiv>
        </InfoItem>
        <InfoItem>
        <InfoDiv>
          <BsFillPersonFill className='font' />
          <InfoText>
            <p>연락처</p>
            <p>{aboutMe.phoneNum}</p>
            </InfoText>
            </InfoDiv>
        </InfoItem>
        <InfoItem>
        <InfoDiv>
          <AiFillCalendar className='font' />
          <InfoText>
            <p>생년월일</p>
            <p>{aboutMe.birth}</p>
            </InfoText>
            </InfoDiv>
        </InfoItem>
        <InfoItem>
        <InfoDiv>
          <BsFillPencilFill className='font' />
          <InfoText>
            <p>학력</p>
            <p>{aboutMe.academic}</p>
            </InfoText>
            </InfoDiv>
        </InfoItem>

        <InfoItem>
        <InfoDiv>
          <BsFillPencilFill className='font' />
          <InfoText>
            <p>학과</p>
            <p>{aboutMe.dept}</p>
            </InfoText>
            </InfoDiv>
        </InfoItem>
      </InfoList>
      <Footer>
        <div>
          <RxGithubLogo className='font'/>
          <SiteLink href={aboutMe.gitHubLink} target='_blank'>{aboutMe.gitHubLink}</SiteLink>
        </div>
        <div>
          <FaBloggerB className='font'/>
          <SiteLink href={aboutMe.blogLink} >{aboutMe.blogLink}</SiteLink>
        </div>
      </Footer>
      <ModifyBtn
        isModifyMode={isModifyMode}
        handleModifyMode={() => setModifyMode(true)}
      />
    </>
  );
}


const InfoList = styled.ul`
  position:relative;
  display: flex;
  flex-wrap: wrap;
  .font {
    font-size: 32px;
  }

  @media screen and (max-width: ${breakPoint.mm}) {
    
  }
`;

const InfoItem = styled.li`
  position:relative;
  padding: 2rem 0;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0; */
  width:calc(100%/3);
    
  

  @media screen and (max-width: ${breakPoint.mmm}) {
    width:50%;

  }

  @media screen and (max-width: ${breakPoint.s}) {
    width:100%;
    
  }

  @media screen and (min-width: ${breakPoint.mm}) {
    
  }
`;

const InfoText = styled.div`
  margin-left: 1rem;

  & p {
    font-size: ${({ theme }) => theme.fontMiddleSize};
  }

  & p:first-child {
    font-weight: bold;
  }
  & p:last-child {
    font-size: ${({ theme }) => theme.fontRegular};
  }
`;

const InfoDiv = styled.div`
  display:flex;
  width:100%;
  max-width:10rem;
  margin:0 auto;
`

const Footer = styled.div`
  display: flex;
  justify-content: space-around;



  & > div{
    display:flex;
    align-items: center;
  }

  .font {
    font-size: ${({ theme }) => theme.iconSize};
  }

  @media screen and (max-width: ${breakPoint.mm}) {
    align-items: center;
    flex-direction: column;
    gap:1rem;
  }
`;

const SiteLink = styled.a`
  margin-left:0.8rem;
  font-size: ${({ theme }) => theme.fontMiddleSize};
`;
