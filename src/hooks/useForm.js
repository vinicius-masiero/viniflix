import { useState } from 'react';

function useForm(defaultValues) {
  const [values, setValues] = useState(defaultValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    })
  }

  function changeHandler(event) {
    setValue(event.target.getAttribute('name'), event.target.value);
  }

  function clearForm() {
    setValues(defaultValues);
  }

  return {values, changeHandler, clearForm};
}

export default useForm;