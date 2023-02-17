import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        Here is a collection of my work.
      </p>
      <div>
        <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src={Armored} /> */}
          <Card.Body>
            <Card.Title>Work Day Scheduler</Card.Title>
            <Card.Text>
              Interactive Work Day Scheduler built with Javascript
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://jsimps39.github.io/work-day-schedulerjs/" target="_blank">Deployed Site</Card.Link>
            <Card.Link href="https://github.com/jsimps39/work-day-schedulerjs" target="_blank">GitHub</Card.Link>
          </Card.Body>
        </Card>
      {/* </Row> */}
      {/* <Row xs={1} md={2} lg={3} className="g-4"> */}
        <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src={Beast} /> */}
          <Card.Body>
            <Card.Title>Note Taker App</Card.Title>
            <Card.Text>
              JavaScript Application that allows a user to create and store notes.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://jsimps39.github.io/note-taker-appjs/" target="_blank">Deployed Site</Card.Link>
            <Card.Link href="https://github.com/jsimps39/note-taker-appjs" target="_blank">GitHub</Card.Link>
          </Card.Body>
        </Card>


    </div>
      
    </div >
  );
}
