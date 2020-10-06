import React from 'react';
import "./Video.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark as faBookmarkSolid}  from "@fortawesome/free-solid-svg-icons";
import {faBookmark as faBookmarkRegular} from "@fortawesome/free-regular-svg-icons"


export default class Video extends React.Component {


        render(){
            console.log("sdf")
            const fl = id =>{
                if(!localStorage.getItem(id)){
                    return <FontAwesomeIcon icon={faBookmarkRegular} size="3x"/>
                }
                return <FontAwesomeIcon icon={faBookmarkSolid} size="3x" style={{color: "#484848"}}/>
            }

            if (!this.props.data) {
            return <div>Loading ...</div>;
                }
            let desc = this.props.data.snippet.publishedAt
            desc = desc.slice(0,desc.indexOf('T'))
            return (
                <div className="container" >
                    <div className="frame">
                        <img src={this.props.data.snippet.thumbnails.medium.url} alt=""/>
                    </div>
                    <div className="description">
                        <h4 >{this.props.data.snippet.title}</h4>
                        <p>Upload time {desc}</p>
                    </div>
                    <div className="bookmark">
                        {fl(this.props.data.id.videoId)}
                    </div>

                </div>

            )
        }
}