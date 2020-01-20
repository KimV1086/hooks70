import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TVShowInput from '../../containers/TvShow/TvShow';
import {Container} from "reactstrap";

const ShowMovie = (props) => {
    let movieInfo = null;
    const [movieShow, setMovieShow] = useState(movieInfo);

    let movieText = null;
    const [movieDescription, setMovieDescription] = useState(movieText);

    const fetchData = async (id) => {
        const response = await axios.get(`http://api.tvmaze.com/shows/${id}`);
        movieInfo = response.data;
        setMovieShow(response.data);

        if (response.data.summary === null) {
            setMovieDescription('Not description');
        } else if (response.data.summary.replace(/<\/?[^>]+>/g, '') !== null || response.data.summary.replace(/<\/?[^>]+>/g, '') !== undefined) {
            setMovieDescription(response.data.summary.replace(/<\/?[^>]+>/g, ''));
        } else if (response.data.summary) {
            setMovieDescription(response.data.summary);
        }
    };

    useEffect(() => {
        fetchData(props.match.params.id).then();
    }, [props.match.params.id]);

    return (
        <Container>
            <TVShowInput/>
            {movieShow ?
                <div>
                    {movieShow.image !== null ?
                        <img src={movieShow.image.medium} alt="info about the movie"
                             style={{float: 'left', paddingRight: '15px'}}/>
                        : <p>Image not found</p>
                    }
                    <p style={{fontWeight: 'bold'}}>{movieShow.name}</p>
                    <p>{movieDescription}</p>
                </div>
                : null
            }
        </Container>
    );
};

export default ShowMovie;