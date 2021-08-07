import './App.css';
import { Carousel } from './lib';

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
          time={4000}
          width="300px"
          height="100px"
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
          pauseIconColor="white"
          pauseIconSize="40px"
        />
      </div>
    </div>
  );
}

export default App;
