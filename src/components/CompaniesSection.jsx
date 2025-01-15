import styles from './CompaniesSection.module.css'
import { companies } from './data'
import Company from './supComponents/Company'
function CompaniesSection() {
  return (
    <>
        {/* start companies */}
    <section>
      <div className={`${styles.companies} ${styles.container}`}>
        <div className={`${styles['companies-left']}`}>Companies we have helped build</div>
        <div className={`${styles['companies-right']}`}>
          {
            companies.map(company => (
              <Company company={company.companyImage} key={company[company]}/>
            ))
          }
        </div>
      </div>
    </section>
     {/* end companies  */}
    </>
  )
}

export default CompaniesSection