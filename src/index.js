import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SearchBar from './components/searchBar/SearchBar';
import ImageGallery from './components/imageGallery/ImageGallery';
import ImageGalleryItem from './components/imageGalleryItem/ImageGalleryItem';
import Modal from './components/modal/Modal';

let pictureName = '';
const url = `https://pixabay.com/api/?q=${pictureName}&page=1&key=38274981-bf681d1339bb2c6c927a948b3&image_type=photo&orientation=horizontal&per_page=12`;

class ImageFinder extends React.Component {
  handleFetch = () => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const input = form.elements.input.value;

    pictureName = input;

    console.log(input);

    form.reset();
  };

  render() {
    return (
      <>
        <SearchBar submit={this.handleSubmit}></SearchBar>
        <ImageGallery>
          <ImageGalleryItem></ImageGalleryItem>
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
