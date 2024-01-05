import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import mapIcon from "../../../assets/placeholder.png"

import { Icon, divIcon, point } from "leaflet";

const LocationMap = () => {
  // create custom icon
  const customIcon = new Icon({
    // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconUrl: mapIcon,
    iconSize: [30, 30], // size of the icon
  });

  // custom cluster icon
  const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };

  // markers
  const markers = [
    {
      geocode: [23.382065913112346, 92.29395381818482],
      popUp: "Sajek",
    },
    {
      geocode: [21.428922111571584, 92.00278817681354],
      popUp: "Cox's Bazar",
    },
    {
      geocode: [21.819744785506565, 90.13853270439054],
      popUp: "Kuakata",
    },
    {
      geocode: [22.298937615666887, 89.56757934979424],
      popUp: "Sundarbans",
    }
  ];
  return (
    <MapContainer center={[23.777176, 90.399452]} zoom={7}>
      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {/* Mapping through the markers */}
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}

      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default LocationMap;