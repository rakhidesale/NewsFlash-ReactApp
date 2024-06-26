import React from 'react'
const NewsItem = (props) => {

  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '0'
        }}>
          <span className="badge rounded-pill bg-success"> {source}</span>
        </div>

        <img src={!imageUrl ? "https://cdn.ndtv.com/common/images/ogndtv.png" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-danger" style={{ fontWeight: '300', fontFamily: 'Georgia, serif' }}>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark" style={{ backgroundColor: '#5F4C4C', fontFamily: 'Georgia, serif' }}>Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
