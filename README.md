# React Carousel Minimal
<p>
 <a href="https://www.travis-ci.com/sahilsaha7773/react-carousel-minimal"><img src="https://travis-ci.com/sahilsaha7773/react-carousel-minimal.svg?branch=master"/></a>
  <a href="https://badge.fury.io/js/react-carousel-minimal"><img src="https://badge.fury.io/js/react-carousel-minimal.svg" alt="npm version" /></a>
</p>
Easy to use, responsive and customizable carousel component for React Projects.

## Installation
`npm i react-carousel-minimal`

## Features
  - Responsive
  - Customizable
  - Infinite loop
  - Autoplay with custom duration
  - Supports text caption
  - Pause autoplay on hold with pause icon and customizations
  - Slide number indicators
  - Swipe to go to next slide on touch devices
  - Custom slide background color

## Usage

```js
import { Carousel } from 'react-carousel-minimal';

function App() {
  const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland"
    },
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling"
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
      <div style={{ textAlign: "center" }}>
        <h2>React Carousel Minimal</h2>
        <p>Easy to use, responsive and customizable carousel component for React Projects.</p>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="650px"
            height="400px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              textAlign: "center",
              maxWidth: "600px",
              maxHeight: "400px",
              margin: "40px auto",
            }}
          />
        </div>
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
| pauseIconColor  | string                   | Color of the pause icon, eg: `white`|
| pauseIconSize   | string                   | size of the pause icon, eg: `40px`|
| slideBackgroundColor | string              | Sets the slides' background color, eg: `darkgrey`|
| slideImageFit        | string              | Sets the `object-fit` of the slides' image,<br/>available options `contain` and `cover`|
