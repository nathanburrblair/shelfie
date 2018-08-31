import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

class App extends Component {

constructor () {
  super ()

  this.state = {
    imageUrl: '',
    productName: '',
    price: '',
    inventoryList: [
      {
      name: "Nathan",
      price: 15.99,
      image: 'http://assets.blabbermouth.net/media/ozzyosbournemetalcasinoad_638.jpg'
    }, 
    {
      name: "Jason",
      price: 10.99,
      image: 'http://assets.blabbermouth.net/media/ozzyosbournemetalcasinoad_638.jpg'
    }, 
    {
      name: "Bert", 
      price: 9.99,
      image: 'http://assets.blabbermouth.net/media/ozzyosbournemetalcasinoad_638.jpg'
    }
    ]
  }

  this.handleImageUrl = this.handleImageUrl.bind(this)
  this.handleProductName = this.handleProductName.bind(this)
  this.handlePrice = this.handlePrice.bind(this)
  this.handleCancel = this.handleCancel.bind(this)

}

handleImageUrl = (e) => {
  this.setState({
    imageUrl: e.target.value
  })
}

handleProductName = (e) => {
 this.setState({
   productName: e.target.value
 })
}

handlePrice = (e) => {
  this.setState({
  price: e.target.value
  })
}

handleAddToInventory () {

}

handleCancel () {
  this.setState({
    imageUrl: '',
    productName: '',
    price: ''

  })
}

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div>
          <h2>Image URL:</h2>
          <input onChange={this.handleImageUrl} type="text" label="Image URL"/>
        </div>
        <div>
          <h2>Product Name:</h2>
          <input onChange={this.handleProductName} type="text"/>
        </div>
        <div>
          <h2>Price:</h2>
          <input onChange={this.handlePrice} type="text"/>
        </div>
          <button onClick={this.handleCancel}>Cancel</button>
        <button onClick={this.handleAddToInventory}>Add to Inventory</button>
        <Dashboard inventory={this.state.inventoryList} />
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
