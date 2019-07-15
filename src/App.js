import React, { Component } from 'react'
import './App.css';
import Card from './components/Card'
import Results from './sample_data.json'


function getStars(rating) {
    let stars = []
    for(let i = 0; i < Math.floor(rating); i++){
        stars.push(i)
    }
    return stars
}


export default class App extends Component {


    shortenItinerary = itinerary => {
        const shortItinerary = []
        let sum = 0
        itinerary.forEach(x => {
            sum += x.length
            if (sum < 57) {
                shortItinerary.push(x)
            }
        })
        return shortItinerary 
    }


    render() {
    return (
        <div className="landing">
            <div className="topText">
                <h2 className="heading">Select a Tour</h2>
                <p className="heading"><span className="heading bold">{Results.results.length} tours</span> found</p>
            </div>
            
            
            <div className="container">     
                {Results.results.map((x, i) =>
                    <Card key={i} itinerary={x.itinerary} shortItinerary={this.shortenItinerary(x.itinerary)} halfStar={x.rating % 1 !== 0 ? true : false} fullStars={getStars(x.rating)} price={x.price} duration={x.duration} dateEnd={x.date_end} dateStart={x.date_start} logo={x.operator[0].logo} operator={x.operator[0].name} image={x.image} tour_name={x.tour_name} />
                )}
            </div>
        </div>
    );
    }
}