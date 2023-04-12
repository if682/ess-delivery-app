import React from "react";
import { isInputNull } from "../../../shared/functions/isInputNull";
import { isDuplicateCategory } from "../../../shared/functions/isDuplicateCategory";
import * as Icon from 'react-bootstrap-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PrimaryButton from "../../../components/atoms/primary-button/PrimaryButton";
import "./AddCategory.scss"
import CopyLink from "../../../components/atoms/copy-link/CopyLink.js";
import Button from 'react-bootstrap/Button';

export default function AddCategory(props) {
  const [showForm, setShowForm] = React.useState(true);
  const [newCategory, setNewCategory] = React.useState("");
  const [warningMessage, setWarningMessage] = React.useState(null);
  const [currentCategories, setCurrentCategories] = React.useState([]);
  const url = window.location.href

  React.useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then(response => response.json())
      .then(data => {
        setCurrentCategories(data);
      });
  }, []);

  function handleNewCategoryChange(event) {
    setNewCategory(event.target.value);
  }

  function handleAddCategoryClick() {
    setShowForm(true);
    props.show()
  }

  function handleCancelClick() {
    setShowForm(true);
    setNewCategory("");
    setWarningMessage(null);
  }

  async function handleConfirmClick(event) {
    event.preventDefault();

    if (isInputNull(newCategory)) {
      setWarningMessage("Please enter a category name!");
    } else if (
      isDuplicateCategory(newCategory, currentCategories)
    ) {
      setWarningMessage("There is already a category with that name!");
    } else {
      let category = { id: Date.now(), name: newCategory };

      await fetch("http://localhost:3001/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(category)
      });

      setShowForm(true);
      setNewCategory("");
      props.onHide()
    }
  }

    return (
        <div>
            <h1>Categories</h1>
            <Button onClick={handleAddCategoryClick} data-testid = "add-category-button">Add category</Button>
            {showForm && (
                <form onSubmit={handleConfirmClick}>
                    <label>
                        Category name:
                        <input
                            placeholder="Nome"
                            type="text"
                            value={newCategory}
                            onChange={handleNewCategoryChange}
                            data-testid = "add-category-input"
                        />
                    </label>
                    <Button type="button" onClick={handleCancelClick} data-testid = "cancel-button">
                        Cancel
                    </Button>
                    <Button type="submit" data-testid = "create-category-button">
                        Confirm
                    </Button>
                </form>
            )}
            {warningMessage && <p>{warningMessage}</p>}
        </div>
    );
}
