import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// var app = document.getElementById('app');
// app.innerHTML = "Hello!"

//new

//var React = require('react');
//var ReactDOM = require('react-dom');
var USER_DATA = {
  name: 'Mari Gonzalez',
  username: 'la-mari',
  image: 'https://avatars.githubusercontent.com/la-mari'
}

var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}}></img>
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href={'https://www.github.com/' +  this.props.username}>
          {this.props.username}
        </a>
      </div>
    );
  }
});

 var ProfileName = React.createClass({
   render: function () {
     return (
    	<div>{this.props.name}</div>
     )
   }
 });

// avatar component will take care of encapsulating 
// profile name component profile link and profile pic

var Avatar = React.createClass({
  render: function () {
    return(
      <div>
        <ProfilePic imageUrl={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    );
  }
});

ReactDOM.render(
  <Avatar user = {USER_DATA} />,
  document.getElementById('app')
);

// var HelloWorld = React.createClass({
// 	render: function () {
// 		console.log(this.props)
// 		return (
// 			<div> Hello {this.props.name} </div>
// 		)
// 	}
// });

// ReactDOM.render(
//   <HelloWorld name = "Mari"/>,
//   document.getElementById('app')
// );









