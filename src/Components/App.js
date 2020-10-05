import React, { Component } from 'react';
import '../App.css';
import youtube from '../apis/youtube';
import Bookmarks from "./Bookmarks";
import Videosearch from "./Videosearch";
import {Route, NavLink, Redirect} from 'react-router-dom'
import {faBookmark as faBookmarkSolid}  from "@fortawesome/free-solid-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class App extends Component {


    // state = {
    //     videos: [],
    //     show: false,
    //     modalData: [],
    // }

    // showModal = e => {
    //     this.setState({
    //         show: !this.state.show
    //     });
    //     console.log(this.state.show)
    // };


    // dataModal = props =>{
    //     this.setState({
    //         modalData: props
    //     });
    // }
    //
    //
    // handleSubmit = async (termFromSearchBar) => {
    //     const response = await youtube.get('/search', {
    //         params: {
    //             q: termFromSearchBar
    //         }
    //     })
    //     this.setState({
    //         videos: response.data.items
    //     })
    //     console.log(this.state.videos)
    // };



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
