import React, { useState } from 'react';
import { Card, Row, Col, Button, Collapse } from 'react-bootstrap';

const members = [
  { name: 'Jan Kowalski', title: 'Przewodniczący', description: 'Odpowiada za koordynację działań koła.' },
  { name: 'Anna Nowak', title: 'Zastępca', description: 'Wspiera przewodniczącego i nadzoruje projekty.' },
  { name: 'Piotr Wiśniewski', title: 'Sekretarz', description: 'Zajmuje się dokumentacją i komunikacją.' },
  { name: 'Maria Zielińska', title: 'Skarbnik', description: 'Odpowiada za budżet i finanse koła.' }
];

function BoardMembers() {
  const [open, setOpen] = useState(Array(members.length).fill(false));

  const toggle = (index) => {
    const newOpen = [...open];
    newOpen[index] = !newOpen[index];
    setOpen(newOpen);
  };

  return (
    <div className='p-0 m-0'>
      <h3 className="text-primary mb-3">Zarząd Koła</h3>
      <Row className='m-0'>
        {members.map((member, index) => (
          <Col md={6} className="mb-4" key={index}>
            <Card bg="dark" text="white" className="border-primary">
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-info">{member.title}</Card.Subtitle>
                <Button
                  variant="outline-primary"
                  onClick={() => toggle(index)}
                  aria-controls={`collapse-text-${index}`}
                  aria-expanded={open[index]}
                >
                  {open[index] ? 'Ukryj opis' : 'Pokaż opis'}
                </Button>
                <Collapse in={open[index]}>
                  <div id={`collapse-text-${index}`} className="mt-2">
                    {member.description}
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BoardMembers;