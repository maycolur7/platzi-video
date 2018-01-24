import React from 'react'
import Media from './media'


 function Playlist (props) {
  return (
      <div className="row">
        {
          props.playlist.map((item) => {
            return <Media {...item} key={item.id} />
          })
        }
      </div>
  )
}

export default Playlist