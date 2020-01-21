import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkShow = props => (
    <NavLink to={'/shows/' + props.id} onClick={props.clicked}>{props.name}</NavLink>
);

export default LinkShow;