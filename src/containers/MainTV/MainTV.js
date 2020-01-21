import React, {useState, Fragment} from 'react';
import {Form, FormGroup, Label, Input, ListGroup} from 'reactstrap';
import axios from 'axios';
import LinkShow from '../../components/LinkShow/LinkShow';

const FormTV = (props) => {

    const valueInfo = null;
    const [valInput, setValInput] = useState(valueInfo);

    let showInfo = null;
    const [shows, setShows] = useState(showInfo);

    const data = async (value) => {
        if (valInput) {
            const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${value}`);

            let dataShow = [];
            response.data.forEach(movie => {
                dataShow.push({name: movie.show.name, key: movie.show.id});
            });
            setShows(dataShow);
        }
    };

    const inpValChange = (value) => {
        data(value).then();
        setValInput(value);
    };

    const deleteShow = () => {
        const showDelete = null;
        setShows(showDelete);
    };



    return (
        <Fragment>
            <Form>
                <FormGroup>
                    <Label for="text">TV Shows</Label>
                    <Input type="text" name="text" id="text" autoComplete="off" placeholder="name TV Show"
                           onChange={(event) => inpValChange(event.target.value)}/>
                </FormGroup>
            </Form>
            {shows ?
                <ListGroup>
                    {shows.map(movie => (
                        <LinkShow key={movie.key} name={movie.name} id={movie.key} clicked={deleteShow}/>
                    ))}
                </ListGroup>
                : null
            }
        </Fragment>
    );
};

export default FormTV;