import './toggole.css'
import sun from '../../images/icons8-sun-80.png'
import moon from '../../images/icons8-moon-64.png'
import { useContext } from 'react'
import { ThemeContext } from '../../context'

export const Toggole = () => {
  const theme = useContext(ThemeContext)

  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' })
  }
  return (
    <div className="toggole">
      <img src={sun} alt="" className="t-icon" />
      <img src={moon} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  )
}
