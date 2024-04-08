import '../App.css';
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import HexagonalMap from './HexagonalMap';
import axios from 'axios';
import logo from '../svg/logo.png'
import RouterMap from './RouterMap';
import frostDefault from '../svg/frost-default.png'
import frostDis from '../svg/frost-dis.png'
import frostLike from '../svg/frost-like.png'


function MainPage() {
    const [mapData, setMapData] = useState(null)
    const [mapState, setMapState] = useState(Math.round(Math.random() * (34 - 1) + 1))
    const [frostText, setFrostText] = useState('Здравствуйте, Я ваш помошник Frost')
    const [frostImg, setFrostImg] = useState(frostDefault)

    useEffect(() => {
        try {
            const res = axios.get('http://localhost:5000/api/get_data');
            res.then((res) => {
                setMapData(res.data)
            })
            return
        } catch (error) {
            console.error(error);
            throw error;
        }
    }, [])

    const test = (mapState, mapData) => {
        if (mapState !== null && mapData) {
            const { name, numOfAtractions, numOfHotels, transportAccessibility } = mapData[mapState]
            return (
                <div className='stats-cont'>
                    <div className='stats'>
                        <h1 className="route-text">
                            {Math.round(((numOfAtractions + numOfHotels + transportAccessibility / 2))) * 10} 👑
                        </h1>
                        <div className='route-cont'>
                            Название: {name}
                        </div>
                        <div className='route-cont'>
                            Достопримичательности: {numOfAtractions}
                        </div>
                        <div className='route-cont'>
                            Отели: {numOfHotels}
                        </div>
                        <div className='route-cont'>
                            Транспортная доступность: {transportAccessibility}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='stats-cont'>
                    <div className="stats">
                        <h1>Нет</h1>
                    </div>
                </div>
            )
        }
    }
    const phrazersLike = [' - прекрасное место, чтобы провести время с семьёй',
        ', именно здесь вы увидите незабываему природу Якутии', '- прекрасное место для настоящих гурманов']
    const phrazersDis = [' имеет потенциал к развитию, но пока что не развит',
        '... если у вас есть знакомые инвесторы, то пригласите их сюда']
    useEffect(() => {
        if (mapData) {
            const { name, numOfAtractions, numOfHotels, transportAccessibility } = mapData[mapState]

            if ((Math.round(((numOfAtractions + numOfHotels + transportAccessibility / 2))) * 10) > 150) {
                setFrostText(`${name}${phrazersLike[Math.round(Math.random() * (2 - 0) + 0)]}`)
                setFrostImg(frostLike)
            } else {
                setFrostText(`${name}${phrazersDis[Math.round(Math.random() * (1 - 0) + 0)]}`)
                setFrostImg(frostDis)
            }
        }
    }, [mapState])

    useEffect(() => {
        if (mapData) {
            setTimeout(() => {
                setFrostText(`Могу предложить посетить ${mapData[mapState]['name']}`)
            }, 2000)
        }
    }, [mapData])

    return (
        <div className='app-cont'>
            <header className='logo-cont'>
                <div className='logo-img-cont'>
                    <img src={logo} alt="logo" className='logo' />
                    <h1 className='logo-text'>ICY HORIZONS</h1>
                </div>

                <div className="frost-wrapper">
                    <div className="frost-cont">
                        <img className='frost' src={frostImg} alt="frost" />
                        <p className='frost-text'>
                            {frostText}
                        </p>
                    </div>
                </div>

                <div className='a-cont'>
                    <button href="" className='header-btn'>О продукте</button>
                    <button href="" className='header-btn empty'>Преимущества</button>
                    <button href="" className='header-btn'>О нас</button>
                    <button href="" className='header-btn empty'>Контакты</button>
                </div>
            </header>

            <div style={{ width: "100%", height: '800px' }}>
                <HexagonalMap setMapState={setMapState} />
                {test(mapState, mapData)}
            </div>
            <RouterMap />
        </div>
    );
}

export default MainPage;