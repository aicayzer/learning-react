import React from "react";
import ReactDOM from "react-dom";
import App from "./oldIndex";

class NameLength extends React.Component {
  render() {
    return this.props.short ? (
      <div>
        Length:{" "}
        <span style={{color: this.props.color}}>
          {this.props.name.length}
        </span>
      </div>
    ) : (
      <div>
        The field's value is{" "}
        <span style={{color: this.props.color}}>
          {this.props.name.length}
        </span>
        {" "}character(s) long.
      </div>
    );
  }
}

class NewApp extends React.Component {
  state = {
    name: "",
    friends: ['John', 'Costas'],
    newFriend: ""
  };

  onTextChange = (e) => {
    this.setState({name: e.target.value});
  };

  onAdd = (e) => {
    // What goes here?
    // How do we update state.friends to add a friend?
    // For example, to add 'Hi' to ['Hello'], do:
    // ['Hello'].concat(['Hi'])
    // 1. Update 'newFriend'
    // 2. Tell reacxt to update 'friends'
  };

  render() {
    return (
      <React.Fragment>
        <h2>With React</h2>
        <input type="text" onInput={this.onTextChange}/>
        <br />
        <NameLength name={this.state.name} color={"red"}/>
        <NameLength name={this.state.name} color={"blue"}/>
        <NameLength name={this.state.name} short/>
        <NameLength name={this.state.name}/>
        <div>
          <button onClick={this.onAdd}>Add</button>
          <input type='text'/>
          <ul>
            {this.state.friends.map(
              friend => <li>{friend}</li>)}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const simpleExample = true;
if (simpleExample) {
document.getElementById("rootNoReact").innerHTML += `
<h2>Without React</h2>
<input type="text" id="name" oninput=>
<br/>
<span id="label"></span>
`;

document.getElementById("name").oninput = handleInput;

function handleInput(e) {
    document.getElementById("label").textContent = `The field's value is
        <span>${e.target.value.length}</span> character(s) long.`;
  }
  const rootElement = document.getElementById("root");
  ReactDOM.render(<NewApp />, rootElement);  
} else {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);  
}