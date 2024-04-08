import L from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import markerIcon1 from './svg/markerSvg.svg'

const createRoutineMachineLayer = ({ waypoints }) => {
  const instance = L.Routing.control({
    waypoints: waypoints.map(({ latitude, longitude }) =>
      L.latLng(latitude, longitude),
    ),
    draggableWaypoints: true,
    createMarker: function (i, waypoint) {
      // Создание иконки маркера
      const markerIcon = L.icon({
        iconUrl: markerIcon1,
        iconSize: [64, 64],
        iconAnchor: [32, 64],
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null
      });
      // Создание маркера с иконкой
      return L.marker(waypoint.latLng, {
        draggable: false, // Включение возможности перетаскивания маркера
        icon: markerIcon,
        title: waypoints[i]['lable']// Установка иконки маркера
      });
    }
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
