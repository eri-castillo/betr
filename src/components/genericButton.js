import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const buttonStyle = {
    margin: '40px',
    border: '5px'
};

class GenericButton extends Component {
    render() {
        return (
            <span>
                <Button style={buttonStyle} size="large" variant="contained" color="secondary">
                    {this.props.type}
                </Button>
                <br />

            </span>
        )
    }
}

export default GenericButton;