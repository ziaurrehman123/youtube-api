import React, { Component } from 'react'

export default class SearchBar extends Component {
    state={
        term:''
    }
    onInputChange =(event)=>{
        this.setState({term: event.target.value})
    }
    onFormSubmit=(event)=>{
        event.preventDefault();

        this.props.onFormSubmit(this.state.term)
    }
    render() {
        return (
            <div className="search-bar ui sagment">
               <form className="ui form" onSubmit={this.onFormSubmit}>
                   <div className="field">
                       <label>Videos Search</label>
                       <input type="text" value={this.state.term} 
                       onChange={this.onInputChange}
                       />
                   </div>

               </form>
            </div>
        )
    }
}
