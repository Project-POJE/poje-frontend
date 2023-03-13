import { IoMailOutline } from 'react-icons/io5';
import styled from 'styled-components';

export default function SendNoteModalBtn() {
  return (
    <Button onClick={() => console.log('click')}>
      <IoMailOutline className='icon' />
    </Button>
  );
}

const Button = styled.button`
  font-size: 2rem;
  display: flex;
  align-items: center;
`;
