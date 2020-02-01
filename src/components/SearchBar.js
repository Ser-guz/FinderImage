import React from 'react';

class SearchBar extends React.Component {
  state = { term: ''};

  onFormSubmit = (event) => {
    event.preventDefault();  /*Предотвращение развития логики по умолчанию,
    чтобы страница после нажатия Ввод не перезагружалась*/
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label><h3>Image Search</h3></label>
            <input
              type='text'
              value = {this.state.term}
              onChange={(e) => this.setState({ term: e.target.value})}
            />
          </div>
        </form>
      </div>
    );
  }
};

export default SearchBar;
