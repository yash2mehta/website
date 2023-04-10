import { useState } from 'react'
import logo from './assets/logo.svg'
import './App.css'
import Header from './components/layout/header/Header'

function App() {

  return (
    <div className="App">
      <Header />
      <div className="body">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod quis ligula sit amet tempor. Nullam nibh ipsum, malesuada sed urna sed, feugiat suscipit odio. Nunc ac sem nisi. Aenean at ornare purus, et condimentum orci. Vivamus sodales molestie elit, et rutrum sapien pharetra id. Etiam tincidunt mi gravida suscipit fringilla. Cras vestibulum ipsum in tortor vestibulum vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sodales lobortis ligula a dapibus. Sed a mauris vel mauris iaculis cursus in convallis magna. Praesent congue orci nisi, vestibulum laoreet nisi maximus nec. Morbi convallis eu risus vel egestas.
        </p>
      </div>
    </div>
  )
}

export default App
