import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MyMap = () => {
  return(
    <MapContainer
    className="rounded-lg shadow-lg"
    center={[30.050541970646858, 31.24079611349317]} // القاهرة
    zoom={13}
    style={{ height: "400px", width: "100%" }}
  >
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={[30.050541970646858, 31.24079611349317]}>
      <Popup >موقعنا هنا</Popup>
    </Marker>
  </MapContainer>
  )
};

export default MyMap;
