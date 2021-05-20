import NameCard from './NameCard'
import { useEffect, useState } from 'react'
import NameSearch from './NameSearch'
import axios from 'axios'

const NameCards = () => {

    const [people, setPeople] = useState([]);
    
    const [forenameSearch, setForenameSearch] = useState("")
    const [surnameSearch, setSurnameSearch] = useState("")


    const setDemSearches = () => {
        setForenameSearch(forename.value) 
        setSurnameSearch(surname.value) 
    }

    const handleClick = () => {
        console.log("button go clicky")
        setDemSearches()
    }
    return (
        <div>
            <NameSearch handleClick={handleClick} setDemSearches={forename, surname}/>
        </div>
    )
}

export default NameCards
