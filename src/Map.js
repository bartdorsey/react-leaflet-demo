import { useState, useEffect } from "react"
import { TileLayer, Marker, Popup, useMap } from "react-leaflet"

export default function Map() {
  const map = useMap()
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    console.log(
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords
        setLatitude(latitude)
        setLongitude(longitude)
        map.setView([latitude, longitude], 13)
      })
    )
  }, [map])

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          Home Sweet Home
        </Popup>
      </Marker>
    </>
  )
}
