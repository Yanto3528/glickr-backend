const request = require("supertest");
const app = require("../app");
const axios = require("axios");

const { imageData } = require("../testData/imageData");

jest.mock("axios");

describe("get recent images", () => {
  test("successfully returns data from external api", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(imageData));
    const response = await request(app).get("/api/images/recent").expect(200);
    expect(response.body[0]).toHaveProperty("imageUrl");
  });
  test("returns empty array when there is no data from external api", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { photos: { photo: [] } } })
    );
    const response = await request(app).get("/api/images/recent").expect(200);
    expect(response.body.length).toBe(0);
  });
  test("error getting images from external api", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error("Something went wrong when fetching images"))
    );
    const response = await request(app).get("/api/images/recent").expect(500);
    expect(response.body.error).toBe(
      "Something went wrong when fetching images"
    );
  });
});

describe("search images by tags", () => {
  test("successfully returns data from external api", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(imageData));
    const response = await request(app)
      .get("/api/images/search/cat")
      .expect(200);
    expect(response.body[0]).toHaveProperty("imageUrl");
  });
  test("returns empty array when there is no data from external api", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { photos: { photo: [] } } })
    );
    const response = await request(app)
      .get("/api/images/search/cat")
      .expect(200);
    expect(response.body.length).toBe(0);
  });
  test("error getting images from external api", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error("Something went wrong when fetching images"))
    );
    const response = await request(app)
      .get("/api/images/search/cat")
      .expect(500);
    expect(response.body.error).toBe(
      "Something went wrong when fetching images"
    );
  });
});
