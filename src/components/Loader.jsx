import logo from '../assets/images/logo.png'

export default function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loader-wrapper">
        <div className="loader-glow" />
        <div className="loader-core">
          <span className="loader-ring outer" />
          <span className="loader-ring inner" />
          <img src={logo} alt="FinMitra" className="loader-logo" />
        </div>
        <div className="loader-ping" />
      </div>
    </div>
  )
}
