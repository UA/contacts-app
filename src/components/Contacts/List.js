import React from 'react'
import { contactSelectors, removeAllContacts } from '../../redux/contactSlice'
import { useSelector, useDispatch } from 'react-redux'
import Contact from './Contact'

function List() {
    const dispatch = useDispatch()
    const contacts = useSelector(contactSelectors.selectAll)
    const total = useSelector(contactSelectors.selectTotal)

    const handleDeleteAll = () => {
        if (window.confirm('Are you sure?')) dispatch(removeAllContacts())
    }
    return (
        <div>
            {total > 0 && (
                <div className="deleteAllBtn" onClick={handleDeleteAll}>
                    Delete All
                </div>
            )}
            <ul className="list">
                {contacts.map((item) => (
                    <Contact key={item.id} item={item} />
                ))}
            </ul>
        </div>
    )
}

export default List
