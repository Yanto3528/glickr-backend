const getImages = require("../utils/getImages");

// @description       Get recent images from flickr
// @Routes            /api/images/recent
// @method            GET
exports.getRecentImages = async (req, res) => {
  const { page } = req.query;
  getImages(
    `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${process.env.FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=12&page=${page}`,
    res
  );
};

// @description       Search images by tags
// @Routes            /api/images/search/:tags
// @method            GET
exports.searchImagesByTags = async (req, res) => {
  const { tags } = req.params;
  const { page } = req.query;
  getImages(
    `https://www.flickr.com/services/rest/?method=flickr.photos.search&tags=${tags}&api_key=${process.env.FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=12&page=${page}`,
    res
  );
};
