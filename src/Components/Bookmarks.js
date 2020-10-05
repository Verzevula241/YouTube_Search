import React from "react";
import "./Bookmarks.css";
import Video from "./Video";
import Modal from "./Modal";

export default class Bookmarks extends React.Component {

    state = {
        videos: [],
        show: false,
        modalData: [],
        update: false,
    }

    showModal = e => {
        const val = () => {

            var values = [],
                keys = Object.keys(localStorage),
                i = keys.length;

            while ( i-- ) {
                values.push( JSON.parse(localStorage.getItem(keys[i])));
            }

            return values;
        }

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

    objBook = e =>{
        const val = () => {

            var values = [],
                keys = Object.keys(localStorage),
                i = keys.length;

            while ( i-- ) {
                values.push( JSON.parse(localStorage.getItem(keys[i])));
            }

            return values;
        }

        this.setState({videos: val()})
    }

    dataModal = props =>{
        this.setState({
            modalData: props
        });
    }

    componentDidMount() {
        const val = () => {

            var values = [],
                keys = Object.keys(localStorage),
                i = keys.length;

            while ( i-- ) {
                values.push( JSON.parse(localStorage.getItem(keys[i])));
            }

            return values;
        }

        this.setState({videos: val()})
    }

    render() {

        return(
            <div style={{marginTop: "20px"} } >
                <Modal show={this.state.show} data = {this.state.modalData} onClose={this.showModal} update={this.upModal} />
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