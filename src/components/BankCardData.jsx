const BankCardData = ({card}) => {
    return (
            <tr>
                <td>{card.bankCardNumber}</td>
                <td>{card.bankAccountNumber}</td>
            </tr>
    )
}

export default BankCardData
