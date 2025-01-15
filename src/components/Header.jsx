import styles from "./Header.module.css";

function Header() {
  return (
    <>
      {/* Start Header shapes + nav */}
      <header className={`${styles["svg-shape"]}`}>
        {/* Start Shapes */}
        <div className={`${styles.shapes}`}>
          <img
            src="/imgs/SVGs/svg.png"
            alt="first svg"
            className={`${styles.svg}`}
          />
          <div className={`${styles['dots-1']}`}></div>
          <div className={`${styles['dots-2']}`}></div>
          <div className={`${styles["random-shapes"]}`}>
            <div
              className={`${styles.shape} ${styles.triangle} ${
                styles["triangle-1"]
              }`}
            ></div>
            <div
              className={`${styles.shape} ${styles.triangle} ${
                styles["triangle-2"]
              }`}
            ></div>
            <div
              className={`${styles.shape} ${styles.triangle} ${
                styles["triangle-3"]
              }`}
            ></div>
            <div
              className={`${styles.shape} ${styles.circle} ${
                styles["circle-1"]
              }`}
            ></div>
            <div
              className={`${styles.shape} ${styles.circle} ${
                styles["circle-2"]
              }`}
            ></div>
            <div
              className={`${styles.shape} ${styles.circle} ${
                styles["circle-3"]
              }`}
            ></div>
            <div
              className={`${styles.shape} ${styles.triangle} ${
                styles["triangle-4"]
              }`}
            ></div>
            <div
              className={`${styles.shape} ${styles.triangle} ${
                styles["triangle-5"]
              }`}
            ></div>
            <div
              className={`${styles.shape} ${styles.triangle} ${
                styles["triangle-6"]
              }`}
            ></div>
            <div
              className={`${styles.shape} ${styles.circle} ${
                styles["circle-4"]
              }`}
            ></div>
            <div
              className={`${styles.shape} ${styles.circle} ${
                styles["circle-5"]
              }`}
            ></div>
            <div
              className={`${styles.shape} ${styles.circle} ${
                styles["circle-6"]
              }`}
            ></div>
          </div>
        </div>
        {/* < End Shapes  */}
        <div className={`${styles.container}`}>
          <a href="#" className={`${styles['nav-left']}`}>
         Logo 
          </a>
          <nav className={`${styles['nav-right']}`}>
            <ul>
              <li>
                <a href="#">Get Started Now</a>
              </li>
            </ul>
            <button>
              <a href="#" style={{textDecoration: "none"}}>
                Login
              </a>
            </button>
          </nav>
        </div>
      </header>
      {/* end Header shapes + nav */}
    </>
  );
}

export default Header;
