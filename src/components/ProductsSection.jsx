import styles from "./ProductsSection.module.css";
import ProductAndAboutShared from "./supComponents/ProductAndAboutShared";
function ProductsSection() {
  return (
    <>
      {/* start products  */}
      <section>
        <div className={`${styles.container} ${styles.products}`}>
          <ProductAndAboutShared />
          <div className={`${styles["products-right"]}`}>
            <div className={`${styles.box} ${styles["box-1"]}`}>
              <h3>Minimal Chair</h3>
              <hr />
              <div className={`${styles.details}`}>
                <span className={`${styles.price}`}> $204.00 </span>
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
            <div className={`${styles.box} ${styles["box-2"]}`}>
              <h3>Beats Headphone</h3>
              <hr />
              <div className={`${styles.details}`}>
                <span className={`${styles.price}`}> $204.00 </span>
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end products  */}
    </>
  );
}

export default ProductsSection;
