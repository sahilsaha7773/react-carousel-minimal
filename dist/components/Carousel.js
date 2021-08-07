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
  var heightProperty = fixedHeight ? "height" : "maxHeight"; //console.log(slideBackgroundColor);

  const [slide, setSlide] = (0, _react.useState)(0);
  const [isPaused, setIsPaused] = (0, _react.useState)(false);
  const [change, setChange] = (0, _react.useState)(0); // const [progressWidth, setProgressWidth] = useState(1);

  const addSlide = n => {
    if (slide + n >= data.length) setSlide(0);else if (slide + n < 0) setSlide(data.length - 1);else setSlide(slide + n);
  };

  (0, _react.useEffect)(() => {
    if (automatic) {
      var index = slide;
      const interval = setInterval(() => {
        console.log(isPaused);

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
  (0, _react.useEffect)(() => {
    var slides = document.getElementsByClassName("carousel-item");
    var dots = document.getElementsByClassName("dot");
    var slideIndex = slide;

    for (var i = 0; i < data.length; i++) {
      slides[i].style.display = "none";
    }

    for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides[slideIndex] != undefined) slides[slideIndex].style.display = "block";
    if (dots[slideIndex] != undefined) dots[slideIndex].className += " active"; // var width = progressWidth;
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
      style: captionStyle
    }, item.caption));
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "prev",
    onClick: e => {
      addSlide(-1);
      setChange(!change);
    }
  }, "\u276E"), /*#__PURE__*/_react.default.createElement("a", {
    className: "next",
    onClick: e => {
      addSlide(1);
      setChange(!change);
    }
  }, "\u276F"))), dots && /*#__PURE__*/_react.default.createElement("div", {
    className: "dots"
  }, data.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement("span", {
      className: "dot",
      key: index,
      onClick: e => setSlide(index)
    });
  }))));
}

var _default = Carousel;
exports.default = _default;