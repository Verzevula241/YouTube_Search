import React from "react";
import "./Modal.css";
import {faBookmark as faBookmarkSolid}  from "@fortawesome/free-solid-svg-icons";
import {faBookmark as faBookmarkRegular} from "@fortawesome/free-regular-svg-icons"
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class Modal extends React.Component {

    state = {
        bool: true
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };


    render() {

        if (!this.props.show) {
            return null;
        }

        const bookButt = () =>{
            if(localStorage.getItem(this.props.data.id.videoId)){
                return(<button className="toggleBook" onClick={()=>{localStorage.removeItem(this.props.data.id.videoId); this.setState({bool:!this.state.bool}); this.props.update()}}>
                    <FontAwesomeIcon icon={faBookmarkSolid}/> Добавлено
                </button>);
            }else{
                return(<button className="toggleBook" onClick={()=>{
                    localStorage.setItem(
                    this.props.data.id.videoId,JSON.stringify(this.props.data)
                    );
                    this.setState({bool:!this.state.bool});
                    this.props.update()} }>
                    <FontAwesomeIcon icon={faBookmarkRegular}/> Добавить
                </button>);
            }
        }


        return (
            <div className="modal" id="modal">
                <button className="toggle" onClick={this.onClose}>
                    <FontAwesomeIcon icon={faTimes} className="Close" size="3x"/>
                </button>
                <div className="content" style={{zIndex:"150"}} >
                <div className="actions">
                    <div className="iframe-container">
                        <iframe src={`https://www.youtube.com/embed/${this.props.data.id.videoId}`} allowFullScreen title='Video player'/>
                    </div>
                    <div onClick={this.update}>
                        {bookButt()}
                    </div>
                    <div className="descriptinModal" >
                        <h4 style={{textAlign: "left"}}>{this.props.data.snippet.title}</h4>
                        <p>{this.props.data.snippet.description}</p>

                    </div>
                </div>

                </div>
            </div>
        );
    }
}