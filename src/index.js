import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Searchbar from './components/searchBar/SearchBar';
import ImageGallery from './components/imageGallery/ImageGallery';
import Loader from './components/loader/Loader';
import Button from './components/button/Button';
import Modal from './components/modal/Modal';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    isLoading: false,
    showModal: false,
    modalImage: '',
    maxImages: 0,
  };

  handleSearchSubmit = query => {
    this.setState(
      { searchQuery: query, images: [], page: 1 },
      this.fetchImages
    );
  };

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    const apiKey = '38274981-bf681d1339bb2c6c927a948b3';
    const url = `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ isLoading: true });

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          page: prevState.page + 1,
          maxImages: data.total,
        }));
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  openModal = image => {
    this.setState({ showModal: true, modalImage: image.largeImageURL });
  };

  closeModal = () => {
    this.setState({ showModal: false, modalImage: '' });
  };

  render() {
    const { images, isLoading, showModal, modalImage, maxImages } = this.state;

    return (
      <div className="App">
        <header className="Searchbar">
          <Searchbar onSubmit={this.handleSearchSubmit} />
        </header>
        <ImageGallery images={images} openModal={this.openModal} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button
            onClick={this.fetchImages}
            loading={isLoading}
            image={images}
            mImages={maxImages}
          />
        )}
        {showModal && <Modal image={modalImage} closeModal={this.closeModal} />}
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
