import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader"
import Search from "../components/Search";

const API_KEY = '92f0a021';
class Main extends React.Component {
  state = {
    movies: [],
    search: 'matrix',
    type: 'all',
    loading: true,
  }

  componentDidMount() {
    this.searchMovies(this.state.search, this.state.type)
  }


  searchMovies = (str, type) => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type === 'all' ? '' : `&type=${type}`}`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }))
      .catch(err => console.log(err));
    this.setState({ loading: false });
  }

  render() {
    const { movies, loading } = this.state;
    return <main className="container content">
      <Search searchMovies={this.searchMovies} />
      {
        loading
          ? <Preloader />
          : <Movies movies={movies} />
      }
    </main>;
  }
}

export default Main;