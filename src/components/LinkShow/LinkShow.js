import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkShow = ({name, id, clicked}) => (
    <NavLink to={'/shows/' + id} onClick={clicked}>{name}</NavLink>
);

export default LinkShow;