import React from 'react'
import styles from './Card.modules.css';
import Star from '../images/star.svg'
import halfStar from '../images/star-half.svg'
import clock from '../images/clock.svg'
import calendar from '../images/calendar.svg'
import tooltip from '../images/tooltip.svg'
import Itinerary from './Itinerary'



export default function Card(props) {
    

    // convert props.dateStart and props.dateEnd to correct format
    function convertDateFormat(date) {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        date = date.split('-').reverse()
        date[1] = months[(date[1] - 1)]
        return date.join(' ')
    }


    return (
        <section> 
                <div className="card">
                    <div classNamne="parent">
                        <img className="card-img" src={props.image} alt=""/>
                        <div className="child">
                            <img className="card-logo" src={props.logo} alt={props.operator} />
                        </div>
                    </div>
                    <div className="info">
                        <h4 className="name">{props.tour_name}</h4>
                        {props.fullStars.map(x =>
                        <img src={Star} alt="" />
                            )}
                        <img src={props.halfStar ? halfStar : ""} alt="" />
                    </div>

                        <div className={styles.gridContainer}>

                            <img className="img" src={calendar} alt=""/><p className="next"> {convertDateFormat(props.dateStart)} - {convertDateFormat(props.dateEnd)}</p>
                            <br/>
                            <img className="img" src={clock} alt=""/><p className="next">{props.duration} Days</p>
                            <br/>
                            <Itinerary className="next" shortItinerary={props.shortItinerary} itinerary={props.itinerary} />
                        
                        </div>

                        <hr></hr>
                        <p>from <img src={tooltip} alt="" /></p>
                        <h1 className="price">${props.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} <button class="button">VIEW TOUR</button></h1>
                </div>
        </section>
    )
}
