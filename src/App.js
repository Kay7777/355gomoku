import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stones: [
        [" ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎"],
        [" ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎"],
        [" ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎"],
        [" ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎"],
        [" ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎"],
        [" ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎"],
        [" ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎"],
        [" ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎"],
        [" ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎"],
        [" ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎"],
        [" ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎"],
        [" ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎"],
        [" ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎"],
        [" ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎"],
        [" ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎", " ‏‏‎"]
      ],
      player: "X"
    }
  }

  placeStone = (e) => {
    // get the stone location
    const place = e.target.value.split(",")
    const row = place[0];
    const col = place[1];
    console.log(this.state.stones[row][col]);
    // check if the move is valid
    const valide = this.checkValidation(row, col);
    if (!valide) {
      return;
    }
    // place the stone in the right place
    const { stones, player } = this.state;
    stones[row][col] = player;
    this.setState({ stones });
    // check if any player win
    this.checkWinner();
    // check if game ties
    this.checkTie();
    // change player
    if (player === "X") {
      this.setState({ player: "O" });
    } else {
      this.setState({ player: "X" });
    }
  }

  checkValidation = (row, col) => {
    return this.state.stones[row][col] == " ‏‏‎";
  }

  checkWinner = () => {

  }

  checkTie = () => {


  }
  render() {
    const { stones, player } = this.state;
    return (
      <div>
        <h1>355 Gomoku</h1>
        <h2>Now "{player}" is playing</h2>
        <h4>(please use the web window with at least 480 x 640 px size to play)</h4>
        <div className="col">
          <div className="row">
            <button value="0,0" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[0][0]}</button>
            <button value="0,1" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[0][1]}</button>
            <button value="0,2" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[0][2]}</button>
            <button value="0,3" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[0][3]}</button>
            <button value="0,4" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[0][4]}</button>
            <button value="0,5" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[0][5]}</button>
            <button value="0,6" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[0][6]}</button>
            <button value="0,7" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[0][7]}</button>
            <button value="0,8" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[0][8]}</button>
            <button value="0,9" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[0][9]}</button>
            <button value="0,10" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[0][10]}</button>
            <button value="0,11" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[0][11]}</button>
            <button value="0,12" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[0][12]}</button>
            <button value="0,13" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[0][13]}</button>
            <button value="0,14" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[0][14]}</button>
          </div>
          <div className="row">
            <button value="1,1" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[1][1]}</button>
            <button value="1,0" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[1][0]}</button>
            <button value="1,2" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[1][2]}</button>
            <button value="1,3" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[1][3]}</button>
            <button value="1,4" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[1][4]}</button>
            <button value="1,5" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[1][5]}</button>
            <button value="1,6" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[1][6]}</button>
            <button value="1,7" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[1][7]}</button>
            <button value="1,8" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[1][8]}</button>
            <button value="1,9" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[1][9]}</button>
            <button value="1,10" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[1][10]}</button>
            <button value="1,11" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[1][11]}</button>
            <button value="1,12" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[1][12]}</button>
            <button value="1,13" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[1][13]}</button>
            <button value="1,14" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[1][14]}</button>
          </div>
          <div className="row">
            <button value="2,0" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[2][0]}</button>
            <button value="2,1" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[2][1]}</button>
            <button value="2,2" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[2][2]}</button>
            <button value="2,3" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[2][3]}</button>
            <button value="2,4" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[2][4]}</button>
            <button value="2,5" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[2][5]}</button>
            <button value="2,6" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[2][6]}</button>
            <button value="2,7" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[2][7]}</button>
            <button value="2,8" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[2][8]}</button>
            <button value="2,9" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[2][9]}</button>
            <button value="2,10" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[2][10]}</button>
            <button value="2,11" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[2][11]}</button>
            <button value="2,12" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[2][12]}</button>
            <button value="2,13" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[2][13]}</button>
            <button value="2,14" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[2][14]}</button>
          </div>
          <div className="row">
            <button value="3,0" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[3][0]}</button>
            <button value="3,1" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[3][1]}</button>
            <button value="3,2" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[3][2]}</button>
            <button value="3,3" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[3][3]}</button>
            <button value="3,4" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[3][4]}</button>
            <button value="3,5" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[3][5]}</button>
            <button value="3,6" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[3][6]}</button>
            <button value="3,7" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[3][7]}</button>
            <button value="3,8" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[3][8]}</button>
            <button value="3,9" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[3][9]}</button>
            <button value="3,10" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[3][10]}</button>
            <button value="3,11" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[3][11]}</button>
            <button value="3,12" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[3][12]}</button>
            <button value="3,13" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[3][13]}</button>
            <button value="3,14" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[3][14]}</button>
          </div>
          <div className="row">
            <button value="4,0" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[4][0]}</button>
            <button value="4,1" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[4][1]}</button>
            <button value="4,2" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[4][2]}</button>
            <button value="4,3" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[4][3]}</button>
            <button value="4,4" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[4][4]}</button>
            <button value="4,5" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[4][5]}</button>
            <button value="4,6" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[4][6]}</button>
            <button value="4,7" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[4][7]}</button>
            <button value="4,8" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[4][8]}</button>
            <button value="4,9" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[4][9]}</button>
            <button value="4,10" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[4][10]}</button>
            <button value="4,11" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[4][11]}</button>
            <button value="4,12" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[4][12]}</button>
            <button value="4,13" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[4][13]}</button>
            <button value="4,14" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[4][14]}</button>
          </div>
          <div className="row">
            <button value="5,0" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[5][0]}</button>
            <button value="5,1" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[5][1]}</button>
            <button value="5,2" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[5][2]}</button>
            <button value="5,3" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[5][3]}</button>
            <button value="5,4" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[5][4]}</button>
            <button value="5,5" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[5][5]}</button>
            <button value="5,6" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[5][6]}</button>
            <button value="5,7" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[5][7]}</button>
            <button value="5,8" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[5][8]}</button>
            <button value="5,9" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[5][9]}</button>
            <button value="5,10" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[5][10]}</button>
            <button value="5,11" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[5][11]}</button>
            <button value="5,12" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[5][12]}</button>
            <button value="5,13" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[5][13]}</button>
            <button value="5,14" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[5][14]}</button>
          </div>
          <div className="row">
            <button value="6,0" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[6][0]}</button>
            <button value="6,1" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[6][1]}</button>
            <button value="6,2" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[6][2]}</button>
            <button value="6,3" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[6][3]}</button>
            <button value="6,4" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[6][4]}</button>
            <button value="6,5" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[6][5]}</button>
            <button value="6,6" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[6][6]}</button>
            <button value="6,7" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[6][7]}</button>
            <button value="6,8" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[6][8]}</button>
            <button value="6,9" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[6][9]}</button>
            <button value="6,10" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[6][10]}</button>
            <button value="6,11" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[6][11]}</button>
            <button value="6,12" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[6][12]}</button>
            <button value="6,13" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[6][13]}</button>
            <button value="6,14" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[6][14]}</button>
          </div>
          <div className="row">
            <button value="7,0" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[7][0]}</button>
            <button value="7,1" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[7][1]}</button>
            <button value="7,2" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[7][2]}</button>
            <button value="7,3" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[7][3]}</button>
            <button value="7,4" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[7][4]}</button>
            <button value="7,5" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[7][5]}</button>
            <button value="7,6" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[7][6]}</button>
            <button value="7,7" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[7][7]}</button>
            <button value="7,8" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[7][8]}</button>
            <button value="7,9" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[7][9]}</button>
            <button value="7,10" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[7][10]}</button>
            <button value="7,11" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[7][11]}</button>
            <button value="7,12" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[7][12]}</button>
            <button value="7,13" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[7][13]}</button>
            <button value="7,14" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[7][14]}</button>
          </div>
          <div className="row">
            <button value="8,0" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[8][0]}</button>
            <button value="8,1" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[8][1]}</button>
            <button value="8,2" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[8][2]}</button>
            <button value="8,3" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[8][3]}</button>
            <button value="8,4" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[8][4]}</button>
            <button value="8,5" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[8][5]}</button>
            <button value="8,6" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[8][6]}</button>
            <button value="8,7" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[8][7]}</button>
            <button value="8,8" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[8][8]}</button>
            <button value="8,9" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[8][9]}</button>
            <button value="8,10" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[8][10]}</button>
            <button value="8,11" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[8][11]}</button>
            <button value="8,12" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[8][12]}</button>
            <button value="8,13" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[8][13]}</button>
            <button value="8,14" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[8][14]}</button>
          </div>
          <div className="row">
            <button value="9,0" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[9][0]}</button>
            <button value="9,1" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[9][1]}</button>
            <button value="9,2" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[9][2]}</button>
            <button value="9,3" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[9][3]}</button>
            <button value="9,4" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[9][4]}</button>
            <button value="9,5" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[9][5]}</button>
            <button value="9,6" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[9][6]}</button>
            <button value="9,7" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[9][7]}</button>
            <button value="9,8" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[9][8]}</button>
            <button value="9,9" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[9][9]}</button>
            <button value="9,10" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[9][10]}</button>
            <button value="9,11" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[9][11]}</button>
            <button value="9,12" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[9][12]}</button>
            <button value="9,13" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[9][13]}</button>
            <button value="9,14" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[9][14]}</button>
          </div>
          <div className="row">
            <button value="10,0" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[10][0]}</button>
            <button value="10,1" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[10][1]}</button>
            <button value="10,2" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[10][2]}</button>
            <button value="10,3" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[10][3]}</button>
            <button value="10,4" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[10][4]}</button>
            <button value="10,5" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[10][5]}</button>
            <button value="10,6" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[10][6]}</button>
            <button value="10,7" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[10][7]}</button>
            <button value="10,8" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[10][8]}</button>
            <button value="10,9" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[10][9]}</button>
            <button value="10,10" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[10][10]}</button>
            <button value="10,11" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[10][11]}</button>
            <button value="10,12" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[10][12]}</button>
            <button value="10,13" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[10][13]}</button>
            <button value="10,14" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[10][14]}</button>
          </div>
          <div className="row">
            <button value="11,0" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[11][0]}</button>
            <button value="11,1" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[11][1]}</button>
            <button value="11,2" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[11][2]}</button>
            <button value="11,3" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[11][3]}</button>
            <button value="11,4" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[11][4]}</button>
            <button value="11,5" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[11][5]}</button>
            <button value="11,6" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[11][6]}</button>
            <button value="11,7" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[11][7]}</button>
            <button value="11,8" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[11][8]}</button>
            <button value="11,9" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[11][9]}</button>
            <button value="11,10" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[11][10]}</button>
            <button value="11,11" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[11][11]}</button>
            <button value="11,12" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[11][12]}</button>
            <button value="11,13" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[11][13]}</button>
            <button value="11,14" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[11][14]}</button>
          </div>
          <div className="row">
            <button value="12,0" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[12][0]}</button>
            <button value="12,1" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[12][1]}</button>
            <button value="12,2" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[12][2]}</button>
            <button value="12,3" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[12][3]}</button>
            <button value="12,4" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[12][4]}</button>
            <button value="12,5" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[12][5]}</button>
            <button value="12,6" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[12][6]}</button>
            <button value="12,7" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[12][7]}</button>
            <button value="12,8" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[12][8]}</button>
            <button value="12,9" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[12][9]}</button>
            <button value="12,10" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[12][10]}</button>
            <button value="12,11" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[12][11]}</button>
            <button value="12,12" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[12][12]}</button>
            <button value="12,13" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[12][13]}</button>
            <button value="12,14" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[12][14]}</button>
          </div>
          <div className="row">
            <button value="13,0" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[13][0]}</button>
            <button value="13,1" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[13][1]}</button>
            <button value="13,2" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[13][2]}</button>
            <button value="13,3" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[13][3]}</button>
            <button value="13,4" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[13][4]}</button>
            <button value="13,5" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[13][5]}</button>
            <button value="13,6" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[13][6]}</button>
            <button value="13,7" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[13][7]}</button>
            <button value="13,8" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[13][8]}</button>
            <button value="13,9" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[13][9]}</button>
            <button value="13,10" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[13][10]}</button>
            <button value="13,11" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[13][11]}</button>
            <button value="13,12" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[13][12]}</button>
            <button value="13,13" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[13][13]}</button>
            <button value="13,14" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[13][14]}</button>
          </div>
          <div className="row">
            <button value="14,0" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[14][0]}</button>
            <button value="14,1" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[14][1]}</button>
            <button value="14,2" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[14][2]}</button>
            <button value="14,3" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[14][3]}</button>
            <button value="14,4" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[14][4]}</button>
            <button value="14,5" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[14][5]}</button>
            <button value="14,6" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[14][6]}</button>
            <button value="14,7" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[14][7]}</button>
            <button value="14,8" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[14][8]}</button>
            <button value="14,9" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[14][9]}</button>
            <button value="14,10" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[14][10]}</button>
            <button value="14,11" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[14][11]}</button>
            <button value="14,12" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[14][12]}</button>
            <button value="14,13" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[14][13]}</button>
            <button value="14,14" style={{ width: 30, height: 30 }} onClick={this.placeStone}>{stones[14][14]}</button>
          </div>
        </div>
      </div>
    )
  }
}



export default App;
