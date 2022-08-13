import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EditForm from './EditForm'
import { useSelector } from 'react-redux'
import { contactSelectors } from '../../redux/contactSlice'

function Edit() {
    const { id } = useParams()
    const navigate = useNavigate()
    const contact = useSelector((state) =>
        contactSelectors.selectById(state, id)
    )
    useEffect(() => {
        if (!contact) navigate('/')
    }, [navigate, contact])

    return (
        <div>
            <h1>Edit</h1>
            <EditForm contact={contact} />
        </div>
    )
}

export default Edit
