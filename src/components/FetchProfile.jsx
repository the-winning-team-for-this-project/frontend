
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { useParams } from "react-router"
import ProfileContent from './ProfileContent'


const FetchProfile = () => {

  const [profileData,setData]= useState("")
  const history = useHistory()
  const params = useParams()
  const reg = params.reg



  //  change to real endpoint url
  const API_URL = "http://34.241.2.97:8080/getSuspect/"

  useEffect(() => {
    const getProfileData = () => {

    axios.get(API_URL + reg, { crossdomain: true })
      .then(res => {
      const profileJSON = res.data
      console.log(profileJSON)
      setData(profileJSON)
      })
      .catch(err => {
        console.log(err)
        history.push("/page-not-found")
      })
    }
    // if statement to redirect to 404 if no veh reg
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