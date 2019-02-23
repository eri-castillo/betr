import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const buttonStyle = {
    margin: '40px',
    border: '5px'
};

class GameSelector extends Component {
    render(props) {
        return (
            <span>
                <Button style={buttonStyle} size="large" variant="contained" color="primary">
                    {this.props.type}
                </Button>
                <br />

            </span>
        )
    }
}

export default GameSelector;