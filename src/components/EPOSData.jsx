const EPOSData = ({epos}) => {
    return (
        <tr>
            <td>{epos.eposAmount}</td>
            <td>{epos.vendor}</td>
            <td>{epos.eposStreetName} {epos.eposPostcode}</td>
            <td>{epos.eposTimestamp}</td>
            <td>{epos.payeeAccount}</td>
        </tr>
    )
}

export default EPOSData