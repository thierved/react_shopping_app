import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeGroceryById} from '../actions';

class ShoppingBag extends Component {
    render() {
        console.log('shopping', this.props.shoppingBag);
        
        return (
            <div className='col-md-4'>
                <h2 className='text-center'>ShoppingBag items</h2>
                <ul className='list-group'>
                    {
                        this.props.shoppingBag.map((item, index) => {
                            return (
                                <li onClick={() => this.props.removeGroceryById(item.id)} className='list-group-item' key={index}>
                                    <b>{item.name}</b> - 
                                    <span className='label label-primary'>${item.cost}</span> - <span className='label label-info'>{item.calories} kcal</span> - <span className='label label-warning'>{item.weight} mg</span>
                                </li>
                            );
                        })
                    }
                    
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

function mapDispatchToProps() {

}

export default connect(mapStateToProps, {removeGroceryById})(ShoppingBag);