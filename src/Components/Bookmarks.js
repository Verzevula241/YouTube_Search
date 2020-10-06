import React from "react";
import "./Bookmarks.css";
import Video from "./Video";
import Modal from "./Modal";
import Ping from "./Ping";

const val = () => {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( JSON.parse(localStorage.getItem(keys[i])));
    }

    return values.filter(item => item && item.id);
}

export default class Bookmarks extends React.Component {

    state = {
        videos: [],
        show: false,
        modalData: [],
        update: false,
    }

    showModal = e => {
        this.setState({
            show: !this.state.show,
            videos: val()
        });
    };
    upModal = e =>{
        this.setState(
            {update: !this.state.update}
        )
    }

    objBook = () =>{

        this.setState({videos: val()})
    }

    dataModal = props =>{
        this.setState({
            modalData: props
        });
    }

    componentDidMount() {

        this.setState({videos: val()})
    }


    render() {

        window.addEventListener('storage', null,this.objBook);

        return(
            <div style={{marginTop: "20px"} } >
                <Ping update={this.objBook}/>
                <Modal show={this.state.show} data = {this.state.modalData} onClose={this.showModal} update={this.objBook} />
                <div>
                { this.state.videos.map((video, index) => {
                    return (
                        <div key={index} onClick={()=>{this.setState({
                            show: !this.state.show
                        });this.dataModal(video)}}>
                            <Video
                                key={index}
                                data = {video}
                            />
                            </div>
                    )
                }) }
                </div>
            </div>
        );
    }
}