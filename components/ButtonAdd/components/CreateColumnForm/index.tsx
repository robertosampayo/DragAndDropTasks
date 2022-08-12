import { ChangeEvent, useState } from 'react';
import {
  CreateButton,
  FormInput,
  Section,
} from './CreateColumnForm.styles';

interface CreateColumnFormProps {
  onSubmit: () => void;
}

const CreateColumnForm = ({ onSubmit }: CreateColumnFormProps) => {
  const [columnTitle, setColumnTitle] = useState<string>('');

  return (
    <Section>
      <FormInput
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setColumnTitle(e.target.value)
        }
        value={columnTitle}
        placeholder="Add a title"
      />
      <CreateButton onClick={onSubmit}>Create</CreateButton>
    </Section>
  );
};

export default CreateColumnForm;
