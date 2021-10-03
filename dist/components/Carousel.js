"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

var _react = _interopRequireWildcard(require("react"));

var _reactEasySwipe = _interopRequireDefault(require("react-easy-swipe"));

require("./styles/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Carousel(_ref) {
  let {
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
    thumbnails,
    thumbnailWidth,
    showNavBtn = true
  } = _ref;
  //Initialize States
  const [slide, setSlide] = (0, _react.useState)(0);
  const [isPaused, setIsPaused] = (0, _react.useState)(false);
  const [change, setChange] = (0, _react.useState)(0); //Function to change slide

  const addSlide = n => {
    if (slide + n >= data.length) setSlide(0);else if (slide + n < 0) setSlide(data.length - 1);else setSlide(slide + n);
  }; //Start the automatic change of slide


  (0, _react.useEffect)(() => {
    if (automatic) {
      var index = slide;
      const interval = setInterval(() => {
        if (!isPaused) {
          setSlide(index);
          index++;
          if (index >= data.length) index = 0;
          if (index < 0) index = data.length - 1;
        }
      }, time ? time : 2000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isPaused, change]);

  function scrollTo(el) {
    const elLeft = el.offsetLeft + el.offsetWidth;
    const elParentLeft = el.parentNode.offsetLeft + el.parentNode.offsetWidth; // check if element not in view

    if (elLeft >= elParentLeft + el.parentNode.scrollLeft) {
      el.parentNode.scroll({
        left: elLeft - elParentLeft,
        behavior: "smooth"
      });
    } else if (elLeft <= el.parentNode.offsetLeft + el.parentNode.scrollLeft) {
      el.parentNode.scroll({
        left: el.offsetLeft - el.parentNode.offsetLeft,
        behavior: "smooth"
      });
    }
  } //Listens to slide state changes


  (0, _react.useEffect)(() => {
    var slides = document.getElementsByClassName("carousel-item");
    var dots = document.getElementsByClassName("dot");
    var slideIndex = slide;
    var i;

    for (i = 0; i < data.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    } //If thumbnails are enabled


    if (thumbnails) {
      var thumbnailsArray = document.getElementsByClassName("thumbnail");

      for (i = 0; i < thumbnailsArray.length; i++) {
        thumbnailsArray[i].className = thumbnailsArray[i].className.replace(" active-thumbnail", "");
      }

      if (thumbnailsArray[slideIndex] !== undefined) thumbnailsArray[slideIndex].className += " active-thumbnail";
      scrollTo(document.getElementById("thumbnail-".concat(slideIndex)));
    }

    if (slides[slideIndex] !== undefined) slides[slideIndex].style.display = "block";
    if (dots[slideIndex] !== undefined) dots[slideIndex].className += " active";
  }, [slide, isPaused]);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: style,
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      maxWidth: width ? width : "600px",
      maxHeight: height ? height : "400px"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactEasySwipe.default, {
    onSwipeRight: () => {
      addSlide(-1);
      setChange(!change);
    },
    onSwipeLeft: () => {
      addSlide(1);
      setChange(!change);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-container",
    style: {
      maxWidth: width ? width : "600px",
      height: height ? height : "400px",
      backgroundColor: slideBackgroundColor ? slideBackgroundColor : "darkgrey",
      borderRadius: radius
    }
  }, data.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "carousel-item fade",
      style: {
        maxWidth: width ? width : "600px",
        maxHeight: height ? height : "400px"
      },
      onMouseDown: e => {
        automatic && setIsPaused(true);
      },
      onMouseUp: e => {
        automatic && setIsPaused(false);
      },
      onMouseLeave: e => {
        automatic && setIsPaused(false);
      },
      onTouchStart: e => {
        automatic && setIsPaused(true);
      },
      onTouchEnd: e => {
        automatic && setIsPaused(false);
      },
      key: index
    }, slideNumber && /*#__PURE__*/_react.default.createElement("div", {
      className: "slide-number",
      style: slideNumberStyle
    }, index + 1, " / ", data.length), /*#__PURE__*/_react.default.createElement("img", {
      src: item.image,
      alt: item.caption,
      className: "carousel-image",
      style: {
        borderRadius: radius,
        objectFit: slideImageFit ? slideImageFit : "cover"
      }
    }), isPaused && /*#__PURE__*/_react.default.createElement("div", {
      className: "pause-icon pause",
      style: {
        color: pauseIconColor ? pauseIconColor : "white",
        fontSize: pauseIconSize ? pauseIconSize : "40px"
      }
    }, "II"), /*#__PURE__*/_react.default.createElement("div", {
      className: "carousel-caption-".concat(captionPosition ? captionPosition : "bottom"),
      style: captionStyle,
      dangerouslySetInnerHTML: {
        __html: item.caption
      }
    }));
  }), showNavBtn && /*#__PURE__*/_react.default.createElement("a", {
    className: "prev",
    onClick: e => {
      addSlide(-1);
      setChange(!change);
    }
  }, "\u276E"), showNavBtn && /*#__PURE__*/_react.default.createElement("a", {
    className: "next",
    onClick: e => {
      addSlide(1);
      setChange(!change);
    }
  }, "\u276F"), dots && /*#__PURE__*/_react.default.createElement("div", {
    className: "dots"
  }, data.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement("span", {
      className: "dot",
      key: index,
      onClick: e => {
        setSlide(index);
        setChange(!change);
      }
    });
  }))))), thumbnails && /*#__PURE__*/_react.default.createElement("div", {
    className: "thumbnails",
    id: "thumbnail-div",
    style: {
      maxWidth: width
    }
  }, data.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement("img", {
      width: thumbnailWidth ? thumbnailWidth : "100px",
      src: item.image,
      alt: item.caption,
      className: "thumbnail",
      id: "thumbnail-".concat(index),
      key: index,
      onClick: e => {
        setSlide(index);
        setChange(!change);
      }
    });
  })));
}

var _default = Carousel;
exports.default = _default;