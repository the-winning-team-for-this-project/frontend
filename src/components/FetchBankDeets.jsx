import { useHistory } from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { useParams } from "react-router"
import BankDeets from './BankDeets'


const FetchBankDeets = () => {

  const [profileData,setData]= useState("")
  const history = useHistory()
  const params = useParams()
  const bId = params.bId


  useEffect(() => {

    const getData = () => {
    axios.get(`names/?bankAccountId=/${bId}`)
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
    // if statement to redirect to 404 if no veh reg
    getData()
    }, [])

    const buttonClick = () => {
      history.push("/map-view/" + reg)
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