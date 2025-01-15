import styles from "./HeroSection.module.css";
import AvatarRound from "./supComponents/AvatarRound";
import { avatar } from "./data";
function HeroSection() {
  return (
    <>
      {/* start hero section */}
      <section className={`${styles["hero-section"]}`}>
        <div className={`${styles.box} ${styles["box-1"]}`}>
        {/* placeholder 3 lines */}
          <AvatarRound avatar = {avatar[0].avatarImage}/>
          <div className={`${styles.details}`}>
            <h3>James Bruno</h3>
            <p>Digital Marketer</p>
          </div>
        </div>
        <div className={`${styles.hero} ${styles.container}`}>
          <div className={`${styles["hero-left"]}`}>
            <img src="imgs/hero-img.png" alt="Hero-image" />
          </div>
          <div className={`${styles["hero-right"]}`}>
            <h1>We Help You Build & Grow an Online Business</h1>
            <form>
              <input
                type="text"
                placeholder="Tell us what you need to build..."
                required
              />
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* end hero section  */}
    </>
  );
}

export default HeroSection;
