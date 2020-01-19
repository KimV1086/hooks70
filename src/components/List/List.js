import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

const List = props => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={props.image} alt={props.name}/>
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle>{props.premiered}</CardSubtitle>
                    <CardText>{props.summary}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default List;