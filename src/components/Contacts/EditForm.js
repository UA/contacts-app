import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateContact } from '../../redux/contactSlice'

function EditForm({ contact }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState(contact?.name)
    const [number, setNumber] = useState(contact?.phone_number)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !number) return
        dispatch(
            updateContact({
                id: contact.id,
                changes: {
                    name,
                    phone_number: number,
                },
            })
        )
        navigate('/')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="name"
                />
                <input
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="phone number"
                />
                <div className="btn">
                    <button type="submit">Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditForm
