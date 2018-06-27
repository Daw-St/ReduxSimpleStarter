import React, { Component } from 'React';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''}
    }
    render() {
        return (
            <div>
        <input 
        value = {this.state.term}
        onChange={event => this.setState({ term: event.target.value})} />
        </div>
         );
        }
//whenever input changes do.... our event handler under

}

export default SearchBar;