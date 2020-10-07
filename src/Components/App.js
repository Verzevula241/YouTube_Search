import React, {Component} from 'react';
import '../App.css';
import Bookmarks from "./Bookmarks";
import {Route, NavLink} from 'react-router-dom'
import {faBookmark as faBookmarkSolid}  from "@fortawesome/free-solid-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import VideoTitle from "./VideoTitle";


class App extends Component {

  render() {
    const divStyle = {
        textAlign: 'center',
        marginBottom: '40px'
    }

    return (
      <div style={divStyle}>
          <nav className="nav">
              <ul>
                  <li>
                      <NavLink to="/search"><FontAwesomeIcon icon={faSearch}/><span style={{paddingLeft: "1em"}}>Поиск</span></NavLink>
                  </li>
                  <li>
                      <NavLink to="/video"><FontAwesomeIcon icon={faBookmarkSolid}/><span style={{paddingLeft: "1em"}}>Закладки</span></NavLink>
                  </li>
              </ul>
          </nav>
          <div >
              <Route path="/search" component={VideoTitle} />
              <Route path="/video" component={Bookmarks}  />
          </div>
      </div>
    );
  }
}
export default App;
