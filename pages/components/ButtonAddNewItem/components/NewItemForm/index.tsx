import { useState, ChangeEvent, useEffect, useRef } from "react";
import {
  Section,
  FormInput,
  Button,
  ButtonsContainer,
} from "./NewItemForm.style";

interface CreateColumnFormProps {
  onSubmit: (title: string) => void;
  onCancel: () => void;
}

const NewItemForm = ({ onSubmit, onCancel }: CreateColumnFormProps) => {
  const [columnTitle, setColumnTitle] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const node = inputRef.current;
    if (node) {
      node.focus();
    }
  }, []);

  const onHandleSubmit = () => {
    onSubmit(columnTitle);
  };

  return (
    <Section>
      <FormInput
        ref={inputRef}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setColumnTitle(e.target.value)
        }
        value={columnTitle}
        placeholder="Add a title"
      />
      <ButtonsContainer>
        <Button onClick={onHandleSubmit} create>
          Create
        </Button>
        <Button onClick={onCancel}>Cancel</Button>
      </ButtonsContainer>
    </Section>
  );
};

export default NewItemForm;
