import React, {Component} from 'react';
import {connect} from 'react-redux';

class Stats extends Component {

    cost() {
        let total = 0;
        this.props.shoppingBag.forEach(item => total += item.cost);
        return total;
    }

    calories() {
        let total = 0;
        this.props.shoppingBag.forEach(item => total += item.calories);
        return total;
    }

    weight() {
        let total = 0;
        this.props.shoppingBag.forEach(item => total += item.weight);
        return total;
    }

    render() {
                    
        return (
            <div className='col-md-4'>
                <h2 className='text-center'>Stats items</h2>
                <ul className='list-group'>
                    <li className='list-group-item'>Cost - ${this.cost()}</li> 
                    <li className='list-group-item'>Calories - ${this.calories()}</li>
                    <li className='list-group-item'>Weight - ${this.weight()}</li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) { 
    return {
        shoppingBag: state.shoppingBag
    }
}

export default connect(mapStateToProps, null)(Stats);