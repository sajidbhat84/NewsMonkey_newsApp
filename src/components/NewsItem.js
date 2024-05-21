import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
          <div className="card">
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"style={{left:'90%',zIndex:'1'}}>{source}
                 </span>
          <img src={!imageUrl?"https://servicepath.co/wp-content/uploads/2019/11/news.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark rounded-pill px-4 py-2 border-0 fw-bold text-uppercase" rel="noreferrer">Read More</a>

              </div>
          </div>
     </div>
    )
  }
}

export default NewsItem
