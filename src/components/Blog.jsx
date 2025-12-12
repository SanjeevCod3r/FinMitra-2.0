import blog1 from '../assets/images/blog-1.png'
import blog2 from '../assets/images/blog-2.png'
import blog3 from '../assets/images/blog-3.png'

function Blog() {
  const posts = [
    {
      img: blog1,
      category: 'Life Insurance',
      date: '01 Jan, 2025',
      title: 'How to Grow Your Business While You Sleep',
      author: 'Admin'
    },
    {
      img: blog2,
      category: 'Health Insurance',
      date: '15 Jan, 2025',
      title: 'Secure Your Family Future With Insurance',
      author: 'Admin'
    },
    {
      img: blog3,
      category: 'Car Insurance',
      date: '20 Jan, 2025',
      title: 'Why You Need Auto Insurance Protection',
      author: 'Admin'
    }
  ]

  return (
    <div className="container-fluid blog py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 animated fadeInUp" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">From Blog</h4>
          <h1 className="display-4 mb-4">News And Updates</h1>
          <p className="mb-0">Stay updated with the latest financial insights, loan tips, insurance guides, and credit card advice from FinMitra's expert team to make informed financial decisions.</p>
        </div>
        <div className="row g-4 justify-content-center">
          {posts.map((post, index) => (
            <div key={index} className="col-md-6 col-lg-6 col-xl-4 animated fadeInUp">
              <div className="blog-item">
                <div className="blog-img">
                  <img src={post.img} className="img-fluid rounded-top w-100" alt="" />
                  <div className="blog-categiry py-2 px-4">
                    <span>{post.category}</span>
                  </div>
                </div>
                <div className="blog-content p-4">
                  <div className="blog-comment d-flex justify-content-between mb-3">
                    <div className="small"><span className="fa fa-user text-primary"></span> {post.author}</div>
                    <div className="small"><span className="fa fa-calendar text-primary"></span> {post.date}</div>
                    <div className="small"><span className="fa fa-comment-alt text-primary"></span> 6 Comments</div>
                  </div>
                  <a href="#" className="h4 d-inline-block mb-4">{post.title}</a>
                  <p className="mb-4">Discover practical tips and strategies to grow your business with smart financial planning and the right loan options from FinMitra.</p>
                  <a href="#" className="btn btn-light rounded-pill py-2 px-4">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
