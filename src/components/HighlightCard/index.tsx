import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './highlightcard.scss';
const HighlightCard = ({ imageSrc, className }: any) => {
  return (
    <Card className={className}>
      <Card.Img src={imageSrc} alt="Card image" className="br-none" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-end">
        <div className="d-flex flex-column align-items-center mb-4">
          <Card.Text>Lifestyle</Card.Text>
          <Card.Title>Organize Your Life with 10 simple Rule</Card.Title>
          <Button variant="outline-light">
            <Link to="/post">Read More</Link>
          </Button>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};

export default HighlightCard;
