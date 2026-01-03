import PageHeader from '../components/PageHeader'
import AboutComponent from '../components/About'
import Features from '../components/Features'

function About() {
  return (
    <>
      <PageHeader title="About Us" breadcrumb="About" />
      <Features />
      <AboutComponent />
    </>
  )
}

export default About
