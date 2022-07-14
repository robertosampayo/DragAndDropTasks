import { useState, ChangeEvent } from "react";
import { Button, Section, Wrapper } from "./ButtonAddNewItem.style";
import NewItemForm from "./components/NewItemForm";

interface ButtonAddProps {
  title: string;
  handleClick: (title: string) => void;
  darkMode?: boolean;
}

const ButtonAddNewItem = ({
  title,
  handleClick,
  darkMode = false,
}: ButtonAddProps) => {
  const [showForm, setShowForm] = useState<boolean>(false);

  const onHandleClick = (title: string) => {
    handleClick(title);
    setShowForm(false);
  };

  if (showForm) {
    return (
      <NewItemForm
        onSubmit={onHandleClick}
        onCancel={() => setShowForm(false)}
      />
    );
  }

  return (
    <Button onClick={() => setShowForm(true)} darkMode={darkMode}>
      {title}
    </Button>
  );
};

export default ButtonAddNewItem;
