import { useContext } from 'react'
import About from './components/about/About'
import { Contact } from './components/contact/Contact'
import Intro from './components/intro/Intro'
import { Itemlist } from './components/itemlist/Itemlist'
import { Toggole } from './components/toggole/Toggole'
import { ThemeContext } from './context'

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <div
      style={{
        backgroundColor: darkMode ? '#222' : 'white',
        color: darkMode && 'white',
      }}
    >
      <Toggole />
      <Intro />
      <About />
      <Itemlist />
      <Contact />
    </div>
  )
}

export default App
