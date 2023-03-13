import InputModalLayout from '@src/components/common/InputModalLayout';
import styled from 'styled-components';

export default function SendNoteModal() {
  return (
    <InputModalLayout headerText='쪽지 보내기' beforeCallback={() => {}}>
      <SendNoteForm>
        <TextArea />
      </SendNoteForm>
    </InputModalLayout>
  );
}

const SendNoteForm = styled.form``;

const TextArea = styled.textarea``;
