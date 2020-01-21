import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MainTV from '../MainTV/MainTV'
import {Col, Container, Media} from "reactstrap";

const FormTV = (props) => {
    let showData = null;
    const [loadShow, setLoadShow] = useState(showData);

    let showTxt = null;
    const [showText, setShowText] = useState(showTxt);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchData = async (id) => {
        const response = await axios.get(`http://api.tvmaze.com/shows/${id}`);
        showData = response.data;
        setLoadShow(response.data);


        if (response.data.summary.replace(/<\/?[^>]+>/g, '') !== null ||
            response.data.summary.replace(/<\/?[^>]+>/g, '') !== undefined) {
            setShowText(response.data.summary.replace(/<\/?[^>]+>/g, ''));
        } else {
            setShowText(response.data.summary)
        }
    };

    useEffect(() => {
        fetchData(props.match.params.id).then();
    }, [fetchData, props.match.params.id]);

    return (
        <Container>
            <MainTV/>
            {loadShow ?
                <Media>
                    {loadShow.image ?
                        <Media src={loadShow.image.medium} alt={loadShow.name}/>
                        : null
                    }
                    <Col>
                        <Media body>
                            <Media heading>{loadShow.name}</Media>
                            <Media>{showText}</Media>
                        </Media>
                    </Col>

                </Media>
                : null
            }
        </Container>
    );
};

export default FormTV;