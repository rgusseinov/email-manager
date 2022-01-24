import { useState } from 'react';
import { validate } from '../utils/form-validation';

const useForm = () => {
  const [field, setField] = useState({});
  const [error, setError] = useState({});

  // Form field handlers
  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setField((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = validate(field);

    if (isValid) {
      console.log(`Success! All fields properly filled.`);
      setError({});
    } else {
      setError(errors);
    }
  };

  return {
    error,
    handleFormChange,
    handleFormSubmit
  };
};

export default useForm;
