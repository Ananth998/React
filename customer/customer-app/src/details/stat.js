import React from 'react';
import './cust.css';
import Form from './custform';



import Table from './table';
class StatData extends React.Component {
    state={
        characters:[],
    }
    removeCharacter = (index) => {
      const {characters} = this.state
    /*filter does not mutate but rather creates a new array,
     and is a preferred method for modifying arrays in JavaScript. */
      this.setState({
        characters: characters.filter((character, i) => {
          return i !== index
        }),
      })
    }
    handleSubmit = (character) => {
      this.setState({characters: [...this.state.characters, character]})
    }
  render() {
    const {characters} =this.state
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
          <Form handleSubmit={this.handleSubmit}/>
      </div>
      )
  }
}

export default StatData;
