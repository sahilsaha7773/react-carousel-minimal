import React, { useEffect, useState } from 'react'
import Swipe from 'react-easy-swipe';
import './styles/index.css';

function Carousel(props) {
  var {
    data,
    time,
    width,
    height,
    captionStyle,
    slideNumberStyle,
    radius,
    slideNumber,
    style,
    captionPosition,
    dots,
    automatic,
    pauseIconColor,
    pauseIconSize,
    slideBackgroundColor,
    slideImageFit,
    fixedHeight
  } = props;
  var heightProperty = fixedHeight ? "height" : "maxHeight";
  
  //console.log(slideBackgroundColor);
  const [slide, setSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [change, setChange] = useState(0);
  // const [progressWidth, setProgressWidth] = useState(1);
  const addSlide = (n) => {
    if (slide + n >= data.length)
      setSlide(0);
    else if (slide + n < 0)
      setSlide(data.length - 1);
    else
      setSlide(slide + n);
  }

  useEffect(() => {
    if (automatic) {
      var index = slide;
      const interval = setInterval(() => {
        console.log(isPaused);
        if (!isPaused) {

          setSlide(index);
          index++;
          if (index >= data.length)
            index = 0;
          if (index < 0)
            index = data.length - 1;
        }
      }, time ? time : 2000);



      return () => { clearInterval(interval); };
    }

  }, [isPaused, change]);

  useEffect(() => {

    var slides = document.getElementsByClassName("carousel-item");
    var dots = document.getElementsByClassName("dot");
    var slideIndex = slide;
    for (var i = 0; i < data.length; i++) {
      slides[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides[slideIndex] != undefined)
      slides[slideIndex].style.display = "block";
    if (dots[slideIndex] != undefined)
      dots[slideIndex].className += " active";

    // var width = progressWidth;
    // const progressInterval = setInterval(() => {
    //   if (isPaused) return;
    //   var elem = document.getElementById('progress');
    //   if (progressWidth >= 100) {
    //     setProgressWidth(1);
    //     //clearInterval(progressInterval);
    //   }
    //   else {
    //     setProgressWidth(progressWidth + 1);
    //     //console.log(progressWidth);
    //     elem.style.width = (progressWidth) + '%';
    //   }
    // }, time / 100);

    //return () => clearInterval(progressInterval);
  }, [slide, isPaused]);

  return (
    <div style={style} className="box">
      <div style={{
        maxWidth: width ? width : "600px",
        maxHeight: height ? height : "400px",
      }}
      >
        <Swipe
          onSwipeRight={() => { addSlide(-1); setChange(!change) }}
          onSwipeLeft={() => { addSlide(1); setChange(!change) }}
        >
          <div
            className="carousel-container"
            style={{
              maxWidth: width ? width : "600px",
              height: height ? height : "400px",
              backgroundColor: slideBackgroundColor ? slideBackgroundColor : "darkgrey",
              borderRadius: radius,
            }}
          >
            {
              data.map((item, index) => {
                return (
                  <div
                    className="carousel-item fade"
                    style={{
                      maxWidth: width ? width : "600px",
                      maxHeight: height ? height : "400px"
                    }}
                    onMouseDown={e => {
                      automatic &&
                        setIsPaused(true);
                    }}
                    onMouseUp={e => {
                      automatic &&
                        setIsPaused(false);
                    }}
                    onMouseLeave={e => {
                      automatic &&
                        setIsPaused(false);
                    }}
                    onTouchStart={e => {
                      automatic &&
                        setIsPaused(true);
                    }}
                    onTouchEnd={e => {
                      automatic &&
                        setIsPaused(false);
                    }}
                    key={index}>
                    {slideNumber &&
                      <div className="slide-number" style={slideNumberStyle}>{index + 1} / {data.length}</div>
                    }
                    <img src={item.image} alt={item.caption} className="carousel-image" style={{
                      borderRadius: radius,
                      objectFit: slideImageFit ? slideImageFit : "cover",
                    }}
                    />
                    {isPaused &&
                      <div className="pause-icon pause" style={{
                        color: pauseIconColor ? pauseIconColor : "white",
                        fontSize: pauseIconSize ? pauseIconSize : "40px"
                      }}>II</div>}
                    <div className={`carousel-caption-${captionPosition ? captionPosition : "bottom"}`} style={captionStyle}>{item.caption}</div>
                    {/* {automatic && <div className="bar">
                    <div className="progress" id="progress">

                    </div>
                  </div>} */}
                  </div>
                );
              })
            }

            <a className="prev" onClick={(e) => { addSlide(-1); setChange(!change) }}>&#10094;</a>
            <a className="next" onClick={(e) => { addSlide(1); setChange(!change) }}>&#10095;</a>
          </div>
        </Swipe>

        {dots &&
          <div className="dots">
            {
              data.map((item, index) => {
                return (
                  <span className="dot" key={index} onClick={(e) => setSlide(index)}></span>
                );
              })
            }
          </div>
        }
      </div>
    </div >
  )
}

export default Carousel
