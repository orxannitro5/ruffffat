import "./App.css";
import React,{Component} from "react";
import Header from "./first-block";
import ReadyBlock from "./second-block"
export default class App extends Component{
  render(){
    return(
      <>
      <Header/>
      <ReadyBlock />
      </>
    )
  }
}