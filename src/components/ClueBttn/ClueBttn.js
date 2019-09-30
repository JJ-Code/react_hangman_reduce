import React, { Component } from 'react'
import "./ClueBttn.css";
import axios from "axios"

class ClueBttn extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   clue: this.props.clue
    // };
    this.performSearch = this.performSearch.bind(this);
    //this.clickedTest = this.clickedTest.bind(this);
  }

  // clickedTest(props) {
  //   console.log("clicked clicked");
  //   console.log(this.props.clue);
  //   console.log(this.state.clue);
  

  // }

  // change() {
  //   console.log("clicked clicked");
  //   console.log(this.state.clueResults);
  //   if (this.props.gameOver === true){
  //     this.setState({ clueResults: " " })
  //   } else {
  //     return this.state.clueResults;
  //   }

  //   // this.setState({ clueResults: " " })
   

  // }

  performSearch = (props = "example") => {
    //console.log(this.props)
    
    let wordSearch = this.props.word
    axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${wordSearch}?key=84b98cb2-2053-4c97-9062-34a7f5632399`).then(response => {
      //console.log(response);
      console.log(response.data[0].shortdef[0]);
      return this.props.updateClue(response.data[0].shortdef[0])
      // return this.setState({
      //   clue: response.data[0].shortdef[0]
      // });

    }).catch(err => {
      console.log('Error happened during fetching!', err);
    });

    console.log("clicked clicked BYE");
  };


  render() {
    // this.clickedTest()
    return (
      <div id="clue">
        
        <button id="get-clue" className="primary-btn" onClick={this.performSearch} type="button">Get Clue</button> <br />
        <div id="got-clue"> <h3> <span id="clue-word"> {this.props.clue }</span> </h3> </div>
      </div>
    )
  }

}

export default ClueBttn;


