import React from 'react'
import'./Card.css'
import Itinerary from './Itinerary'
import star from '../images/star.svg'
import halfStar from '../images/star-half.svg'
import clock from '../images/clock.svg'
import calendar from '../images/calendar.svg'
import tooltip from '../images/tooltip.svg'
import pin from '../images/pin.svg'
import ReactTooltip from 'react-tooltip'

export default function Card(props) {

    // convert props.dateStart and props.dateEnd to correct format
    function convertDateFormat(date) {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        date = date.split('-').reverse()
        date[1] = months[(date[1] - 1)]
        return date.join(' ')
    }


    return (
        <div id="cardComponent"> 
                <div className="card">
                    <div className="parent">
                        <img className="card-img" src={props.image} alt=""/>
                        <div className="child">
                            <img className="card-logo" src={props.logo} alt={props.operator} />
                        </div>
                    </div>

                    <div className="info">
                        <h4 className="name">{props.tour_name}</h4>
                        <div className="starImage">
                        {props.fullStars.map(x =>
                        <img className="stars" src={star} alt="" />
                            )}
                        <img className="stars" src={props.halfStar ? halfStar : ""} alt="" />
                        </div>
                    </div>

                    <div className="grid-container">
                        <img className="grid-item col1" src={calendar} alt=""/><p className="grid-item"> {convertDateFormat(props.dateStart)} - {convertDateFormat(props.dateEnd)}</p>
                        <img className="grid-item col1" src={clock} alt=""/><p className="grid-item">{props.duration} Days</p>
                        <img className="grid-item col1" src={pin} alt=""/><Itinerary className="grid-item" shortItinerary={props.shortItinerary} itinerary={props.itinerary} />
                    </div>

                    <div className="bottomHalf">
                        <hr className="lineBreak"></hr>
                        <button class="button">VIEW TOUR</button>
                        <p className="from">from <img id="tooltip" data-tip="Prices per person in Australian Dollars" src={tooltip} alt="" /></p>
                        <h1 className="price"><sup>$</sup>{props.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} </h1>
                    </div>
            </div>
            <ReactTooltip />
        </div>
    )
}
