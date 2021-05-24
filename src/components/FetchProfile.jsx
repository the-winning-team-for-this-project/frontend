import { useHistory } from 'react-router-dom'
import ProfileContent from './ProfileContent'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

const FetchProfile = () => {

  const [profileData,setData]= useState("")
  const history = useHistory()
  const params = useParams()
  const reg = params.reg


  useEffect(() => {

    const getProfileData = () => {
    axios.get(`http://localhost:5000/suspect/?vehicleRegistrationNo=${reg}`)
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