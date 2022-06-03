import { useState } from "react"


const useErrorMessage = () => {
  const [errorMessage, setErrorMessage] = useState({
    active: false,
    message: 'Fill the gaps.'
  })

  const showMessage = () => {
    setErrorMessage({
      ...errorMessage, 
      active: true,
    });
  }

  const hideMessage = () => {
    setErrorMessage({
      ...errorMessage, 
      active: false,
    });
  }

  return {
    errorMessage,
    showMessage,
    hideMessage,
  }
}

export default useErrorMessage