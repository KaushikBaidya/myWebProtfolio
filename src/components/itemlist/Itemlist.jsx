import './itemlist.css'
import { Item } from '../items/Item'

export const Itemlist = () => {
  return (
    <div className="itemlist">
      <div className="il-text">
        <h1 className="il-title">My Projects</h1>
      </div>

      <div className="il-list">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}
