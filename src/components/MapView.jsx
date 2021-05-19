import {useState, useEffect} from 'react'
import { useParams } from "react-router"

import axios from 'axios'

import Map from './Map'

// test reg = ABCD 1AB

const MapView = () => {

    const params = useParams()
    const reg = params.reg
    const [profileData,setData]= useState("")
    
    // future improvements would be to have an offline map (limited by amounts of data) as can see exactly what tile of map is being looked at
    const API_URL = "http://34.241.2.97:8080/getSuspect/"
    useEffect(() => {
        const getProfileData = () => {
    
        axios.get(API_URL + reg)
          .then(res => {
          const profileJSON = res.data
          setData(profileJSON)
          })
          .catch(err => console.log(err))
        }
        getProfileData()

        }, [])
    return (
        <div>
            {profileData && 
                <Map profileData={profileData}/>
            }
        </div>
    )
}

export default MapView
