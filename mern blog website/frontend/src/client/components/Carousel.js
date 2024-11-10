import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // You need to install this library
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="rounded-lg shadow-lg">
      <div>
        <img src="https://cdn.pixabay.com/photo/2014/08/27/08/11/blogging-428955_1280.jpg" alt="Slide 1" />
        <p className="legend">Discover Our Latest Posts</p>
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2014/12/08/16/44/keyboard-561124_1280.jpg" alt="Slide 2" />
        <p className="legend">Explore Tech Insights</p>
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2015/12/14/18/17/light-1092899_1280.jpg" alt="Slide 3" />
        <p className="legend">Stay Updated With Trends</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
