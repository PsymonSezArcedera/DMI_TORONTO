import React, { useState, useEffect } from "react";
import axios from "axios";
import "/src/styles/AdminEvent.css";

function AdminHome() {
  const [sliderImages, setSliderImages] = useState([]);
  const [contentData, setContentData] = useState([]);

  const [newSliderImage, setNewSliderImage] = useState("");
  const [newContent, setNewContent] = useState({ title: "", description: "", link: "" });

  useEffect(() => {
    // Fetch the slider images and content data on load
    axios.get("http://localhost:5001/slider-images")
      .then(response => setSliderImages(response.data))
      .catch(error => console.error("Error fetching slider images:", error));

    axios.get("http://localhost:5001/content")
      .then(response => setContentData(response.data))
      .catch(error => console.error("Error fetching content data:", error));
  }, []);

  const handleAddSliderImage = () => {
    axios.post("http://localhost:5001/slider-images", { image: newSliderImage })
      .then((response) => {
        setSliderImages([...sliderImages, response.data]);
        setNewSliderImage("");
      })
      .catch((error) => console.error("Error adding slider image:", error));
  };

  const handleAddContent = () => {
    axios.post("http://localhost:5001/content", newContent)
      .then((response) => {
        setContentData([...contentData, response.data]);
        setNewContent({ title: "", description: "", link: "" });
      })
      .catch((error) => console.error("Error adding content:", error));
  };

  const handleDeleteSliderImage = (id) => {
    axios.delete(`http://localhost:5001/slider-images/${id}`)
      .then(() => setSliderImages(sliderImages.filter((img) => img._id !== id)))
      .catch((error) => console.error("Error deleting slider image:", error));
  };

  const handleDeleteContent = (id) => {
    axios.delete(`http://localhost:5001/content/${id}`)
      .then(() => setContentData(contentData.filter((content) => content._id !== id)))
      .catch((error) => console.error("Error deleting content:", error));
  };

  return (
    <div>
      <h1>Admin Panel</h1>

      {/* Add Slider Image */}
      <div>
        <h3>Add Slider Image</h3>
        <input type="text" value={newSliderImage} onChange={(e) => setNewSliderImage(e.target.value)} placeholder="Image URL" />
        <button onClick={handleAddSliderImage}>Add Slider Image</button>
      </div>

      {/* Add Content */}
      <div>
        <h3>Add Content</h3>
        <input type="text" value={newContent.title} onChange={(e) => setNewContent({ ...newContent, title: e.target.value })} placeholder="Title" />
        <input type="text" value={newContent.description} onChange={(e) => setNewContent({ ...newContent, description: e.target.value })} placeholder="Description" />
        <input type="text" value={newContent.link} onChange={(e) => setNewContent({ ...newContent, link: e.target.value })} placeholder="Link" />
        <button onClick={handleAddContent}>Add Content</button>
      </div>

      {/* Slider Image List */}
      <div>
        <h3>Slider Image List</h3>
        {sliderImages.map((image) => (
          <div key={image._id}>
            <img src={image.image} alt={`Slider ${image._id}`} width="100" />
            <button onClick={() => handleDeleteSliderImage(image._id)}>Delete</button>
          </div>
        ))}
      </div>

      {/* Content List */}
      <div>
        <h3>Content List</h3>
        {contentData.map((content) => (
          <div key={content._id}>
            <h4>{content.title}</h4>
            <button onClick={() => handleDeleteContent(content._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminHome;
