import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      pictures: [
        "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
        "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJRotGKB72KC5UuLqeh6Ca04QP5gkxdDwuBA&usqp=CAU",
        "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
        "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJRotGKB72KC5UuLqeh6Ca04QP5gkxdDwuBA&usqp=CAU",
        "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
        "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJRotGKB72KC5UuLqeh6Ca04QP5gkxdDwuBA&usqp=CAU",
      ],
      index: 0,
    };
  }
  handleNext = () => {
    console.log(this.state.index, this.state.pictures.length);
    if (this.state.index < this.state.pictures.length - 1) {
      this.setState({
        index: this.state.index + 1,
      });
    } else {
     this.setState({index:0})
    }
  };
  handlePrevious = () => {
    if (this.state.index > 0) {
      this.setState({
        index: this.state.index - 1,
      });
    } else {
      alert("Min");
    }
  };
handlePlay=()=>{

const interval = setInterval(() => {
    if (this.state.index < this.state.pictures.length - 1) {
        this.setState({
          index: this.state.index + 1,
        });
      } else {
       this.setState({index:0})
       clearInterval(interval)
      }
}, 1000);
}
  

  render() {
      console.log("Boolean",this.state.index !== 0,"Boolean2",this.state.index !== this.state.pictures.length -1)
    return (
      <div>
        {this.state.index !== 0 && <button onClick={this.handlePrevious}>Previous</button>}
        <img style={{width:this.state.index * 150}} src={this.state.pictures[this.state.index]} />
      { this.state.index !== this.state.pictures.length -1 &&  <button onClick={this.handleNext}>Next</button>}
      <button onClick={this.handlePlay}>Play</button>
      </div>
    );
  }
}
