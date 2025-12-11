import { Link } from 'react-router-dom'

function PageHeader({ title, breadcrumb }) {
  return (
    <div className="container-fluid bg-breadcrumb py-5">
      <div className="container text-center py-5">
        <h3 className="text-white display-3 mb-4 animated fadeInUp">{title}</h3>
        <ol className="breadcrumb justify-content-center mb-0 animated fadeInUp">
          <li className="breadcrumb-item"><Link to="/" className="text-white">Home</Link></li>
          <li className="breadcrumb-item"><a href="#" className="text-white">Pages</a></li>
          <li className="breadcrumb-item active text-white">{breadcrumb}</li>
        </ol>
      </div>
    </div>
  )
}

export default PageHeader
