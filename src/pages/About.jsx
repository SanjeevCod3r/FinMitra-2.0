import PageHeader from '../components/PageHeader'
import AboutComponent from '../components/About'
import Features from '../components/Features'
import Team from '../components/Team'

function About() {
  return (
    <>
      <PageHeader title="About Us" breadcrumb="About" />
      <Features />
      <AboutComponent />
      <Team />
    </>
  )
}

export default About
