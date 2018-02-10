import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Contact from '../Contact/Contact.js'
import './Home.css';

class Home extends Component {
  state = {
    inputValue: '',
    inputSearch: 'name'
  }
  title = 'react!'
  simplyUser = [
    {
      id: "1",
      name: "John",
      number: "111222333",
      email: "john@john.com",
      address: "London 10a",
      tags: ["tag1", "tag2", "tag3"]
    },
    {
      id: "5",
      name: "Mike",
      number: "99559955",
      email: "john2@john2.com",
      address: "London 20a",
      tags: ["tag1", "tag2", "tag3"]
    },
    {
      id: "9",
      name: "Alan",
      number: "55500000",
      email: "john3@john3.com",
      address: "London 320a",
      tags: ["tag1", "tag2", "tag3", "favourite"]
    },
    {
      id: "4",
      name: "Brajanek",
      number: "3546789",
      email: "bran@lapto.com",
      address: "Berlin 90/a",
      tags: ["tag1", "tag2", "tag3", "favourite"]
    }
  ]

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSortClick = this.handleSortClick.bind(this)
  }

  filters(arr) {
    return arr.find(tag => {
      return tag === "favourite"
    })
  }

  searchContact(name) {
    let inputState = this.state.inputValue.toLowerCase();
    name = name[this.state.inputSearch].toLowerCase();
    if(name.indexOf(inputState) >= 0) {
      return true;
    }
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleOnChange(event) {
    this.setState({
      inputSearch: event.target.value
    });
  }

  handleSortClick() {
    let arr = this.simplyUser;
    arr.sort((a,b) =>  {
      if (a.id < b.id)
        return -1;
      if (a.id > b.id)
        return 1;
      return 0;
    });
    console.log(arr);
  }

  render() {
    return (
      <section>
        <h1>Dev meeting { this.title }!</h1>
        <h2>User Contacts</h2>
        <div>
          <h5>Search name</h5>
          <div>
            Select category:
            <div>
              <button onClick={this.handleSortClick}>Sort</button>
            </div>
            <select onChange={this.handleOnChange}>
              <option value="name">Name</option>
              <option value="number">Number</option>
              <option value="email">E-mail</option>
              <option value="address">Address</option>
            </select>
          </div>
          <div>
            <input type="search" onChange={this.handleChange}></input>
          </div>
        </div>
        {this.simplyUser
          .filter(human =>
            this.filters(human.tags)
          )
          .filter(human =>
            this.searchContact(human)
          )
          .map(human =>
            <Contact key={ human.id }
                      human={ human }
                      classN="favourite"/>
          )
        }
        {this.simplyUser
          .filter(human =>
            !this.filters(human.tags)
          )
          .filter(human =>
            this.searchContact(human)
          )
          .map(human =>
            <Contact key={ human.id }
                      human={ human }/>
          )
        }
      </section>
    );
  }
}

export default Home;
