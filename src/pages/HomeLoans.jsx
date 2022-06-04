import { useRef, useState } from "react";
import Header from "@components/Header";
import PartnerDetails from "@components/PartnerDetails";
import Footer from "@components/Footer";
import Form from "@components/Form";
import Alert from "@components/Alert";
import IncompleteForm from "@components/IncompleteForm";
import useAlert from "@hooks/useAlert";
import useErrorMessage from "@hooks/useErrorMessage";
import useSubmit from "@hooks/useSubmit";
import monkeyBankLogo from "@images/monkeybank.png";
import bankKnowhere from "@images/bankknowhere.png";
import cityBank from "@images/citybank.png";
import "@styles/HomeLoans.css";

const HomeLoans = () => {
  const loanForm = useRef(null);
  const { errorMessage, showMessage, hideMessage } = useErrorMessage();
  const { alert, setAlert, toggleAlert } = useAlert();
  const { submit } = useSubmit();

  const [partners, setPartners] = useState([
    {
      id: "monkeyBank",
      logo: monkeyBankLogo,
      interest: [5.5, 6.5],
      minFinancing: 20,
      maxFinancing: 100,
      maxTermYears: 20,
      selected: true,
    },
    {
      id: "bankOfKnowhere",
      logo: bankKnowhere,
      interest: [3.5, 5.5],
      minFinancing: 10,
      maxFinancing: 80,
      maxTermYears: 30,
      selected: false,
    },
    {
      id: "cityBank",
      logo: cityBank,
      interest: [5, 6.5],
      minFinancing: 25,
      maxFinancing: 90,
      maxTermYears: 15,
      selected: false,
    },
  ]);

  const form = {
    name: "loan-form",
    ref: loanForm,
    title: "Contact Bank",
    message: "Information sent, an Agent will contact you soon.",
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
      name: "bank",
      title: "Bank",
      options: [
        {
          value: "monkeyBank",
          selected: partners[0].selected,
          text: "Monkey Bank",
        },
        {
          value: "bankOfKnowhere",
          selected: partners[1].selected,
          text: "Bank Of Knowhere",
        },
        {
          value: "cityBank",
          selected: partners[2].selected,
          text: "City Bank",
        },
      ],
    },
  };

  const handleBankSelected = (selected) => {
    const newBank = [...partners];
    const bankDeselected = newBank.find((partner) => partner.selected === true);
    bankDeselected.selected = !bankDeselected.selected;
    const bankSelected = newBank.find((partner) => partner.id === selected);
    bankSelected.selected = !bankSelected.selected;
    setPartners(newBank);
  };

  return (
    <>
      <div className="HomeLoans Page">
        <Header />

        <section className="banner">
          <h1 className="banner__title">Find the best home loan for you</h1>

          <p className="banner__subtitle">Talk with our bank partners</p>
        </section>

        <section className="partners-comparison" id="partners">
          <div className="title">
            <p className="title__head-space title__item"></p>

            <p className="titile__interest title__item">Interest</p>
            <p className="titile__min-financing title__item">Min. Financing</p>
            <p className="titile__max-financing title__item">Max. Financing</p>
            <p className="titile__max-term-years title__item">
              Max. Term Years
            </p>
            <p className="title__foot-space title__item"></p>
          </div>

          {partners.map((partner) => (
            <PartnerDetails
              partner={partner}
              key={partner.id}
              handleBankSelected={handleBankSelected}
            />
          ))}
        </section>

        <section className="loan-contact" id="contact">
          <Form
            formInfo={form}
            handleSubmit={() =>
              submit(setAlert, hideMessage, showMessage, form)
            }
          />

          {errorMessage.active && (
            <IncompleteForm message={errorMessage.message} />
          )}
        </section>

        <Footer />
      </div>

      {alert.active && (
        <Alert alert={alert} handleClose={toggleAlert} />
      )}
    </>
  );
};

export default HomeLoans;
