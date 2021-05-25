const ATMData = ({atm}) => {
    return (
        <tr>
            <td>{atm.atmOperator}</td>
            <td>{atm.atmStreetName} {atm.atmPostcode}</td>
            <td>{atm.atmTimestamp}</td>
            <td>{atm.atmType}</td>
            <td>{atm.atmAmount}</td>
            <td>{atm.bankCardNumber}</td>
        </tr>
    )
}

export default ATMData
