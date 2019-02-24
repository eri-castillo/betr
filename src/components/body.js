import React, { Component } from 'react';
import GameSelector from './game-selector';
import Local from './local';
class Body extends Component {

    render() {
        return (
            <span>
                {/* <GameSelector type='local' />
                <GameSelector type='reandom' />
                <GameSelector type='parlay' />
                <GameSelector type='odds' /> */}
                <Local />
            </span>
        )
    }
}

export default Body;