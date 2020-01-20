import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const LinkShow = ({name, id, clicked}) => (
    <Fragment>
        <NavLink to={'/shows/' + id} onClick={clicked}>{name}</NavLink>
        <br></br>
    </Fragment>
);

export default LinkShow;