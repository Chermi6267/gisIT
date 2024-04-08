import React from 'react'
import aboutLogo from '../svg/aboutLogo.svg'
import firstImg from '../svg/firstImg.png'
import secondImg from '../svg/secondImg.png'
import map from '../svg/map.png'
import thirdImg from '../svg/thirdImg.png'
import fourthImg from '../svg/fourthImg.png'
import footerImg from '../svg/footerImg.png'


export default function About() {
    return (
        <div className="about-cont">
            <div className='about-logo-cont'>
                <img src={aboutLogo} className='about-logo' alt="" />
            </div>

            <div className="icy-hor-cont">
                <h1 className='icy-hor'>
                    ICY<br></br>HORIZONS
                </h1>
            </div>

            <div className='info-cont first-about'>
                <h1 className='info-text'>
                    <p style={{ fontSize: "40px" }}>Открой дверь к прекрасному</p> <br></br>
                    <br></br>
                    <br></br>
                    Наше приложение призвано помочь людям раскрыть, оценить всю красоту,  и многогранность туристического потенциала Якутии, делая путешествия по этому уникальному региону более доступными и запоминающимися.
                </h1>
                <img src={firstImg} alt="" />
            </div>

            <div className='info-cont' style={{ flexDirection: 'row-reverse', width: '80%' }}>
                <h1 className='info-text' style={{ width: '500px', textAlign: 'right' }}>
                    <p style={{ fontSize: "40px" }}>Строит маршруты легко и просто как никогда </p> <br></br>
                    <br></br>
                    <br></br>
                    С нашим приложением вы с лёгкостью сможете проложить маршрут по самым интересным точкам Якутии. Наша удобная навигация поможет вам исследовать уникальные места региона и создать незабываемый маршрут для вашего путешествия.
                </h1>
                <img src={map} alt="" style={{ width: "617px" }} />
            </div>

            <div className='info-cont' style={{ flexDirection: 'row', columnGap: '281px', width: '80%' }}>
                <h1 className='info-text' style={{ width: '500px', textAlign: 'left' }} >
                    <p style={{ fontSize: "40px" }}>Вы всегда будете знать где и когда быть</p> <br></br>
                    <br></br>
                    <br></br>
                    <h2 style={{ color: '#F9BED4', fontFamily: '"Roboto Condensed", sans-serif' }}>ICY HORIZON</h2> создает расписание, показывающее, где и когда быть. Будь то деловая поездка, семейный отдых или короткая поездка на выходные, приложение систематизирует всю вашу информацию, чтобы вы могли получить доступ к деталям вашей поездки, где бы вы ни находились.
                </h1>
                <img src={secondImg} alt="" style={{ width: "769px" }} />
            </div>

            <div className='info-cont' style={{ flexDirection: 'row-reverse', columnGap: '280px', width: '80%' }}>
                <h1 className='info-text' style={{ width: '500px', textAlign: 'right' }}>
                    <p style={{ fontSize: "40px" }}>Не можете составить маршрут?</p> <br></br>
                    <br></br>
                    <br></br>
                    Тогда вы можете выбрать один из предложенных маршрутов, специально подобранных для тоого чтобы в полной мере прочувствовать всё обворожение Якутии
                </h1>
                <img src={thirdImg} alt="" style={{ width: "668px" }} />
            </div>

            <div className='info-cont' style={{ flexDirection: 'row', columnGap: '280px', width: '80%' }}>
                <h1 className='info-text'>
                    <p style={{ fontSize: "40px" }}>Если вы туроператор, то вы тоже сможете пользоваться нашим приложением
                    </p> <br></br>
                    <br></br>
                    <br></br>
                    Наше приложение представляет собой удобную и эффективную платформу для туроператоров, которая позволяет им предлагать свои туристические услуги широкой аудитории. Мы предлагаем удобный интерфейс для размещения туров, возможность управления ценами и доступностью, а также данные аналитики. Взамен за использование нашей платформы и расширение своей клиентской базы, мы взимаем небольшую комиссию с каждой успешной сделки. Наша цель - помочь туроператорам эффективно продвигать свои услуги и увеличивать свою прибыльность.

                </h1>
                <img src={fourthImg} alt="" style={{ width: "617px" }} />
            </div>

            <div className="last-info-cont">
                <h1 className='last-info-h1'>
                    Попробуйте приложение для путешествий, которое всегда будет с вами
                </h1>
                <br></br>
                <br></br>
                <br></br>
                <h2 className='last-info-h2'>
                    Так много поездок, так мало времени. Позвольте ICY HORIZON позаботиться о деталях, чтобы вам не пришлось этого делать.
                </h2>
                <button
                    onClick={() => { window.location.href = '/main' }}
                    className='about-btn'>
                    Начни прямо сейчас
                </button>
            </div>
            <footer className='about-footer'>
                <div className="footer-wr">
                    <img src={footerImg} alt="" className='footer-img' />
                    <div className="footer-contacts">
                        <a href="" className='footer-a'>
                            О нас
                        </a>
                        <a href="" className='footer-a'>
                            Условия соглашения
                        </a>
                        <a href="" className='footer-a'>
                            Контактная информация
                        </a>
                    </div>
                </div>
            </footer>
        </div >
    )
}
