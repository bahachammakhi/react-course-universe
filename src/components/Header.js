import React,{Component} from "react";
import logo from '../logo.svg';

class Header extends Component{
    render(){
      return(
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
      Edit <code>{this.props.clubname}</code> and save to reload.
        </p>
        <a
          className="App-link"
          href={this.props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
 fgfdgdfgfdg
        </a>
      </header>
      )
    }
  }

  export default Header