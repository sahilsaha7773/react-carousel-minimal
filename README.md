# React Carousel Minimal
[![Build Status](https://travis-ci.com/sahilsaha7773/react-carousel-minimal.svg?branch=master)](https://travis-ci.com/sahilsaha7773/react-carousel-minimal)

Easy to use, responsive and customizable carousel component for React Projects.

## Installation
`npm i react-carousel-minimal`

## Features
  - Responsive
  - Customizable
  - Infinite loop
  - Autoplay with custom duration
  - Supports text caption
  - Pause autoplay on hold
  - Slide number indicators

## Usage

```js
import './App.css';
import { Carousel } from 'react-carousel-minimal';

function App() {
  const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: "Image 1"
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Image 2"
    },
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Image 3"
    }
  ];

  const captionStyle = {
    fontSize: '1.5em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div>
        <Carousel
          data={data}
          time={2000}
          width="600px"
          height="400px"
          captionStyle={captionStyle}
          radius="10px"
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          style={{
            width: "fit-content",
            margin: "40px auto"
          }}
          automatic={true}
          dots={true}
        />
      </div>
    </div>
  );
}

export default App;

```
<div align="center">
  <img src="https://user-images.githubusercontent.com/35343652/128496593-b58f2fbf-d0c9-4dfe-b821-6c45810a46d0.png"/>
</div>



## Props

|     Name       |           Value            |    Description |
|:--------------:|:--------------------------:|:---------------|
|   data         |           array            | Array of carousel items, <br/> containg JSON elements of the form <br/>{<br/>  image: IMAGE_PATH,<br/> caption: TEXT_CAPTION<br/> }|
|   automatic    |           boolean          | Enable auto play |
|   time         |           number           | Interval in milliseconds <br/> after which it autmatically goes to <br/> the next slide if `automatic` is `true`,<br/> defaults to `2000`|
| width          |           string           | Width of the Carousel, eg: `600px` |
| height          |           string           | Width of the Carousel, eg: `400px` |
| slideNumber    |       boolean              | Enable slide number indicators    |
| captionStyle   |       JSON                  | React style object for the captions |
| radius         |      string                | Border radius of the slides, eg: `10px` |
| slideNumberStyle |    JSON                 | React style object for slide number indicators |
| captionPosition |     string               | Position of the text captions, available options:<br/> `top, center, bottom`|
| dots            | boolean                  | Enable slide indicator dots |
