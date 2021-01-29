import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
    return (
        <div>
            <button>{props.Next}</button>
        </div>
    );
};

Button.propTypes = {

};

export default Button;