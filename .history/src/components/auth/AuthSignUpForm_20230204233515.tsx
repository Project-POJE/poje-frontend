import { useRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Swiper as SwiperType } from 'swiper';
import {
  AuthForm,
  AuthFormContainer,
  AuthLabel,
  Header,
  LoginBtn,
  MoveToLoginOrSignUpBtn,
  TopSide,
} from './styledComponets';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { JoinRequest } from '@src/service/types/auth';
import useAuth from '@src/hooks/auth/useAuth';

export default function AuthSignUpForm() {
  const { register, handleSubmit } = useForm<JoinRequest>();
  const { join } = useAuth();
  const swiperRef = useRef<SwiperType>();

  const handlerSildePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handlerSildeNext = () => {
    swiperRef.current?.slideNext();
  };

  const onSubmit: SubmitHandler<JoinRequest> = (data) => {
    console.log(123);
    join({ ...data });
  };

  return (
    <AuthFormContainer>
      <TopSide>
        <span>계정이 있으신가요?</span>
        <MoveToLoginOrSignUpBtn>
          <Link to='/auth/login'>Login</Link>
        </MoveToLoginOrSignUpBtn>
      </TopSide>
      <Header>
        <h1>WelCome POJE</h1>
        <p>SignUp your account</p>
      </Header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide>
            <AuthSlideForm>
              <AuthFormLabel htmlFor='loginId'>
                <span>LoginId</span>
                <input
                  {...register('loginId')}
                  id='loginId'
                  type='text'
                  placeholder='아이디'
                />
              </AuthFormLabel>
              <AuthFormLabel htmlFor='password'>
                <span>Password</span>
                <input
                  {...register('password')}
                  type='password'
                  id='password'
                  placeholder='비밀번호'
                />
              </AuthFormLabel>
              <AuthFormLabel htmlFor='password confirm'>
                <span>Password</span>
                <input
                  {...register('password')}
                  type='password'
                  id='password confirm'
                  placeholder='비밀번호 확인'
                />
              </AuthFormLabel>
              <AuthFormLabel htmlFor='email'>
                <span>Email</span>
                <input
                  {...register('email')}
                  type='email'
                  id='email'
                  placeholder='이메일'
                />
              </AuthFormLabel>

              <AuthSlideNextBtn type={'button'} onClick={handlerSildeNext}>
                다음
              </AuthSlideNextBtn>
            </AuthSlideForm>
          </SwiperSlide>

          <SwiperSlide>
            <AuthSlideForm>
              <AuthFormLabel htmlFor='nickName'>
                <span>Name</span>
                <input
                  {...register('nickName')}
                  type='text'
                  id='nickName'
                  placeholder='이름'
                />
              </AuthFormLabel>
              <AuthFormLabel htmlFor='phoneNum'>
                <span>PhoneNum(선택)</span>
                <input
                  {...register('phoneNum')}
                  type='text'
                  id='phoneNum'
                  placeholder='전화번호(선택)'
                />
              </AuthFormLabel>
              <AuthFormLabel htmlFor='gender'>
                <span>Gender</span>
                <select {...register('gender')} id='gender' placeholder='성별'>
                  <option value='male'>남자</option>
                  <option value='female'>여자</option>
                </select>
              </AuthFormLabel>
              <AuthFormLabel htmlFor='Birth'>
                <span>Birth(선택)</span>
                <input
                  {...register('birth')}
                  type='text'
                  id='birth'
                  placeholder='생년월일'
                />
              </AuthFormLabel>
              <AuthSlideFooter>
                <AuthSlideNextBtn type={'button'} onClick={handlerSildePrev}>
                  이전
                </AuthSlideNextBtn>
                <AuthSlideNextBtn type={'submit'}>회원가입</AuthSlideNextBtn>
              </AuthSlideFooter>
            </AuthSlideForm>
          </SwiperSlide>
        </Swiper>
      </form>
    </AuthFormContainer>
  );
}

const AuthSlideForm = styled.div`
  margin-top: 0.4rem;
  padding: 0.4rem 0.8rem;
`;

const AuthFormLabel = styled(AuthLabel)`
  margin-top: 1rem;
`;

const AuthSlideNextBtn = styled(LoginBtn)`
  margin-top: 2rem;
`;

const AuthSlideFooter = styled.div`
  display: flex;
  justify-content: space-around;

  & > ${AuthSlideNextBtn} {
    width: 20%;
  }
`;