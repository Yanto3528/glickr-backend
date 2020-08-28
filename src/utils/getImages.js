const axios = require("axios");

const getImages = async (url, res) => {
  try {
    const response = await axios.get(url);

    // return false if the current page is greater than the total page
    const nextPage = response.data.photos.page <= response.data.photos.pages;

    // Get the images array from photos
    const imageData = response.data.photos.photo;

    // Create a new array containing only the data that's needed on the frontend
    const images = imageData.map((image) => ({
      id: image.id + Math.random() * 10,
      imageUrl: `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`,
      title: image.title,
    }));

    res.status(200).json({
      nextPage,
      data: images,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Something went wrong when fetching images" });
  }
};

module.exports = getImages;
