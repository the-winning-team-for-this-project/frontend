import { useHistory } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import {api_url} from './constants.json'
import BankDeets from './BankDeets'
import axios from 'axios'

const FetchBankDeets = () => {

  const [profileData,setData]= useState("")
  const history = useHistory()
  const params = useParams()
  const bId = params.bId

  useEffect(() => {

    const getData = () => {
    axios.get(`${api_url}getBackground/${bId}`)
      .then(res => {
      const dataJSON = res.data
      console.log(dataJSON)
      setData(dataJSON)
      })
      .catch(err => {
        console.log(err)
        history.push("/page-not-found")
      })
    }
    getData()
    }, [])

    const buttonClick = () => {
      history.push("/map-view/" + bId)
    }
    
    return (
      <>
        {profileData && 
          <BankDeets profileData={profileData} buttonClick={buttonClick}/>
        }
      </>
  );
}


export default FetchBankDeets