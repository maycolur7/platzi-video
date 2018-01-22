import React from 'react'
import './media.css'
import PropTypes from 'prop-types'

class Media extends React.PureComponent{
  /*constructor (props) {
    super (props)
    this.state = {
      author: props.author
    }
  }
  handleClick = (event) => {
    this.setState({
      author: 'Maycol Uribe Romero'
    })
  }*/
  render() {
    return (
      <div className="card" onClick={this.handleClick}>
        <div className="card-content">
          <img
            src={this.props.cover}
            alt=""
            width={259}
            height={159}
          />
          <h3 className="title">{this.props.title}</h3>
          <p>{this.props.author}</p>
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