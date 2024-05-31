import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('white');

  useEffect(() => {
    // Show welcome message
    setPopupMessage('Welcome to the Counter App!');
    setShowPopup(true);

    // Hide popup after 3 seconds
    setTimeout(() => setShowPopup(false), 3000);
  }, []);

  useEffect(() => {
    if (count === 10 || count === 100 || count === 1000) {
      setPopupMessage(`Count reached ${count}!`);
      setShowPopup(true);

      // Hide popup after 3 seconds
      setTimeout(() => setShowPopup(false), 3000);

      // Change background color
      setBackgroundColor(count === 10 ? 'lightblue' : count === 100 ? 'lightgreen' : 'lightcoral');
    }
  }, [count]);

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    } else if (count < 100) {
      setCount(count + 10);
    } else if (count < 1000) {
      setCount(count + 100);
    }
  };

  const handleDecrement = () => {
    if (count > 1000) {
      setCount(count - 100);
    } else if (count > 100) {
      setCount(count - 100);
    } else if (count > 10) {
      setCount(count - 10);
    } else if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Container className="my-5" style={{ backgroundColor }}>
      <Row className="text-center">
        <Col>
          <h1>Count: {count}</h1>
          <Button onClick={handleIncrement}>Increase</Button>
          <Button onClick={handleDecrement} className="m-3">Decrease</Button>
        </Col>
      </Row>
      {showPopup && (
        <Row className="mt-3">
          <Col>
            <Alert variant="info">{popupMessage}</Alert>
          </Col>
        </Row>
      )}
    </Container>
  );
};

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

