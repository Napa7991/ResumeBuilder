import React, { useReducer } from 'react';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FORM':
      return { ...state, forms: [...state.forms, { name: '', email: '' }] };
    case 'UPDATE_FORM':
      const updatedForms = [...state.forms];
      updatedForms[action.index][action.fieldName] = action.value;
      return { ...state, forms: updatedForms };
    case 'SAVE_FORM':
      const savedForm = { ...state.forms[action.index] };
      return {
        ...state,
        forms: state.forms.filter((_, i) => i !== action.index),
        savedData: [...state.savedData, savedForm],
      };
    case 'DELETE_FORM':
      return { ...state, forms: state.forms.filter((_, i) => i !== action.index) };
    default:
      return state;
  }
};

const TodoTry = () => {
  const [state, dispatch] = useReducer(formReducer, { forms: [], savedData: [] });

  const handleAddForm = () => {
    dispatch({ type: 'ADD_FORM' });
  };

  const handleChange = (index, fieldName, value) => {
    dispatch({ type: 'UPDATE_FORM', index, fieldName, value });
  };

  const handleSave = (index) => {
    dispatch({ type: 'SAVE_FORM', index });
  };

  const handleDelete = (index) => {
    dispatch({ type: 'DELETE_FORM', index });
  };

  return (
    <div>
      <button type="button" onClick={handleAddForm}>
        Add Form
      </button>

      {state.forms.map((form, index) => (
        <div key={index}>
          <form>
            <label>
              Name:
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange(index, 'email', e.target.value)}
              />
            </label>
            <button type="button" onClick={() => handleSave(index)}>
              Save
            </button>
            <button type="button" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </form>
        </div>
      ))}

      <h1>Saved Data:</h1>
      <ul>
        {state.savedData.map((data, index) => (
          <li key={index}>{`Name: `}<h1>${data.name}</h1> {`, Email: ${data.email}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoTry;
