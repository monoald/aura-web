
const useValidateForm = () => {

  const validateForm = form => {
    for (let element = 0; element < document.forms[form].elements.length - 1; element++) {
      if (document.forms[form].elements[element].value === '') {
        return false;
      }
    }
    return true;
  }

  return {
    validateForm,
  }
}

export default useValidateForm