import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card-wrap">
        <div className="bg-success w-100 m-auto p-5 rounded mt-3">
          <div className="text-start ">
            <h1 className="text-center">{this.props.date}</h1>
            <h2 className="border-bottom border-dark">{this.props.name}</h2>
            <h4 className="lead">1 Day Volume (USD): {this.props.oneDayVol}</h4>
            <h4 className="lead">1 Hour Volume (USD): {this.props.oneHrVol}</h4>
            <h4 className="lead">Price (USD): {this.props.price}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
