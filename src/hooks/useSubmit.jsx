import useValidateForm from "@hooks/useValidateForm";

const useSubmit = () => {
  const { validateForm } = useValidateForm();

  const submit = (setAlert, hideMessage, showMessage, form) => {
    if (validateForm(form.name)) {
      
      setAlert({
        active: true,
        message: form.message,
        type: 'success',
      })

      hideMessage()
    } else {
      showMessage()
    }

  }
  return {
    submit,
  }
}

export default useSubmit;