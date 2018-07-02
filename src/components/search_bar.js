import React, { Component } from 'React';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''}
    }
    render() {
        return (
            <div className="search-bar">
        <input 
            value = {this.state.term}
            onChange ={event => this.onInputChange(event.target.value)} />
        </div>
         );
        }
//whenever input changes do.... our event handler under

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar; 