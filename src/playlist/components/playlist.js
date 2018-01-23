import React from 'react'
import Media from './media'
import Play from '../../icons/components/play'
import Pause from '../../icons/components/pause'
import Volume from '../../icons/components/Volume'
import FullScreen from '../../icons/components/full-screen'


 function Playlist (props) {
  const playlist = props.data.categories[0].playlist
  console.log(props.data)
  return (
    <div className="Playlist">
      <Play
        size={20}
        color="red"
      />
      <Pause
        size={20}
        color="blue"
      />
      <Volume
        size={20}
        color="green"
      />
      <FullScreen
        size={20}
        color="blue"
      />
      {
        playlist.map((item) => {
          return <Media {...item} key={item.id} />
        })
      }
      </div>
    )
  }

export default Playlist