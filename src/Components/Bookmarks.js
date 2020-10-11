import React from "react";
import "./Bookmarks.css";
import Video from "./Video";
import Modal from "./Modal";
import Ping from "./Ping";
import {connect} from "react-redux";
import {videoGrab} from "../Actions/Book";
import {setModalData, setShow} from "../Actions/Grab";

const val = () => {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( JSON.parse(localStorage.getItem(keys[i])));
    }

    return values.filter(item => item && item.snippet);
}

class Bookmarks extends React.Component {



    state = {
        currentPage: 1,
        videosPerPage: 5
    }

    handleClick(event) {

        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    objBook = () =>{
        this.props.setBookData(val())
    }

    componentDidMount() {
        this.handleClick = this.handleClick.bind(this);
        this.props.setBookData(val())
    }


    render() {

        const { currentPage, videosPerPage } = this.state;
        window.addEventListener('storage', null,this.objBook);


        const indexOfLastVideo = currentPage * videosPerPage;
        const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
        const videoMarks = this.props.videos.slice(indexOfFirstVideo, indexOfLastVideo);

        const renderTodos = videoMarks.map((video, index) => {
            return (
                        <div key={index} onClick={()=>{this.props.setShow();this.props.setModalData(video)}}>
                            <Video
                                key={index}
                                data = {video}
                            />
                        </div>
        )
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.videos.length / videosPerPage); i++) {
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

        window.removeEventListener('storage', null,this.objBook);

        return(
            <div style={{marginTop: "20px"} } >
                <Ping update={this.objBook}/>
                <Modal show={this.props.showMod} data = {this.props.dataModal} onClose={this.props.setShow} update={this.objBook} />
                {renderTodos}
                {renderPageNumbers}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        videos: state.bookReducer.videos,
        dataModal: state.videoGrad.dataModal,
        showMod: state.videoGrad.showMod
    }
}
function mapDispatchToProps(dispatch){
    return{
        setBookData: data=>{dispatch(videoGrab(data))},
        setModalData: data=>{dispatch(setModalData(data))},
        setShow: ()=>{dispatch(setShow())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bookmarks)