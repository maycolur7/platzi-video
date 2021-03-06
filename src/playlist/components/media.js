import React from 'react'
import './media.css'
import PropTypes from 'prop-types'

class Media extends React.PureComponent{

  render() {
    return (
      <div className="card" onClick={this.props.handleClick}>
          <img className="card-img-top" src={this.props.cover}/>
          <div className="card-body">
            <h6 className="card-title">{this.props.title}</h6>
            <p className="card-text">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes ={
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media