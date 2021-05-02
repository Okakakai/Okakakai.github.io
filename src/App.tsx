import React from 'react'
import Navbar from './components/Navbar'
import MyAvatar from "./components/MyAvatar"

const App: React.FC = () => {
  return (
    // <> //要素が増えたので<></>で囲む
    <>
    <Navbar />

    <MyAvatar />
    </>
  );
}

export default App;