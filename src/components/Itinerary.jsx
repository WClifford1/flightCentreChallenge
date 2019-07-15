import React, { Component } from 'react'
import './Card.modules.css';
import pin from '../images/pin.svg'


export default class Itinerary extends Component {

    constructor(props) {
        super(props)
        this.expandList = this.expandList.bind(this);
        this.reduceList = this.reduceList.bind(this);
    }

    // shortState variable represents whether the itinerary destinations are made shorter or not
    // full list of itineraries is props.itinerary
    // reduced list of itineraries is props.shortItinerary
    state = {
        shortState: false
    }

    // if props.itinerary is greater than props.shortItinerary (57 character max)
    // this.state.shortState = true
    // reduced list of itineraries is rendered
    componentDidMount(){
        if (this.props.shortItinerary.length < this.props.itinerary.length) {
            this.setState({ shortState: true})
        }
    }
    
    // funtion sets shortState to true while mouse is hovered over -
    // replaces any instance of props.shortItineray with full length props.itinerary
    expandList(){
        this.setState({ shortState : false})
        document.body.style.cursor = "pointer"
    }

    // function reverts any expanded itineraries back to props.shortItinerary when mouse leaves
    reduceList(){
        this.setState({ shortState: true })
        document.body.style.cursor = "default"

    }
    
    render() {
        // number of items that are hidden in props.shortItinerary
        const itemsLeft = this.props.itinerary.length - this.props.shortItinerary.length
        
        // if shortState is true, props.shortItinerary is rendered with itemsLeft
        // hovering over itemsLeft calls expandList() function
        // else props.itinerary is rendered
        return (
            <div>
                <img className="img" src={pin} alt=""/>{this.state.shortState ? <span>{this.props.shortItinerary.join(', ') + "... "} <span id="expand" onMouseEnter={this.expandList} >{itemsLeft ? " +" + itemsLeft + " more" : ""}</span></span> : <span onMouseOut={this.reduceList}>{this.props.itinerary.join(', ')}</span>}
            </div>
        )
    }
}
