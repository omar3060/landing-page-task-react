import styles from './ProductAndAboutShared.module.css'
import MoreDetailsButton from './MoreDetailsButton'
function ProductAndAboutShared() {
  return (
    <>
              <div className={`${styles["about-right"]}`}>
                <h3>WHAT WE DO</h3>
                <h2>
                  Increase our
                  <br />
                  Customers <br />
                  Sales
                </h2>
                <p>
                  Our customers are seeing big results within the first three months
                </p>
                <MoreDetailsButton />
              </div>
    </>
  )
}

export default ProductAndAboutShared