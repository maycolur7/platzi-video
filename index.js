import React, { Component }from 'react'
import { render } from 'react-dom'
import data from './src/api.json'
// Components
import Playlist from './src/playlist/components/playlist'

const app = document.getElementById('app')
render(<Playlist data={data}/>, app)

