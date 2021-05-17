import axios from 'axios'
import {useState, useEffect} from 'react'
import ProfileContent from './ProfileContent'
import { useParams } from "react-router"
import { useHistory } from "react-router-dom"


const FetchProfile = () => {

const [profileData,setData]= useState("");
const history = useHistory()

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
      .catch(err => {
        console.log(err)
        history.push("/page-not-found")
      })
    }
    // if statement to redirect to 404 if no veh reg
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