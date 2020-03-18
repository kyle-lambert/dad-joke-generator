import React, { Component } from "react";
import Joke from "./Joke";
import "./JokeList.css";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const REQUEST_URL = "https://icanhazdadjoke.com/";

class JokeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    };
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  async componentDidMount() {
    try {
      const jokes = [];
      while (jokes.length < 10) {
        const res = await fetch(`${CORS_PROXY}${REQUEST_URL}`, {
          headers: {
            Accept: "application/json"
          }
        });
        const data = await res.json();
        if (data.status === 200) {
          jokes.push({
            id: data.id,
            joke: data.joke,
            rating: 0
          });
        } else {
          console.log("Problem with fetch URL request.");
        }
      }
      this.setState({ jokes: jokes });
    } catch (error) {
      console.log(error);
    }
  }

  upVote(id) {
    const state = this.state;
    const jokes = state.jokes
      .map(j => {
        if (j.id === id) {
          return { ...j, rating: j.rating + 1 };
        } else {
          return { ...j };
        }
      })
      .sort((a, b) => b.rating - a.rating);

    if (id) {
      this.setState(st => {
        return {
          jokes: jokes
        };
      });
    }
  }

  downVote(id) {
    const state = this.state;
    const jokes = state.jokes
      .map(j => {
        if (j.id === id) {
          return { ...j, rating: j.rating - 1 };
        } else {
          return { ...j };
        }
      })
      .sort((a, b) => b.rating - a.rating);

    if (id) {
      this.setState(st => {
        return {
          jokes: jokes
        };
      });
    }
  }

  render() {
    const jokes = this.state.jokes.map(j => (
      <Joke
        key={j.id}
        jokeId={j.id}
        joke={j.joke}
        rating={j.rating}
        upVote={this.upVote}
        downVote={this.downVote}
      />
    ));
    return <ul className="JokeList">{jokes}</ul>;
  }
}

export default JokeList;
