import React, { Component } from 'react';
import Product from '../Product/Product'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const theInventory = this.props.inventory.map((inventoryList, i) => {
            return (
                <Product key={i} product={inventoryList}/>
            )
        })

        return (
            <div>
                <p>Dashboard</p>
                {theInventory}
            </div>
        )
    }
}

export default Dashboard