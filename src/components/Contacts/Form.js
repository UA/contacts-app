import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/contactSlice'
import { nanoid } from '@reduxjs/toolkit'

function Form() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !number) return
        dispatch(addContact({ id: nanoid(), name, phone_number: number }))
        setName('')
        setNumber('')
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
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default Form
