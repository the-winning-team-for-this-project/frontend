import { Jumbotron, CardDeck, Card } from 'react-bootstrap'
import NameSearchForm from './NameSearchForm'
import {api_url} from './constants.json'
import NameCard from './NameCard'
import { useState } from 'react'
import axios from 'axios'

const NameSearch = () => {

  const [nameMatches, setMatches] = useState([])
  const [name, setName] = useState({
    forename: "",
    surname: ""
  })
  
  const handle = (e) => {
    const nameInput={...name}
    nameInput[e.target.id] = e.target.value
    setName(nameInput)
  }

  const clickio = (e) => {
    e.preventDefault()
    getMatchingNames()
  }
  
  const getMatchingNames = () => {
    axios.post(`${api_url}getSuspectList/`, {
      "forenames": name.forename,
      "surname": name.surname
    })
      .then(res => {
        const data = res.data
        setMatches(data)
        console.log(nameMatches)
        })
      .catch(err => console.log(err))
  }
  // if theres time, add a "none found if length=0"
  const peopleCards = nameMatches.map((match) => {
    return (
      <NameCard match={match}/>
    );
  });

  return (
    <>
    <Jumbotron>
      <h1>Person Search</h1>
      <p>Search for a person's name</p>
      <NameSearchForm handle={handle} clickio={clickio}/>
    </Jumbotron> 
    <CardDeck>    
        {peopleCards}
    </CardDeck>          
    </>
  )
}

export default NameSearch