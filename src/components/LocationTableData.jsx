import React from 'react'

const LocationTableData = ({location}) => {
    return (
        <tr>
            <td>{location.timestamp}</td>
            <td>{location.streetName}</td>
            <td>{location.latitude}</td>
            <td>{location.longitude}</td>
        </tr>
    )
}

export default LocationTableData
