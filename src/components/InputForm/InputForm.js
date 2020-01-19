import React from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

const InputForm = () => {
    return (

        <Form>
            <FormGroup>
                <Label for="exampleEmail">TV Show</Label>
                <Input type="text" name="text" onChange={}  id="exampleEmail" placeholder="Enter TV show"/>
            </FormGroup>
            <Button onClick={(e) => (e.target.value)}>Submit</Button>
        </Form>

    );
};

export default InputForm;