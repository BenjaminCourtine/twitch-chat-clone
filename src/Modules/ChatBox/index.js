import React from 'react';
import Message from '../../Components/Message';
import base from '../../base';

export default class ChatBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      messages: {}
    }
  }

  componentDidMount() {
    this.ref = base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  addMessage = (e) => {
    e.preventDefault();
    
    const timestamp =  Date.now();
    const messages = {...this.state.messages}
    const message = {
      pseudo: this.props.match.params.pseudo,
      content: this.state.message
    }

    messages[`Message-${timestamp}`] = message

    message.content.length > 0 && 
      this.setState({
        messages,
        message: ''
      }, () => this.scrollToBottom(this.messages))
  }

  scrollToBottom = (el) => {
    el.scrollTop = 100000;
  }

  handleChange = (e) => {
    this.setState({message: e.target.value})
  }

  render() {
    return(
      <div className="chat-box">
        <div className="messages" ref={el => this.messages = el}>
          {
            Object.keys(this.state.messages).map((message, index) => {
              return (
                <Message key={index} pseudo={this.state.messages[message].pseudo} content={this.state.messages[message].content}/>
              )
            })
          }
        </div>
        <form className="message-form" onSubmit={async e => this.addMessage(e)}>
          <textarea placeholder="New message"
                    value={this.state.message}
                    ref={textarea => this.textarea = textarea}
                    onChange={e => this.handleChange(e)}>
          </textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}