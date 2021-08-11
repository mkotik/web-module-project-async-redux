import React, { Component } from "react";
import Card from "./Card";
import { connect } from "react-redux";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      ...this.props,
    };
  }
  render() {
    return (
      <div className="d-flex flex-wrap">
        {this.props.coins.map((coin) => {
          return (
            <Card
              name={coin.name}
              date={coin.data_end}
              oneDayVol={coin.volume_1day_usd}
              oneHrVol={coin.volume_1hrs_usd}
              price={coin.price_usd}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coins: state.coins,
  };
};

export default connect(mapStateToProps)(Cards);
