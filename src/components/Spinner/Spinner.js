import React from 'react';

import classes from './Spinner.css';

const spinner = () => (
    <div 
    style={{ marginRight: '285px' ,marginTop: '30px'}} 
    className={classes.Loader}>Loading...</div>
);

export default spinner;