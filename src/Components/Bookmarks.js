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

    return values.filter(item => item && item.snippet);
}

export default class Bookmarks extends React.Component {



    state = {
        videos: [],
        show: false,
        modalData: [],
        update: false,
        currentPage: 1,
        videosPerPage: 5
    }

    showModal = e => {
        this.setState({
            show: !this.state.show,
            videos: val()
        });
    };

    handleClick(event) {

        this.setState({
            currentPage: Number(event.target.id)
        });
    }

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
        this.handleClick = this.handleClick.bind(this);
        this.setState({videos: val()})
    }


    render() {

        const { videos, currentPage, videosPerPage } = this.state;
        window.addEventListener('storage', null,this.objBook);


        // Logic for displaying current todos
        const indexOfLastVideo = currentPage * videosPerPage;
        const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
        const videoMarks = videos.slice(indexOfFirstVideo, indexOfLastVideo);

        const renderTodos = videoMarks.map((video, index) => {
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
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(videos.length / videosPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <button
                    className= 'Button'
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </button>
            );
        });



        return(
            <div style={{marginTop: "20px"} } >
                <Ping update={this.objBook}/>
                <Modal show={this.state.show} data = {this.state.modalData} onClose={this.showModal} update={this.objBook} />
                {renderTodos}
                {renderPageNumbers}
            </div>
        );
    }
}