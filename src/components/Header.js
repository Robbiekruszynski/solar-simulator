import React from 'react';
import SceneManager from './Model/ThreeJS/SceneManager';

class Header extends React.Component{
constructor(props) {
    super(props);
    this.state = {
      stageVisibleOnPage: false,
    }
    this.menuOpen = this.menuOpen.bind(this);
  }

  menuOpen() {
    console.log(this.state)
    this.setState(prevState => ({
      stageVisibleOnPage: !prevState.stageVisibleOnPage
    }))
    console.log(this.state)
  }

  render () {
    const sceneManager = SceneManager();
    console.log(sceneManager)
    return(
      <div className={true===this.state.stageVisibleOnPage? "styledBkrnd" : "styledBkrndHide"}>
      <div onClick={this.menuOpen} className="menuBtn">
        <div className={true===this.state.stageVisibleOnPage? "xOne" : "hamOne"}></div>
        <div className={true===this.state.stageVisibleOnPage? "hamBeef hide" : "hamBeef"}></div>
        <div className={true===this.state.stageVisibleOnPage? "xTwo" : "hamTwo"}></div>

      </div>
      <ul className={true===this.state.stageVisibleOnPage? "show" : "hide"}>
        <li><h1 onClick={this.props.earthFunction} className="styledText">Earth</h1></li>
        <li><h1 onClick={() => sceneManager.updateCamera('earth')}className="styledText">Sun</h1></li>
        <li><h1 className="styledText">Mars</h1></li>
        <li><h1 className="styledText">Neptune</h1></li>
        <li><h1 className="styledText">Jupiter</h1></li>
        <li><h1 className="styledText">Saturn</h1></li>
        <li><h1 className="styledText">Uranus</h1></li>
        <li><h1 className="styledText">Venus</h1></li>
        <li><h1 className="styledText">Mercury</h1></li>
      </ul>
      </div>
    );
  }
}

export default Header;
