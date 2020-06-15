import React, { Component } from "react";
import "./index.css";
import Movies from "./Movies";
import getMovies from "./API/fetchMovie";
export default class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
      year: 1895,
      loading: true,
    };
  }
  handleMoviewChange = (event) => {
    this.setState(
      {
        year: event.target.value,
      },
      () => {
        console.log(this.state.year);
      }
    );
  };
  handleSearchbtnClick = () => {
    this.setState({
      loading: true,
      movieList: [],
    });
    var fn = getMovies(this.state.year);

    fn.then(
      function (data) {
        this.setState({
          movieList: data,
          loading: false,
        });
        this.setState({
          movieList: data,
          loading: false,
        });
      }.bind(this)
    );
  };

  componentDidMount() {
    var fn = getMovies(this.state.year);

    fn.then(
      function (data) {
        this.setState({
          movieList: data,
          loading: false,
        });
      }.bind(this)
    );
  }
  render() {
    return (
      <div className="layout-column align-items-center mt-50">
        <section className="layout-row align-items-center justify-content-center">
          <input
            type="number"
            className="large"
            placeholder="Enter Year eg 2015"
            data-testid="app-input"
            value={this.state.year}
            onChange={this.handleMoviewChange}
          />
          <button
            className=""
            data-testid="submit-button"
            onClick={this.handleSearchbtnClick}
          >
            Search
          </button>
        </section>

        {this.state.loading ? (
          "loading ..."
        ) : (
          <ul className="mt-50 styled" data-testid="movieList">
            <Movies movieList={this.state.movieList}></Movies>
          </ul>
        )}

        <div className="mt-50 slide-up-fade-in" data-testid="no-result"></div>
      </div>
    );
  }
}
