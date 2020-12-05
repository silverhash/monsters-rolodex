import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({monsters: json}))
      .catch(error => console.log('There was an error fetching the users '));

  }

  render() {
    const  { monsters, searchField } = this.state; //destructuring
    const filteredMonsters = monsters.filter(m => m.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1 className="h1-title">Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange= {e => (
          this.setState({ searchField: e.target.value}))}
        />
        <CardList monsters={ filteredMonsters }></CardList>
      </div>
    );
  }
}

export default App;
