import PageHeader from '../components/PageHeader'
import ServicesComponent from '../components/Services'
import FAQ from '../components/FAQ'

function Services() {
  return (
    <>
      <PageHeader title="Our Services" breadcrumb="Services" />
      <ServicesComponent />
      <FAQ />
    </>
  )
}

export default Services
