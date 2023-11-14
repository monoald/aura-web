import { useRef, useState } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Form from "@components/Form";
import Alert from "@components/Alert";
import IncompleteForm from "@components/IncompleteForm";
import useErrorMessage from "@hooks/useErrorMessage";
import useAlert from "@hooks/useAlert";
import useSubmit from "@hooks/useSubmit";
import "@styles/WorkWithUs.css";

const WorkWithUs = () => {
  const hireUsForm = useRef(null);
  const careerForm = useRef(null);
  const { errorMessage, showMessage, hideMessage } = useErrorMessage();
  const { alert, setAlert, toggleAlert } = useAlert();
  const { submit } = useSubmit();

  const [toggleForm, setToggleForm] = useState([
    {
      id: "hireUs",
      active: true,
    },
    {
      id: "career",
      active: false,
    },
  ]);

  const form1 = {
    name: "hire-form",
    ref: hireUsForm,
    title: "Hire Us",

    message: "Information sent, we will contact you soon.",
    inputs: [
      {
        name: "company-name",
        title: "Company",
        type: "text",
        placeholder: "My Real Estate",
      },
      {
        name: "email",
        title: "Email",
        type: "email",
        placeholder: "example@myrealestate.com",
      },
      {
        name: "phone",
        title: "Phone",
        type: "number",
        placeholder: "+591 12345678",
      },
      {
        name: "city",
        title: "City",
        type: "text",
        placeholder: "La Paz",
      },
    ],
    select: false,
  };

  const form2 = {
    name: "career-form",
    ref: careerForm,
    title: "Career",

    message:
      "Information sent, we will contact you soon. \n You can visit our LinkedIn to see all the jobs.",
    inputs: [
      {
        name: "name",
        title: "Name",
        type: "text",
        placeholder: "Carlos S. Aldazosa",
      },
      {
        name: "email",
        title: "Email",
        type: "email",
        placeholder: "carlos@example.com",
      },
      {
        name: "phone",
        title: "Phone",
        type: "number",
        placeholder: "+591 12345678",
      },
    ],
    select: {
      name: "area",
      title: "Area",
      options: [
        {
          value: "development",
          selected: false,
          text: "Development",
        },
        {
          value: "economics",
          selected: false,
          text: "Economics",
        },
        {
          value: "finance",
          selected: false,
          text: "Finance",
        },
        {
          value: "marketing",
          selected: false,
          text: "Marketing",
        },
        {
          value: "sales",
          selected: false,
          text: "Sales",
        },
        {
          value: "engineering",
          selected: false,
          text: "Engineering",
        },
        {
          value: "architecture",
          selected: false,
          text: "Architecture",
        },
        {
          value: "construction",
          selected: false,
          text: "Construction",
        },
        {
          value: "design",
          selected: false,
          text: "Design",
        },
      ],
    },
  };

  const handleForm = (id) => {
    const newForm = [...toggleForm];
    const deactiveForm = newForm.find((form) => form.active === true);
    deactiveForm.active = !deactiveForm.active;
    const activeForm = newForm.find((form) => form.id === id);
    activeForm.active = !activeForm.active;
    setToggleForm(newForm);
  };

  return (
    <>
      <div className="WorkWithUs Page">
        <Header />

        <section className="banner">
          <h2 className="banner__title">
            You can hire us or work in our company!
          </h2>

          <div className="banner__buttons">
            <button
              className="button"
              onClick={() => handleForm(toggleForm[0].id)}
            >
              Hire us
            </button>
            <button
              className="button"
              onClick={() => handleForm(toggleForm[1].id)}
            >
              Career
            </button>
          </div>
        </section>

        <section className="forms">
          {toggleForm[0].active && (
            <Form
              formInfo={form1}
              handleSubmit={() =>
                submit(setAlert, hideMessage, showMessage, form1)
              }
            />
          )}

          {toggleForm[1].active && (
            <Form
              formInfo={form2}
              handleSubmit={() =>
                submit(setAlert, hideMessage, showMessage, form2)
              }
            />
          )}

          {errorMessage.active && (
            <IncompleteForm message={errorMessage.message} />
          )}
        </section>

        <Footer />
      </div>

      {alert.active && <Alert alert={alert} handleClose={toggleAlert} />}
    </>
  );
};

export default WorkWithUs;
