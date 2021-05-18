import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = ({profileData}) => {
    const arrayOfLocations = profileData.locations

    return (
        <>
        <MapContainer center={[51.505, -0.09]} zoom={8} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                {arrayOfLocations.map(singleLoc => (
                    <Marker position={[singleLoc.latitude, singleLoc.longitude]}>
                        <Popup position={[singleLoc.latitude, singleLoc.longitude]}>
                        <div>
                            <h4><b>Address:</b> <br></br> {singleLoc.streetname}</h4>
                            <br></br>
                            <h5><b>Timestamp:</b> <br></br> {singleLoc.timestamp}</h5>
                        </div>
                        </Popup>
                    </Marker>
                ))}

        </MapContainer>
        </>
    )
}

export default Map
