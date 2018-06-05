import React, {Component} from 'react';

import Grocery from './Grocery';
import ShoppingBag from './ShoppingBag';
import Stats from './Stats';

class App extends Component {
    render() {
        return (
            <div>
                <Grocery />
                <ShoppingBag />
                <Stats />
            </div>
        );
    } 
}

export default App;