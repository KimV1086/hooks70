import React, {useState} from 'react';
import Container from "reactstrap/lib/Container";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

function App () {
   const valState = '';
   const [value, setValue] = useState(valState);

  return (
    <Container>
        <Form>
            <FormGroup>
                <Label for="exampleEmail">TV Show</Label>
                <Input type="text" name="text"  id="exampleEmail" placeholder="Enter TV show"/>
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    </Container>
  );
}

export default App;
