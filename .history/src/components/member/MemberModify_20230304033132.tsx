import { useModifyMyInfo } from '@src/hooks/member';
import { useRef } from 'react';
import styled from 'styled-components';

export default function MemberModify() {
  const { form } = useModifyMyInfo();
  const hiddenFileBtnRef = useRef<HTMLInputElement>();
  console.log(form);
  return (
    <Container>
      <Img src={form.profileImg} />
      <ItemName>
        <label>이름</label>
        <CommonInput name='nickName' value={form.nickName} />
      </ItemName>
      <ItemAcad>
        <label>학력</label>
        <CommonInput name='academic' value={form.academic} />
      </ItemAcad>
      <ItemDept>
        <label>학과</label>
        <CommonInput name='dept' value={form.dept} />
      </ItemDept>
      <ItemBrith>
        <label>생일</label>
        <CommonInput name='birth' value={form.birth} />
      </ItemBrith>
      <ItemPhone>
        <label>전화번호</label>
        <CommonInput name='phoneNum' value={form.phoneNum} />
      </ItemPhone>
      <ItemEmail>
        <label>이메일</label>
        <CommonInput name='email' value={form.email} />
      </ItemEmail>
      <ItemGit>
        <label>깃허브 링크</label>
        <CommonInput name='gitHubLink' value={form.gitHubLink} />
      </ItemGit>
      <ItemBlog>
        <label>블로그 링크</label>
        <CommonInput name='blogLink' value={form.blogLink} />
      </ItemBlog>
      <SubmitBtn>확인</SubmitBtn>
      <CancleBtn>취소</CancleBtn>
      <input
        ref={hiddenFileBtnRef}
        type='file'
        style={{ display: 'none' }}
        accept={'image/gif, image/jpeg, image/png'}
        name={'file'}
      />
    </Container>
  );
}

const Container = styled.form`
  width: 100%;
  max-width: 600px;
  max-height: 400px;
  display: grid;
  grid-gap: 0.4rem;
  grid-row-gap: 0.8rem;
  grid-template-areas:
    'img img name name'
    'img img academic academic'
    'img img dept dept '
    'brith brith brith brith'
    'phoneNum phoneNum phoneNum phoneNum'
    'email email email email'
    'gitHubLink gitHubLink gitHubLink gitHubLink'
    'blogLink blogLink blogLink blogLink'
    'submit submit cancle cancle';
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
`;

const Img = styled.img`
  grid-area: img;
  border-radius: 50%;
  width: 80%;
`;

const CommonInput = styled.input`
  color: ${({ theme }) => theme.textColor};
  font-size: 1.6rem;
  border: none;
  border-bottom: 1px solid black;
  background: transparent;
  outline: none;
  width: 100%;
`;

const CommonItem = styled.div`
  width: 100%;
`;

const ItemName = styled(CommonItem)`
  grid-area: name;
`;

const ItemAcad = styled(CommonItem)`
  grid-area: academic;
`;

const ItemDept = styled(CommonItem)`
  grid-area: dept;
`;

const ItemBrith = styled(CommonItem)`
  grid-area: brith;
`;

const ItemPhone = styled(CommonItem)`
  grid-area: phoneNum;
`;

const ItemEmail = styled(CommonItem)`
  grid-area: email;
`;

const ItemGit = styled(CommonItem)`
  grid-area: gitHubLink;
`;

const ItemBlog = styled(CommonItem)`
  grid-area: blogLink;
`;

const Btn = styled.button``;

const SubmitBtn = styled(Btn)`
  grid-area: submit;
`;
const CancleBtn = styled(Btn)`
  grid-area: cancle;
`;