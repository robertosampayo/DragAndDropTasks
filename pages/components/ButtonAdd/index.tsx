import { useState, ChangeEvent } from "react";
import { Button, Section, Wrapper } from "./ButtonAddColumn.styles";
import NewItemForm from "../ButtonAddNewItem/components/NewItemForm";

interface ButtonAddProps {
  title: string;
  handleClick: (title: string) => void;
  darkMode?: boolean;
}

const ButtonAdd = ({
  title,
  handleClick,
  darkMode = false,
}: ButtonAddProps) => {
  const [showForm, setShowForm] = useState<boolean>(false);

  const onClickButtonCreate = (title: string) => {
    setShowForm(false);
    handleClick(title);
  };

  return (
    <Section>
      <Wrapper>
        <Button
          onClick={() => setShowForm((prevstate) => !prevstate)}
          darkMode={darkMode}
        >
          {title}
        </Button>

        {showForm ? (
          <NewItemForm
            onSubmit={(title) => onClickButtonCreate(title)}
            onCancel={() => setShowForm(false)}
          />
        ) : null}
      </Wrapper>
    </Section>
  );
};

export default ButtonAdd;
