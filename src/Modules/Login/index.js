import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pseudo: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // @elie : funny that you don't use state here ! You write in the HTML
    // @elie : Using a ternary here is not good for code readability
    this.state.pseudo.length < 3 ?
      document.querySelector('.err-message').innerHTML = 'Your pseudo is to short'
    :
      this.props.history.push(`/pseudo/${this.pseudo.value}`)
  }

  handleChange = (e) => {
    this.setState({pseudo: e.target.value})
  }

  render() {
    return(
      <form className="login-form" onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text"
               placeholder="Pseudo"
               ref={input => this.pseudo = input}
               value={this.state.pseudo}
               onChange={e => this.handleChange(e)}
        />
        <span className="err-message"></span>
        <button type="submit">Login</button>
      </form>
    )
  }
}
