import styles from "./MoreDetailsButton.module.css";
function MoreDetailsButton() {
  return (
    <>
      <div className={`${styles["details-button"]}`}>
        <button>MORE DETAILS</button>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </>
  );
}

export default MoreDetailsButton;
