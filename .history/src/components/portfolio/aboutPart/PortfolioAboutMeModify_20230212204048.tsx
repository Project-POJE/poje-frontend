import styled from 'styled-components';
import { BsFillPersonFill, BsFillPencilFill } from 'react-icons/bs';
import { AiFillCalendar } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { breakPoint } from '../../../styledComponents/media';
import { PortfolioAboutMePropType } from './portfolioAboutMeType';
import { useState } from 'react';
import useAboutMeModifyForm from '@src/hooks/portfolio/aboutMe/useAboutMeModifyForm';

export default function PortfolioAboutMeModify(data: PortfolioAboutMePropType) {
  const [inputData, setInputData] = useState({ ...data });
  const { form } = useAboutMeModifyForm();
  return (
    <InfoList>
      <InfoItem>
        <BsFillPersonFill className='font' />
        <InfoText>
          <p>이름</p>
          <InputText value={form.nickName} />
        </InfoText>
      </InfoItem>
      <InfoItem>
        <MdEmail className='font' />
        <InfoText>
          <p>이메일</p>
          <InputText value={form.email} />
        </InfoText>
      </InfoItem>
      <InfoItem>
        <BsFillPersonFill className='font' />
        <InfoText>
          <p>연락처</p>
          <InputText value={form.phoneNum} />
        </InfoText>
      </InfoItem>
      <InfoItem>
        <AiFillCalendar className='font' />
        <InfoText>
          <p>생년월일</p>
          <InputText value={form.birth} />
        </InfoText>
      </InfoItem>
      <InfoItem>
        <BsFillPencilFill className='font' />
        <InfoText>
          <p>학력</p>
          <InputText value={form.academic} />
        </InfoText>
      </InfoItem>

      <InfoItem>
        <BsFillPencilFill className='font' />
        <InfoText>
          <p>학과</p>
          <InputText value={form.dept} />
        </InfoText>
      </InfoItem>
    </InfoList>
  );
}

const InfoList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .font {
    font-size: ${({ theme }) => theme.iconSize};
  }
`;

const InfoItem = styled.li`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;

  @media screen and (max-width: ${breakPoint.ss}) {
    flex-basis: 100%;
  }

  @media screen and (min-width: ${breakPoint.mmm}) {
    flex-basis: 50%;
  }

  @media screen and (min-width: ${breakPoint.mm}) {
    flex-basis: 30%;
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

const InputText = styled.input`
  font-size: ${({ theme }) => theme.fontRegular};
  width: 70%;
`;
