import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SearchBar from './components/searchBar/SearchBar';
import ImageGallery from './components/imageGallery/ImageGallery';
import ImageGalleryItem from './components/imageGalleryItem/ImageGalleryItem';
import Modal from './components/modal/Modal';

// const url = `https://pixabay.com/api/?q=${pictureName}&page=1&key=38274981-bf681d1339bb2c6c927a948b3&image_type=photo&orientation=horizontal&per_page=12`;

class ImageFinder extends React.Component {
  state = {
    query: '',
  };

  handleInputChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({ query: event.target.value });
  };

  closeModal = () => {
    this.props.onClose();
  };

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.closeModal();
    }
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
