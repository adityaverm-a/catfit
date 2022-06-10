import React from 'react'
import cn from 'classnames'

const List = ({ items }) => {
    return (
        <ul className='package__listing'>
            {items.map(({ id, icon, text, isAvailable }) => (
                <li 
                    key={id}
                    className={cn(isAvailable ? 'open' : 'closed', 'package__listing__listItem')}
                >
                    {icon} {text}
                </li>
            ))}
        </ul>
    )
}

export default List
