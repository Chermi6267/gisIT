import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet-defaulticon-compatibility';
import RoutingMachine from '../RoutingMachine';
import L from 'leaflet';
import markerIcon from '../svg/markerSvg.svg'


export default function RouterMap() {
    const [locationMarkers, setLocationMarkers] = useState([]);
    const [waypoints, setWaypoints] = useState();

    useEffect(() => { }, [waypoints]);
    function success(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude

        return (latitude, longitude);
    }

    function error() {
        alert("Can't detect your location. Try again later.")
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        alert("Your browser is out of fashion. There is no geo location!")
    }


    if (document.querySelector('.leaflet-control-attribution')) {
        document.querySelector('.leaflet-control-attribution').remove()
    }

    if (document.querySelector('.leaflet-top')) {
        document.querySelector('.leaflet-top').remove()
    }

    if (document.querySelector('.leaflet-container')) {
        document.querySelector('.leaflet-container').style.background = "url('./svg/blending1712398809796.png')"
    }

    const icon = L.icon({
        iconUrl: markerIcon,
        iconSize: [64, 64],
        iconAnchor: [32, 64],
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null
    });

    return (
        <div className="map-wrapper">
            <div className="routeBlock">
                <div className="addRoutes">
                    <h1 className='route-text'>Туристичекие маршруты по Якутии</h1>
                    <div
                        onClick={() => {
                            if (waypoints) {
                                setWaypoints(null)
                            }
                            setTimeout(() => {
                                setWaypoints([
                                    {
                                        "latitude": "62.027221",
                                        "longitude": "129.732178",
                                        "lable": 'Якутск'
                                    },
                                    {
                                        "latitude": "61.104872",
                                        "longitude": "127.357230",
                                        "lable": 'Ленские столбы'
                                    },
                                    {
                                        "latitude": "63.464547",
                                        "longitude": "142.785220",
                                        "lable": 'Оймякон'
                                    },
                                    {
                                        "latitude": "62.52886751539156",
                                        "longitude": "113.99256382146285",
                                        "lable": 'Кемберлитовая трубка МИР'
                                    },
                                    {
                                        "latitude": "56.3930",
                                        "longitude": "124.4330",
                                        "lable": 'Нерюнгри'
                                    }
                                ])
                            }, 100)

                        }}
                        className='route-cont'>
                        Золотое кольцо Якутии
                    </div>
                    <div className='route-cont'
                        onClick={() => {
                            console.log(1)
                            if (waypoints) {
                                setWaypoints(null)
                            }
                            setTimeout(() => {
                                setWaypoints([
                                    {
                                        "latitude": "62.027221",
                                        "longitude": "129.732178",
                                        'lable': 'Якутск'
                                    },
                                    {
                                        "latitude": "62.541028",
                                        "longitude": " 113.978701",
                                        'lable': 'Мирный'
                                    },
                                    {
                                        "latitude": "58.608721",
                                        "longitude": "125.388215",
                                        'lable': 'Алдан'
                                    },
                                    {
                                        "latitude": "56.3930",
                                        "longitude": "124.4330",
                                        "lable": 'Нерюнгри'
                                    },
                                    {
                                        "latitude": "64.570836",
                                        "longitude": " 143.230899",
                                        'lable': 'Утсь-Нера'
                                    },
                                ])
                            }, 100)

                        }}
                    >
                        Тур по столицам районов
                    </div>
                    <div className='route-cont'>
                        Золотое кольцо Якутии
                    </div>
                    <div className='route-cont'>
                        Золотое кольцо Якутии
                    </div>
                </div>
            </div>
            <div className="">
                <MapContainer center={[62.027221, 129.732178]} id="mapId" zoom={2}>
                    {locationMarkers.map((loc, key) => {
                        return (
                            <Marker key={key} position={[loc.lat, loc.long]} icon={icon}  >
                                <Tooltip direction="right" offset={[0, 0]} opacity={1} permanent>{title}</Tooltip>
                                <Popup>{loc.address}</Popup>
                            </Marker>
                        );
                    })}
                    <TileLayer attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
                        url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png' />
                    {waypoints ? <RoutingMachine waypoints={waypoints} /> : ''}
                </MapContainer>
            </div>
        </div >
    )
}
