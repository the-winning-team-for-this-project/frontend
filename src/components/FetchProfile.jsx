import { useHistory } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useParams } from "react-router"

import ProfileContent from './ProfileContent'

import axios from 'axios'

const FetchProfile = () => {

  const [profileData,setData]= useState("")
  const history = useHistory()
  const params = useParams()
    const reg = params.reg

  //  change to real endpoint url
  const API_URL = "http://localhost:5000/suspect/"

  useEffect(() => {
    const getProfileData = () => {

    axios.get(API_URL + "?vehicleRegistrationNo=" + reg)
      .then(res => {
      const profileJSON = res.data
      setData(profileJSON)
      })
      .catch(err => console.log(err))
    }
    getProfileData()
    }, [])

    const buttonClick = () => {
      history.push("/map-view/" + reg)
      
  }
    return (
      <>
        {profileData && 
          <ProfileContent profileData={profileData} buttonClick={buttonClick}/>
        }
      </>
  );
}


export default FetchProfile