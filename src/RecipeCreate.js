import React, { useState } from "react";

function RecipeCreate({onCreateRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newRecipe={name, cuisine, photo, ingredients, preparation};
    onCreateRecipe(newRecipe);
    
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            </td>
            <td>
              <input
              id="cuisine"
              name="cuisine"
              type="text"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
            />
            </td>
            <td>
              <input
              id="photo"
              name="photo"
              type="url"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
            </td>
            <td>
              <textarea
              id="ingredients"
              name="ingredients"
              type="text"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
            </td>
            <td>
              <textarea
              id="preparation"
              name="preparation"
              type="text"
              value={preparation}
              onChange={(e) => setPreparation(e.target.value)}
            />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
