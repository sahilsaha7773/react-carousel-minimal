
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Carousel } from "./lib";


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Carousel Box Rendered Correctly", () => {
  const data = [
    {
      image: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
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
  render(
    <Carousel data={data} />,
    container
  );
  expect(container.querySelectorAll(".carousel-container").length).toBe(1);


});

it("3 Slides Rendered", () => {
  const data = [
    {
      image: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
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
  render(
    <Carousel data={data} />,
    container
  );
  expect(container.querySelectorAll(".carousel-item").length).toBe(3);
});

it("Images Rendered Correctly", () => {
  const data = [
    {
      image: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
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
  render(
    <Carousel data={data} />,
    container
  );
  expect(container.querySelectorAll("img[src='https://www.w3schools.com/howto/img_mountains_wide.jpg']").length).toBe(1);
  expect(container.querySelectorAll("img[src='https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg']").length).toBe(1);
  expect(container.querySelectorAll("img[src='https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg']").length).toBe(1);
});

it("Captions Rendered Correctly", () => {
  const data = [
    {
      image: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
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
  render(
    <Carousel data={data} />,
    container
  );
  expect(container.querySelectorAll(".carousel-caption-bottom")[0].textContent).toBe("Image 1");
  expect(container.querySelectorAll(".carousel-caption-bottom")[1].textContent).toBe("Image 2");
  expect(container.querySelectorAll(".carousel-caption-bottom")[2].textContent).toBe("Image 3");

});