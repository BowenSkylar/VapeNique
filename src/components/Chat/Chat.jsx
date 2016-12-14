import React, { Component } from 'react';
import './Chat.css';

export default class Chat extends Component {

  componentWillMount() {
    this.socketFn();
  }

  socketFn() {
    // receive data from server through socket 'chatroom'
    const socket = io();
    socket.on('chatroom', msg => {
      // console.log('data on frontend', msg);
      const ul = document.getElementById('messages');
      const li = document.createElement('li');
      // const username = document.querySelector('username');
      li.innerHTML = `${this.props.username}: ${msg.msg}` ;
      ul.appendChild(li);
    });
  }

  handleSubmit(e) {
    // console.log('submit event', e.target);
    e.preventDefault();
    const socket = io();
    const i = document.getElementById('m');
    // send data to server through socket 'server-chat'
    socket.emit('server-chat', i.value);
    i.value = '';
  }

  handleInputChange(e) {
    // console.log(e.target.value)
    this.setState({
      msg: e.target.value,
    });
  }
  render() {
    return(
      <div className='message-popup'>
        <div
        className="message-header"
        onClick={()=>{document.querySelector('.message-popup').style.display = "none"}}
        ><span>×</span>
        </div>
        <div className="screen">
          <ul id="messages"></ul>
        </div>
        <div className='socket-form'>
          <form onSubmit={event => this.handleSubmit(event)}>
            <input id="m" onChange={event => this.handleInputChange(event)}/>
            <button>Press Enter</button>
          </form>
        </div>
      </div>
    )
  }
}
