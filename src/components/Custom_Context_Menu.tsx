import './Custom_Context_Menu.css';
import { CustomContextMenuProps } from '../constants';

function CustomContextMenu({top, left, items }: CustomContextMenuProps) {
    return (
        <ul className="contextMenu" id={"event-context-menu"} style={{top: top, left: left}}>
            <li className='contextMenu-item'>
               {items.map((item, index) => {
                     return <button key={index} className='contextMenu-button' style={{animationDelay: (0.08 * (index + 1)).toString() + 's'}} onClick={() => {
                            item.onClick()
                     }}>{item.name}</button>
               })}
            </li>
        </ul>
    )
}

export default CustomContextMenu