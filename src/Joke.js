import React, { Component } from "react";
import Rating from "./Rating";
import "./Joke.css";

class Joke extends Component {
  render() {
    return (
      <li className="Joke">
        <Rating
          upVote={this.props.upVote}
          downVote={this.props.downVote}
          jokeId={this.props.jokeId}
          rating={this.props.rating}
        />
        <p className="Joke-text">{this.props.joke}</p>
      </li>
    );
  }
}

export default Joke;
