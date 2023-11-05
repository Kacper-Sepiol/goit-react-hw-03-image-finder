import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SearchBar from './components/searchBar/SearchBar';
import ImageGallery from './components/imageGallery/ImageGallery';
import ImageGalleryItem from './components/imageGalleryItem/ImageGalleryItem';
import Modal from './components/modal/Modal';

class ImageFinder extends React.Component {}

ReactDOM.createRoot(document.getElementById('root')).render(<ImageFinder />);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
