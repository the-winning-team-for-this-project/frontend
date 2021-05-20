import { useState } from 'react'

const NameCard = () => {
    const [person, setPerson] = useState({})


    return (
        <>
            <h1>
                {person.forename} {person.surname}
            </h1>
            <p>
                {`Date of Birth: ${person.dateOfBirth}`}
            </p>
        </>
    )
}

export default NameCard