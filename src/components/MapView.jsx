import {useState, useEffect} from 'react'
import {useParams} from "react-router"
import {api_url} from './constants.json'
import axios from 'axios'
import Map from './Map'

const MapView = () => {

    const params = useParams()
    const reg = params.reg
    const [profileData,setData]= useState("")
    
    useEffect(() => {

        const getProfileData = () => {
        axios.get(`${api_url}/getSuspect/${reg}`)
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
