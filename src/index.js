import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SearchBar from './components/searchBar/SearchBar';
import ImageGallery from './components/imageGallery/ImageGallery';
import ImageGalleryItem from './components/imageGalleryItem/ImageGalleryItem';
import axios from 'axios';

// const url = `https://pixabay.com/api/?q=${pictureName}&page=1&key=38274981-bf681d1339bb2c6c927a948b3&image_type=photo&orientation=horizontal&per_page=12`;

class ImageFinder extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchImg = this.fetchImg.bind(this);

    this.state = {
      keyAPI: '38274981-bf681d1339bb2c6c927a948b3',
      arrowValues: [],
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const input = form.elements.input.value;

    this.fetchImg(input);

    form.reset();
  };

  fetchImg = async ({ input }) => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${input}&page=1&key=${this.state.keyAPI}&image_type=photo&orientation=horizontal&per_page=12`
      );

      const hits = response.data.hits;

      this.state.arrowValues.push(hits[0].id);
      this.state.arrowValues.push(hits[0].webformatURL);
      this.state.arrowValues.push(hits[0].largeImageURL);

      console.log(this.state.arrowValues);

      // for (let i = 0; i <= hits.length; i++) {
      //   console.log(hits[i]);
      // }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { arrowValues } = this.state;

    return (
      <>
        <SearchBar submit={this.handleSubmit}></SearchBar>
        <ImageGallery>
          {arrowValues.map(hit => (
            <ImageGalleryItem
              key={arrowValues[0]}
              src={arrowValues[1]}
              alt={arrowValues[2]}
            />
          ))}
        </ImageGallery>
      </>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<ImageFinder />);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
