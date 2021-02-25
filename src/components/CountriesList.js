import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountriesList extends Component {
  state = {
    countries: [],
    showError: false,
    errorMessage: undefined,
  };

  getAPIData = () => {
    fetch('https://restcountries.eu/#api-endpoints-all')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ countries: data });
      })
      .catch((err) => {
        this.setState({ showError: true, errorMessage: 'Not working!' });
      });
  };

  componentDidMount = () => {
    // this.setState({ countries: countries }); //previous iterations
    this.getAPIData(); // Bonus iteration
  };

  render() {
    return (
      <div>
        {this.state.countries.map((country) => {
          return (
            <Link
              key={country.cca3}
              className="list-group-item list-group-item-action"
              to={`/${country.cca3}`}
            >
              {country.name.common} {country.flag}
            </Link>
          );
        })}
      </div>
    );
  }
}
export default CountriesList;
