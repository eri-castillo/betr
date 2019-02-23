import React, { Component } from 'react';
import GameSelector from './game-selector';

class Body extends Component {

    render() {
        return (
            <span>
                <GameSelector type='local' />
                <GameSelector type='reandom' />
                <GameSelector type='parlay' />
                <GameSelector type='odds' />
            </span>
        )
    }
}

export default Body;