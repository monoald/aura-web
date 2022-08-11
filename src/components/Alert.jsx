import check from "@icons/check.png";
import "@styles/Alert.css";

const Alert = ({ alert, handleClose }) => {
  if (alert) {
    setTimeout(() => {
      handleClose();
    }, 3500);
  }

  return (
    <>
      {alert?.active && (
        <div className="Alert">
          <div className="message">
            <figure className="message__image">
              <img src={check} alt="Check icon"/>

              <p className="message__title">Success</p>
            </figure>

            <p className="message__text">{alert.message}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
