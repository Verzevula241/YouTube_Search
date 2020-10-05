import React, { Component } from 'react';
import '../App.css';
import Bookmarks from "./Bookmarks";
import Videosearch from "./Videosearch";
import {Route, NavLink, Redirect} from 'react-router-dom'
import {faBookmark as faBookmarkSolid}  from "@fortawesome/free-solid-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
                      <NavLink to="/search"><FontAwesomeIcon icon={faSearch} className="linkSerch"/><span style={{paddingLeft: "1em"}}>Поиск</span></NavLink>
                  </li>
                  <li>
                      <NavLink to="/video"><FontAwesomeIcon icon={faBookmarkSolid} className="linkSerch"/><span style={{paddingLeft: "1em"}}>Закладки</span></NavLink>
                  </li>
              </ul>
          </nav>
          <div >
              <Route path="/search" component={Videosearch} />
              <Route path="/video" component={Bookmarks}  />
              <Redirect from="/" to="/search" />
          </div>
      </div>
    );
  }
}

export default App;
