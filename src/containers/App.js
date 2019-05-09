import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../component/header';
import Footer from '../component/footer';
import { Home, News, Login, Profile } from '../component/pages';
import { logIn } from '../actions/PageActions';

import './App.css';

class App extends Component {
  state = {
    news: null,
    isLoading: true,
  };
  updateState = value => {
    this.setState({ isLoggedIn: value });
  };
  componentDidMount() {
    fetch('http://localhost:3000/data/newsData.json')
      .then(respons => {
        return respons.json();
      })
      .then(data => {
        setTimeout(() => {
          // добавили задержку
          this.setState({ isLoading: false, news: data });
        }, 1000);
      });
  }
  render() {
    const { news, isLoading } = this.state;
    const { isLoggedIn, logInAction } = this.props;
    return (
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route
          path="/news"
          render={props => <News isLoading={isLoading} data={news} />}
        />
        <Route
          path="/login"
          render={props => (
            <Login isLoggedIn={isLoggedIn} logIn={logInAction} />
          )}
        />
        <Route
          path="/profile"
          render={() => <Profile isLoggedIn={isLoggedIn} />}
        />
        <Footer />
      </Router>
    );
  }
}
const mapStateToProps = store => {
  console.log(store);
  return {
    isLoggedIn: store.isLoggedIn,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logInAction: isLoggedIn => dispatch(logIn(isLoggedIn)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
