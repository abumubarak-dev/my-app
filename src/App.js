import React,{ Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
class App extends Component {
  constructor(){
    super();

    this.state={
      fruit:[
      ],
      searchField:''
    };

  }

  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({ fruit:user} ))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })

  }
  render(){

      const {fruit,searchField}=this.state;
      const filterFruit=fruit.filter( fruit=>
        fruit.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

    return (
      
          <div className="App">
         
          <SearchBox
          placeholder="Search user"
          handleChange={this.handleChange}/>

          <CardList fruit={filterFruit}>

          </CardList>

           
          </div>
        );
    
  }
}

export default App;
