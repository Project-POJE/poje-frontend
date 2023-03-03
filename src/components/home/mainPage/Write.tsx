import { Link } from 'react-router-dom';
import {
  ImgContainer,
  MainButton,
} from '../../../styledComponents/styledComponents';

interface type {
  imgUrl: string;
}

export default function Write({ imgUrl }: type) {
  return (
    <ImgContainer imgUrl={imgUrl}>
      <Link to='/job/전체/1'>
        <MainButton>
          <span>포토폴리오</span>
          <span>작성하기</span>
        </MainButton>
      </Link>
    </ImgContainer>
  );
}
