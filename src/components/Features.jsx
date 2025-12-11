function Features() {
  const features = [
    {
      icon: 'far fa-handshake',
      title: 'Trusted Company',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...'
    },
    {
      icon: 'fa fa-dollar-sign',
      title: 'Anytime Money Back',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...'
    },
    {
      icon: 'fa fa-bullseye',
      title: 'Flexible Plans',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...'
    },
    {
      icon: 'fa fa-headphones',
      title: '24/7 Fast Support',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic laborum odit pariatur...'
    }
  ]

  return (
    <div className="container-fluid feature bg-light py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 animated fadeInUp" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Our Features</h4>
          <h1 className="display-4 mb-4">Insurance Provide you a Better Future</h1>
          <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.</p>
        </div>
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-6 col-xl-3 animated fadeInUp">
              <div className="feature-item glass rounded-4 p-4 pt-0 shadow-sm">
                <div className="feature-icon badge-gradient p-4 mb-4 rounded-4">
                  <i className={`${feature.icon} fa-2x`}></i>
                </div>
                <h4 className="mb-4">{feature.title}</h4>
                <p className="mb-4">{feature.description}</p>
                <a className="btn btn-primary rounded-pill py-2 px-4 shadow" href="#">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
