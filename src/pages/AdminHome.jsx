import React, { useState, useEffect } from "react";
import axios from "axios";
import "/src/styles/AdminEvent.css";

function AdminEvent() {
  const [articles, setArticles] = useState([]);
  const [sliderImages, setSliderImages] = useState([]);
  const [contentData, setContentData] = useState([]);
  const [newArticle, setNewArticle] = useState({ title: "", date: "", link: "", image: "" });
  const [newSliderImage, setNewSliderImage] = useState("");
  const [newContent, setNewContent] = useState({ title: "", description: "", link: "" });

  // Fetch data on initial load
  useEffect(() => {
    axios.get("http://localhost:5001/articles")
      .then((response) => setArticles(response.data))
      .catch((error) => console.error("Error fetching articles:", error));

    axios.get("http://localhost:5001/slider-images")
      .then((response) => setSliderImages(response.data))
      .catch((error) => console.error("Error fetching slider images:", error));

    axios.get("http://localhost:5001/content")
      .then((response) => setContentData(response.data))
      .catch((error) => console.error("Error fetching content data:", error));
  }, []);

  const handleAddArticle = () => {
    axios.post("http://localhost:5001/articles", newArticle)
      .then((response) => {
        setArticles([...articles, response.data]);
        setNewArticle({ title: "", date: "", link: "", image: "" });
      })
      .catch((error) => console.error("Error adding article:", error));
  };

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

  const handleDeleteArticle = (id) => {
    axios.delete(`http://localhost:5001/articles/${id}`)
      .then(() => setArticles(articles.filter((article) => article._id !== id)))
      .catch((error) => console.error("Error deleting article:", error));
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
      <h2>Manage Articles, Slider Images, and Content</h2>

      {/* Add Article Form */}
      <div>
        <h3>Add Article</h3>
        <input type="text" value={newArticle.title} onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })} placeholder="Title" />
        <input type="text" value={newArticle.date} onChange={(e) => setNewArticle({ ...newArticle, date: e.target.value })} placeholder="Date" />
        <input type="text" value={newArticle.link} onChange={(e) => setNewArticle({ ...newArticle, link: e.target.value })} placeholder="Link" />
        <input type="text" value={newArticle.image} onChange={(e) => setNewArticle({ ...newArticle, image: e.target.value })} placeholder="Image URL" />
        <button onClick={handleAddArticle}>Add Article</button>
      </div>

      {/* Add Slider Image Form */}
      <div>
        <h3>Add Slider Image</h3>
        <input type="text" value={newSliderImage} onChange={(e) => setNewSliderImage(e.target.value)} placeholder="Image URL" />
        <button onClick={handleAddSliderImage}>Add Slider Image</button>
      </div>

      {/* Add Content Form */}
      <div>
        <h3>Add Content</h3>
        <input type="text" value={newContent.title} onChange={(e) => setNewContent({ ...newContent, title: e.target.value })} placeholder="Title" />
        <input type="text" value={newContent.description} onChange={(e) => setNewContent({ ...newContent, description: e.target.value })} placeholder="Description" />
        <input type="text" value={newContent.link} onChange={(e) => setNewContent({ ...newContent, link: e.target.value })} placeholder="Link" />
        <button onClick={handleAddContent}>Add Content</button>
      </div>

      {/* Article List */}
      <div>
        <h3>Article List</h3>
        {articles.map((article) => (
          <div key={article._id}>
            <h4>{article.title}</h4>
            <button onClick={() => handleDeleteArticle(article._id)}>Delete</button>
          </div>
        ))}
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

export default AdminEvent;
