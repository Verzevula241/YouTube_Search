import React from "react";
import Video from "./Video";
import Modal from "./Modal";
import Search from "./Search";
import youtube from "../apis/youtube";
import "./Videosearch.css"


export default class Videosearch extends React.Component {


    state = {
        videos : [],
        show: false,
        modalData: [],
        loading: false,
        update: false,
    }

    showModal = e => {
        this.setState({
            show: !this.state.show
        });
    };

    upModal = e =>{
        this.setState(
            {update: !this.state.update}
        )
    }

    handleSubmit = async (termFromSearchBar) => {
        console.log(this.state.loading)
        this.setState({loading: true})
        await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        }).then(res =>{

            console.log(this.state.loading)
            this.setState({loading: false})

            if(termFromSearchBar !== ''){
                this.setState({
                    videos: res.data.items
                })

            }else{
                this.setState({
                    videos: []
                })
            }

        })



    };

    dataModal = props =>{
        this.setState({
            modalData: props
        });
    }

    render() {
        return (
            <div style={{marginTop: "20px"}}>
                <Search handleFormSubmit={this.handleSubmit}/>
                <Modal show={this.state.show} data = {this.state.modalData} onClose={this.showModal} update={this.upModal} />
                {this.state.loading ? <div className="c-loader"/> :
                    this.state.videos.map((video, index) => {
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
                })

                }
            </div>

        );
    }

}