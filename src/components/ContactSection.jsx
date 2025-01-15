import styles from './ContactSection.module.css'

function ContactSection() {
  return (
    <>
         {/* start contact  */}
    <section className={styles['contact-svg']}>
      <div className={`${styles['svg-shape']}`}>
        <img
          src="/imgs/SVGs/svg-3.png"
          alt="svg"
          className={`${styles.svg}`}
          loading="lazy"
        />
      </div>
      <div className={`${styles.contact} ${styles.container}`}>
        <div className={`${styles['contact-left']}`}>
          <form>
            <h2>Write Us</h2>
            <div className={`${styles.mail}`}>
              <i className="fa-solid fa-envelope"></i>
              <input type="text" placeholder="Enter your email" required />
            </div>
            <div className={`${styles.message}`}>
              <i className="fa-solid fa-message"></i>
              <textarea
                name="messgae"
                id="message"
                placeholder="Enter your message"
                rows="7"
              ></textarea>
            </div>
            <button type="submit">SEND YOUR MESSGAE</button>
          </form>
        </div>
        <div className={`${styles['contact-right']}`}>
          <img
            src="/imgs/contact-img.png"
            alt="Hero-image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
    {/* end contact */}
    </>
  )
}

export default ContactSection