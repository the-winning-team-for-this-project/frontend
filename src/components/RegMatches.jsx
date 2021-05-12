import RegSearchBar from './RegSearchBar'
import { useState } from 'react'
const RegMatches = () => {

    const [vehicles, setVehicles] = useState([])


    return (
        <>
        {/* <RegSearchBar regSearch={regSearch} searchVehicles={searchVehicles} handleSubmit={handleSubmit}/> */}
        <RegSearchBar/>           
         {/* {vehMatches}  */}
            <p>FK59 TDY</p>
        </>
    )
}

export default RegMatches
