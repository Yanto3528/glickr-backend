const axios = require("axios");

const getImages = async (url, res) => {
  try {
    const response = await axios.get(url);
    const imageData = response.data.photos.photo;

    const images = imageData.map((image) => ({
      imageUrl: `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`,
    }));

    res.status(200).json(images);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Something went wrong when fetching images" });
  }
};

module.exports = getImages;
