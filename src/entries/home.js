import React from 'react'
import { render } from 'react-dom'
import data from '../api.json'
// Components
import Home from '../pages/containers/home'

const home = document.getElementById('home-container')

render(<Home data={data}/>, home)

