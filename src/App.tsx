import React from 'react'
import Navbar from './components/Navbar'
import MyAvatar from "./components/MyAvatar"
import About from "./components/About"
import Skills from './components/Skills'

const App: React.FC = () => {
  return (
    // <> //要素が増えたので<></>で囲む
    <>
    <Navbar />

    <MyAvatar />
    <About/>

    <Skills />
    </>
  );
}

export default App;