import styled, { DefaultTheme, StyledComponentBase } from 'styled-components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidV4 } from 'uuid';

type PropType = {
  imgList: string[];
  StyledComponent: StyledComponentBase<'div', DefaultTheme, {}, never>;
  handleClick?: () => void;
};

export default function ImageSlider({
  imgList,
  handleClick = () => {},
  StyledComponent,
}: PropType) {
  return (
    <StyledComponent>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination
        autoHeight={false}
      >
        {imgList.length === 0 && <SwiperSlide ><ProjectImg src={ } /></SwiperSlide>}
        {imgList.length !== 0 && {imgList.map((src) => (
          <SwiperSlide key={uuidV4()}>
            <ProjectImg src={src} />
            <div className='slide-overlay' onClick={handleClick}>
              클릭시 이미지가 삭제됩니다.
            </div>
          </SwiperSlide>
        ))}}
      </Swiper>
    </StyledComponent>
  );
}

const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: white;
`;
