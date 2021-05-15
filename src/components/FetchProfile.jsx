
import axios from 'axios'
import {useState, useEffect} from 'react'
import ProfileContent from './ProfileContent'
import { useParams } from "react-router";


const FetchProfile = () => {

const [profileData,setData]= useState("");

// grab reg from URL
const params = useParams();
    const reg = params.reg;

// will change to real api url
const API_URL = "http://localhost:5000/getSuspect/"

useEffect(() => {
    const getProfileData = () => {
    // will need to change this when backend is done

    axios.get(API_URL + "?vehicleRegistrationNo=" + reg)
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