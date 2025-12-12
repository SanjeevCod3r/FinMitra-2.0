import team1 from '../assets/images/team-1.jpg'
import team2 from '../assets/images/team-2.jpg'
import team3 from '../assets/images/team-3.jpg'
import team4 from '../assets/images/team-4.jpg'

function Team() {
  const members = [
    { img: team1, name: 'Wade Warren', role: 'Founder & CEO' },
    { img: team2, name: 'Savannah Nguyen', role: 'Marketer' },
    { img: team3, name: 'Darlene Robertson', role: 'Developer' },
    { img: team4, name: 'Brooklyn Simmons', role: 'Designer' }
  ]

  return (
    <div className="container-fluid team py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 animated fadeInUp" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Our Team</h4>
          <h1 className="display-4 mb-4">Meet Our Expert Team Members</h1>
          <p className="mb-0">Our dedicated financial experts bring years of experience in banking, insurance, and fintech to help you achieve your financial goals with confidence and trust.</p>
        </div>
        <div className="row g-4 justify-content-center">
          {members.map((member, index) => (
            <div key={index} className="col-md-6 col-lg-6 col-xl-3 animated fadeInUp">
              <div className="team-item">
                <div className="team-img">
                  <img src={member.img} className="img-fluid w-100" alt="" />
                  <div className="team-icon">
                    <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-primary btn-sm-square rounded-circle me-0" href="#"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
                <div className="team-title p-4">
                  <h4 className="mb-0">{member.name}</h4>
                  <p className="mb-0">{member.role}</p>
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
