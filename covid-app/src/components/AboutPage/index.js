import React, { useState, useEffect } from 'react';
import './index.css';
import {
  Box, Button, FormControl, Modal, TextField,
} from '@material-ui/core';
import GalleryData from './imageGalleryData';
import GalleryItem from './GalleryItem';
import useStyles from '../../utils/hooks';
import MySlider from './MySlider';

function AboutPage() {
  const classes = useStyles();
  const [param, setParam] = useState('');
  const [open, setOpen] = useState(false);
  const [gallerysData, setGalleryData] = useState([]);
  const [test, setTest] = useState('');

  const [searchedImage, setSearchedImage] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSort = () => {
    const newArray = gallerysData.sort((a, b) => a.title.localeCompare(b.title));
    setGalleryData(newArray);
    setTest('Sorted');
  };

  const handleSearch = () => {
    const obj = gallerysData.find((x) => x.title === param);
    if (!obj) {
      setSearchedImage(null);
    }
    setSearchedImage(obj);
    handleOpen();
  };

  useEffect(() => {
    setGalleryData(GalleryData);
  }, []);

  return (
    <div className="about_page">
      <h1 className="title">Hello! This site is developed for Covid2019 information and statistics!</h1>
      <MySlider />
      <h2 className="title">Covid molecule images gallery</h2>
      <div className="input_wrapper">
        <FormControl variant="outlined" className={classes.formControl}>
          <TextField
            id="text"
            label="Enter title"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            value={param}
            onChange={(e) => {
              setParam(e.target.value);
            }}
          />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
        >
          Search
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="modal">
            <Box>
              {
                searchedImage
                  ? (
                    <div>
                      <GalleryItem src={searchedImage.src} title={searchedImage.title} />
                    </div>
                  ) : <div>No results..(</div>
              }
            </Box>
          </div>
        </Modal>
      </div>
      <div className="button">
        <Button
          variant="contained"
          color="primary"
          onClick={handleSort}
        >
          Sort by title
        </Button>
        {test}
      </div>
      <div className="gallery_wrapper">
        {gallerysData.map((el) => <GalleryItem src={el.src} title={el.title} key={el.id} />)}
      </div>
    </div>
  );
}

export default AboutPage;
