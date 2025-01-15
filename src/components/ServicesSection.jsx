import styles from './ServicesSection.module.css'
import { services } from './data'
import ServicesCard from './supComponents/ServicesCard'
function ServicesSection() {
  return (
    <>
         {/* start services  */}
    <section className={`${styles['services-svg']}`}>
      <div className={`${styles['svg-shape']}`}>
        <img
          src="/imgs/SVGs/svg-2.png"
          alt="svg"
          className={`${styles.svg}`}
          loading="lazy"
        />
      </div>
      <div className={`${styles.container} ${styles.services}`}>
          {
            services.map(service => (
              <ServicesCard service = {service} key={service.heading}/>
            ))
          }
      </div>
    </section>
        {/* end services  */}
    </>
  )
}

export default ServicesSection