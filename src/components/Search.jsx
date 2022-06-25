import React from "react";

class Search extends React.Component {
  state = {
    search: "matrix",
    type: "all",
  };

  hendleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  hendleRadioButtons = (event) => {
    this.setState({ type: event.target.dataset.type }, () => {
      this.props.searchMovies(this.state.search, this.state.type);
    });
  };

  render() {
    const { search } = this.state;
    return (
      <div className="search">
        <div className="row">
          <input
            id="email_inline"
            type="search"
            className="validate"
            placeholder="search"
            value={search}
            onChange={(event) => this.setState({ search: event.target.value })}
            onKeyDown={this.hendleKey}
          />
        </div>

        <div className="radio-buttons">
          <label>
            <input
              data-type="all"
              className="with-gap"
              name="group3"
              type="radio"
              checked={this.state.type === "all"}
              onChange={this.hendleRadioButtons}
            />
            <span>All</span>
          </label>

          <label>
            <input
              data-type="movie"
              className="with-gap"
              name="group3"
              type="radio"
              checked={this.state.type === "movie"}
              onChange={this.hendleRadioButtons}
            />
            <span>Movies</span>
          </label>

          <label>
            <input
              data-type="series"
              className="with-gap"
              name="group3"
              type="radio"
              checked={this.state.type === "series"}
              onChange={this.hendleRadioButtons}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    );
  }
}

export default Search;
