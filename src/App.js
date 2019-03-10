import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { bindFetchUser, bindRegisterUser } from './actions';
import Grid from './grid.svg';

class App extends Component {

  handleLogin = () => {
    const email = document.querySelector('#email').value;
    this.props.fetchUser(email);
  }

  handleRegistry = () => {
    this.props.registerUser();
  }

  render() {
    if(this.props.isLoading) return <img src={Grid} className="grid" alt="grid" />;
    if(this.props.hasError) return <p>Ha ocurrido un error, intentelo nuevamente</p>;
    return (
      <div className="App">

        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"/>
          </div>
          <button type="submit" onClick={this.handleLogin}>Iniciar Sesion</button>
        </form>
        <button onClick={this.handleRegistry}>Registro</button>

        <pre>
          {JSON.stringify(this.props.user)}
        </pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.loading,
  user: state.model,
  hasError: state.error,
});

const mapDispatchersToProps = dispatch => ({
  fetchUser: bindFetchUser(dispatch),
  registerUser: bindRegisterUser(dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchersToProps);

export default withConnect(App);
