import styles from './ServicesCard.module.css'
function ServicesCard({service}) {
  return (
    <>
            <div className={`${styles.card}`}>
              <img
                src={service.serviceImage}
                alt="services-1"
                loading="lazy"
              />
              <h2>{service.heading}</h2>
              <p>
                {service.paragraph}
              </p>
            </div>
    </>
  )
}

export default ServicesCard