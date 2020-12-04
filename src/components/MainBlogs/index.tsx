import React from 'react';
import { Card, CardColumns, Container } from 'react-bootstrap';
/*Components */
import BlogCard from '../BlogCard';
/**Images */
import Food1 from '../../assets/img/food/pexels-daria-shevtsova-704569.jpg';
import Food2 from '../../assets/img/food/pexels-pixabay-315755.jpg';
import Food3 from '../../assets/img/food/pexels-pixabay-357573 (1).jpg';
import Food4 from '../../assets/img/food/pexels-pixabay-357573.jpg';
import Food5 from '../../assets/img/food/pexels-snapwire-286283.jpg';
import Food6 from '../../assets/img/food/food6.jpg';
import Food7 from '../../assets/img/food/food7.jpg';
import Food8 from '../../assets/img/food/food8.jpg';
import Food9 from '../../assets/img/food/food9.jpg';
import Food10 from '../../assets/img/food/food10.jpg';
import Food11 from '../../assets/img/food/food11.jpg';
import Food12 from '../../assets/img/food/food12.jpg';
import Food13 from '../../assets/img/food/food13.jpg';
import { Row, Col } from 'react-bootstrap';
// import ImageModal from '../ImageModal';
const MainBlogs = () => {
  return (
    <Row className="mx-1 my-5">
      <Col sm={0} md={2}></Col>
      <Col sm={12} md={8}>
        <CardColumns>
          <BlogCard imageSrc={Food1} />
          <BlogCard imageSrc={Food2} />
          <BlogCard imageSrc={Food3} />
          <BlogCard imageSrc={Food4} />
          <BlogCard imageSrc={Food5} />
          <BlogCard imageSrc={Food6} />
          <BlogCard imageSrc={Food7} />
          <BlogCard imageSrc={Food8} />
          <BlogCard imageSrc={Food9} />
          <BlogCard imageSrc={Food10} />
          <BlogCard imageSrc={Food11} />
          <BlogCard imageSrc={Food12} />
          <BlogCard imageSrc={Food13} />
        </CardColumns>
      </Col>
      <Col sm={0} md={2}></Col>
    </Row>
  );
};
export default MainBlogs;
