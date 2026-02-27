import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Setup Marker Icon
let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

interface Props {
    onLocationSelect: (lat: number, lng: number) => void;
    value: { lat: number | null; lng: number | null };
}

export default function LocationPicker({ onLocationSelect, value }: Props) {
    function ClickHandler() {
        useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng;
                onLocationSelect(lat, lng);
            },
        });
        return null;
    }

    const initialCenter: [number, number] = [11.249649, 124.001197];

    return (
        <MapContainer
            center={initialCenter}
            zoom={13}
            scrollWheelZoom={false}
            className="z-0 h-full w-full"
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <ClickHandler />

            {value.lat !== null && value.lng !== null && (
                <Marker position={[value.lat, value.lng]} />
            )}
        </MapContainer>
    );
}
