import styles from "./AboutSection.module.css";
import AvatarRound from "./supComponents/AvatarRound";
import { avatar } from "./data";
import ProductAndAboutShared from "./supComponents/ProductAndAboutShared";
function AboutSection() {
  return (
    <>
      {/* start about  */}
      <section>
        <div className={`${styles.container} ${styles.about}`}>
          <div className={`${styles["about-left"]}`}>
            <div className={`${styles.box} ${styles["box-1"]}`}>
              <div className={`${styles.wave}`}>
                <img
                  src="/imgs/WAVEs/wave-1.png"
                  alt="wave-1"
                  loading="lazy"
                />
              </div>
              <AvatarRound avatar={avatar[1].avatarImage} />
              <div className={`${styles.revenue}`}>
                <div className={`${styles.price}`}>
                  <h3>$ 7,654</h3>
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <p>
                  TOTAL REVENUE<span> +$232</span>
                </p>
              </div>
            </div>
            <div className={`${styles.box} ${styles["box-2"]}`}>
              <div className={`${styles.wave}`}>
                <img
                  src="/imgs/WAVEs/wave-2.png"
                  alt="wave-2"
                  loading="lazy"
                />
              </div>
              <div className={`${styles.revenue}`}>
                <div className={`${styles.price}`}>
                  <h3>$ 9,978</h3>
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <p>
                  TOTAL REVENUE<span> +$322</span>
                </p>
              </div>
              <AvatarRound avatar={avatar[2].avatarImage} />
            </div>
          </div>
          <ProductAndAboutShared />
        </div>
      </section>
      {/* end about  */}
    </>
  );
}

export default AboutSection;
