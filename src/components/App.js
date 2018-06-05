import React, {Component} from 'react';

import Grocery from './Grocery';
import ShoppingBag from './ShoppingBag';
import Stats from './Stats';
import Pocket from './Pocket';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <Pocket />
                <div className='row'>                    
                    <Grocery />
                    <ShoppingBag />
                    <Stats />
                </div>
                
            </div>
        );
    } 
}

export default App;