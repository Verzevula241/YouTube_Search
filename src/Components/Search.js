import React from 'react';
import "./Search.css"

class Search extends React.Component {
    state = {
        term: ''
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
            this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="searchCon">
                <form onSubmit={this.handleSubmit} >
                    <div id='field'>
                        <span className="icon"><i className="fa fa-search"/></span>
                        <input onChange={this.handleChange} id="search" type="text"  placeholder="Поиск..."/>
                    </div>
                </form>
            </div>
        )
    }
}
export default Search;