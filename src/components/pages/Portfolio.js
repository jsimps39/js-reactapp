import React from 'react';
import { CardImg } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const noteTakerPicture = new URL("../images/noteTaker.png", import.meta.url)
const workDay = new URL("../images/workDay.png", import.meta.url)
const Centaur = new URL("../images/Centaur.png", import.meta.url)
const comingSoon = new URL("../images/comingSoon.png", import.meta.url)

export default function Portfolio() {
  return (
    <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
      <h1>Portfolio</h1>
      <p>
        Here is a collection of my work.
      </p>
     
      <div className="card-grid-container">
      <Container>
        <Row>
          <Col> <Card style={{ width: '25rem' }}>
          <Card.Body>
            <Card.Title>Work Day Scheduler</Card.Title>
            <CardImg src={workDay} />
            <Card.Text>
              Interactive Work Day Scheduler built with Javascript
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://jsimps39.github.io/work-day-schedulerjs/" target="_blank">Deployed Site</Card.Link>
            <Card.Link href="https://github.com/jsimps39/work-day-schedulerjs" target="_blank">GitHub</Card.Link>
          </Card.Body>
        </Card></Col>

          <Col><Card style={{ width: '25rem' }}>
          <Card.Body>
            <Card.Title>Note Taker App</Card.Title>
            <CardImg src={noteTakerPicture} />
            <Card.Text>
              JavaScript Application that allows a user to create and store notes.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://note-taker-appjs.herokuapp.com/" target="_blank">Deployed Site</Card.Link>
            <Card.Link href="https://github.com/jsimps39/note-taker-appjs" target="_blank">GitHub</Card.Link>
          </Card.Body>
        </Card></Col>

        </Row>

        <Row>

          <Col><Card style={{ width: '25rem' }}>
          <Card.Body>
            <Card.Title>Mern Investment App</Card.Title>
            <CardImg src={Centaur} />
            <Card.Text>
              JavaScript Application that allows a user to create and store notes.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://mysterious-gorge-28306.herokuapp.com" target="_blank">Deployed Site</Card.Link>
            <Card.Link href="https://github.com/jsimps39/mern-investment-app" target="_blank">GitHub</Card.Link>
          </Card.Body>
        </Card></Col>

          <Col><Card style={{ width: '25rem' }}>
          <Card.Body>
            <Card.Title>Coming Soon!</Card.Title>
            <CardImg src={comingSoon} />
            <Card.Text>
              JavaScript Application that allows a user to create and store notes.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://note-taker-appjs.herokuapp.com/" target="_blank">Deployed Site</Card.Link>
            <Card.Link href="https://github.com/jsimps39/note-taker-appjs" target="_blank">GitHub</Card.Link>
          </Card.Body>
        </Card></Col>
        </Row>
      </Container>
       
    </div>
      
    </div >
  );
}
