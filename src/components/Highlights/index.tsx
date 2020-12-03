import React from 'react';
import { Row, Col, Card, CardGroup, Container } from 'react-bootstrap';
import './highlights.scss';
import img1 from '../../assets/img/pexels-cottonbro-4505469.jpg';
import img2 from '../../assets/img/pexels-markus-spiske-158285.jpg';
import img3 from '../../assets/img/pexels-cottonbro.jpg';
import img4 from '../../assets/img/pexels-gabb-tapic-3763949.jpg';
import HighlightCard from '../HighlightCard';
const Highlights = () => {
  return (
    <CardGroup className="mb-5">
      <HighlightCard imageSrc={img1} className="mb-0 xs border-right-0  text-white text-center " />
      <HighlightCard imageSrc={img2} className="mb-0 xs border-right-0 text-white text-center" />
      <HighlightCard imageSrc={img3} className="mb-0 xs border-right-0 text-white text-center" />
      <HighlightCard imageSrc={img4} className="mb-0 xs border-0 text-white text-center" />
    </CardGroup>
  );
};

export default Highlights;
