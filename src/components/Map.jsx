// import { MapContainer, TileLayer, Marker } from 'react-leaflet'

// const Map = ({profileData}) => {
//     const arrayOfLocations = profileData.locations

//     return (
//         <>
//         <MapContainer center={[51.505, -0.09]} zoom={8} scrollWheelZoom={true}>
//             <TileLayer
//                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

//                 {arrayOfLocations.map(singleLoc => (
//                     <Marker 
//                     position={[singleLoc.latitude, singleLoc.longitude]}>
//                     </Marker>
//                 ))}

//         </MapContainer>
//         </>
//     )
// }

// export default Map
