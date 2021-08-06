import './App.css';
import { Carousel } from './lib';

function App() {
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
