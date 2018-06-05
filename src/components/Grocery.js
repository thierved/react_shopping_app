import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addGroceryById} from '../actions';

class Grocery extends Component {
    render() {
        return (
            <div className='col-md-4'>
                <h2 className='text-center'>Grocery items</h2>
                <ul className='list-group'>
                    {
                        this.props.grocery.map((item, index) => {
                            return (
                                <li onClick={() => this.props.addGroceryById(item.id)} className='list-group-item' key={index}>
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
        grocery: state.grocery
    }
}

function mapDispatchToProps() {

}

export default connect(mapStateToProps, {addGroceryById})(Grocery);