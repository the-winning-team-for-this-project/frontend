import { Jumbotron, CardDeck } from 'react-bootstrap'
import NameSearchForm from './NameSearchForm'
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
    console.log({name})
    getMatchingNames()
  }

  const getMatchingNames = () => {
    axios.get("http://localhost:5000/names/")
    // send in name to the get req
      .then(res => {
        setMatches(res.data)
        console.log({nameMatches})
        })
      .catch(err => console.log(err))
  }

  const PeopleCards = nameMatches.map((match) => {
    return (
      <NameCard match={match}/>
    );
  });

  return (
    <>
    <Jumbotron>
      <h1>Person Search</h1>
      <p>
        Search for a person's name.
      </p>
      <NameSearchForm handle={handle} clickio={clickio}/>
    </Jumbotron> 
    <CardDeck> 
      {PeopleCards}   
    </CardDeck>          
    </>
  )
}

export default NameSearch