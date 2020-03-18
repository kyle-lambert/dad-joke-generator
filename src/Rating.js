import React, { Component } from "react";
import "./Rating.css";

class Rating extends Component {
  decideColor() {
    const rating = this.props.rating;
    if (rating > 3) {
      return "#2ECC71";
    } else if (rating > 0 && rating <= 3) {
      return "#82E0AA";
    } else if (rating < -3) {
      return "#E74C3C";
    } else if (rating < 0 && rating >= -3) {
      return "#F1948A";
    } else {
      return "#F4D03F";
    }
  }
  render() {
    return (
      <div className="Rating">
        <button onClick={() => this.props.upVote(this.props.jokeId)}>
          <i className="fas fa-arrow-up"></i>
        </button>
        <p style={{ border: `4px solid ${this.decideColor()}` }}>
          {this.props.rating}
        </p>
        <button onClick={() => this.props.downVote(this.props.jokeId)}>
          <i className="fas fa-arrow-down"></i>
        </button>
      </div>
    );
  }
}

export default Rating;
