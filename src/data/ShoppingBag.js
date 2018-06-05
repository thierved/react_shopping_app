import React, { Component } from 'react';

import { connect } from 'react-redux';

import { addGroceryById } from '../actions';

class ShoppingBag extends Component {
	render() {
		console.log('ShoppingBag props', this.props);
		return (
			<div className="col-md-4">
				<h2 className="text-center">ShoppingBag Items</h2>
				<ul className="list-group">
					{this.props.shoppingBag.map((item) => {
						return <li key={item.id} 
										className="list-group-item"
										onClick={()=>this.props.addGroceryById(item.id)}
										>
							<b>{item.name}</b> - <span className="label label-info">$ {item.cost}</span> - <span className="label label-warning">{item.calories} kcal</span> - <span className="label label-primary">{item.weight} mg</span>
						</li>
					})}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log(state);
	return {
		shoppingBag: state.shoppingBag
	}
}

export default connect(mapStateToProps, { addGroceryById })(ShoppingBag);