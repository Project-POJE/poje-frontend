import { Link } from 'react-router-dom';
import {
  ImgContainer,
  MainButton,
} from '../../../styledComponents/styledComponents';

interface type {
  imgUrl: string;
}

export default function Resume({ imgUrl }: type) {
  console.log(imgUrl);
  return (
    <>
      <ImgContainer imgUrl={imgUrl}>
        <Link to='/job/1'>
          <MainButton>
            <span>포토폴리오</span>
            <span>들러보기</span>
          </MainButton>
        </Link>
      </ImgContainer>
    </>
  );
}
