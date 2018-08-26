import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(client => (
            <tr key={client.Id}>
                <td>{client.Name}</td>
                <td>{client.Age}</td>
                <td>
                    <IconButton style='warning' icon='address-card'
                        onClick={() => props.handleFillFormFields(client)}></IconButton>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.handleRemove(client)}></IconButton>
                    
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}