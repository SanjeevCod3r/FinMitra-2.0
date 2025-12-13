import founderImage from '../assets/images/founder_image.png'

function Team() {
  const members = [
    { 
      img: founderImage, 
      name: 'Mr. Subhash Chandra', 
      role: 'Founder & Chief Executive Officer',
      bio: '7+ years of experience in banking and finance. MBA in Marketing & Finance. Leading Finmitra with a mission to deliver transparent, fast, and accessible financial solutions.',
      linkedin: '#',
      email: 'mailto:subhash@finmitrafinanceinsurance.com'
    }
  ]

  return (
    <div className="container-fluid team py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 animated fadeInUp" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Our Team</h4>
          <h1 className="display-4 mb-4">Meet Our Founder</h1>
          <p className="mb-0">Our dedicated financial experts bring years of experience in banking, insurance, and fintech to help you achieve your financial goals with confidence and trust.</p>
        </div>
        <div className="row g-4 justify-content-center">
          {members.map((member, index) => (
            <div key={index} className="col-md-6 col-lg-6 col-xl-4 animated fadeInUp">
              <div className="team-item">
                <div className="team-img">
                  <img src={member.img} className="img-fluid w-100" alt={member.name} />
                  <div className="team-icon">
                    <a className="btn btn-primary btn-sm-square rounded-circle me-3" href={member.linkedin} title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-primary btn-sm-square rounded-circle me-0" href={member.email} title="Email"><i className="fas fa-envelope"></i></a>
                  </div>
                </div>
                <div className="team-title p-4">
                  <h4 className="mb-0">{member.name}</h4>
                  <p className="mb-2">{member.role}</p>
                  <p className="mb-0 small text-muted">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team
