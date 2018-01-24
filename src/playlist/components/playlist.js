import React from 'react'
import Media from './media'


 function Playlist (props) {
  return (
      <div className="container">
        {
          props.playlist.map((item) => {
            return <Media handleClick={props.handleOpenModal} {...item} key={item.id} />
          })
        }
      </div>
  )
}

export default Playlist