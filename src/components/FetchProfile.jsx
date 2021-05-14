
import axios from 'axios'
import {useState, useEffect} from 'react'
import ProfileContent from './ProfileContent'


const FetchProfile = () => {

const [profileData,setData]= useState("");

// will change to real api url
const API_URL = "http://localhost:5000/searchSuspect/"

useEffect(() => {
    const getProfileData = () => {
    // will need to change this when backend is done

    axios.get(API_URL + "?vehicleRegistrationNo=FK59 TDY")
      .then(res => {
      const profileJSON = res.data
      setData(profileJSON)
      })
      .catch(err => console.log(err))
    }
    getProfileData()
    }, [])
  
    return (
      <>
      {profileData && 
        <ProfileContent profileData={profileData}/>
        }
      </>
  );
}


export default FetchProfile