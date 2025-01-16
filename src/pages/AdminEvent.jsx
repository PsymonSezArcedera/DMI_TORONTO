import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone"; // Import react-dropzone for drag-and-drop
import "/src/styles/AdminEvent.css";

function AdminEvent() {
  const [articles, setArticles] = useState([]);
  const [newArticle, setNewArticle] = useState({
    title: "",
    date: "",
    image: null, // Store the file in state
  });

  const [editArticle, setEditArticle] = useState(null);

  // Fetch data on initial load
  useEffect(() => {
    axios
      .get("http://localhost:5001/articles")
      .then((response) => setArticles(response.data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  function EventCard({ title, imageSrc, date, onNavigate }) {
    return (
      <div className="event-card">
        <div className="image-container">
          <img
            className="event-image"
            src={imageSrc}
            alt={title}
            onClick={onNavigate}
          />
          <div className="event-buttons">
            <button onClick={onNavigate} className="read-article-button">
              Visit
            </button>
          </div>
        </div>
        <h3 className="event-title">{title}</h3>
        <p className="event-date">{date}</p>
      </div>
    );
  }

  const handleAddArticle = () => {
    console.log("Adding article:", newArticle); // Debugging line
    const formData = new FormData();
    formData.append("title", newArticle.title);
    formData.append("date", newArticle.date);
    formData.append("image", newArticle.image); // Append the image file

    axios
      .post("http://localhost:5001/articles", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the correct content type for file upload
        },
      })
      .then((response) => {
        setArticles([...articles, response.data]);
        setNewArticle({ title: "", date: "", image: null });
      })
      .catch((error) => console.error("Error adding article:", error));
  };

  const handleDeleteArticle = (articleId) => {
    axios
      .delete(`http://localhost:5001/articles/${articleId}`)
      .then(() => {
        // Remove the deleted article from the state to reflect UI changes
        setArticles(articles.filter((article) => article._id !== articleId));
      })
      .catch((error) => console.error("Error deleting article:", error));
  };

  const handleEditArticle = (articleId) => {
    const articleToEdit = articles.find((article) => article._id === articleId);
    setEditArticle(articleToEdit);
  };

  // Show form for editing when an article is selected for editing
  const handleUpdateArticle = () => {
    const formData = new FormData();
    formData.append("title", editArticle.title);
    formData.append("date", editArticle.date);

    // Only append the image if it's a new file
    if (editArticle.image instanceof File) {
      formData.append("image", editArticle.image);
    }

    axios
      .put(`http://localhost:5001/articles/${editArticle._id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        setArticles(
          articles.map((article) =>
            article._id === response.data._id ? response.data : article
          )
        );
        setEditArticle(null);
      })
      .catch((error) => console.error("Error updating article:", error));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewArticle({ ...newArticle, image: file });
    }
  };

  const onDrop = (acceptedFiles) => {
    setNewArticle({
      ...newArticle,
      image: acceptedFiles[0], // Handle image drop
    });
  };

  const onDropForEdit = (acceptedFiles) => {
    setEditArticle({
      ...editArticle,
      image: acceptedFiles[0], // Handle image drop for editing
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*", // Accept image files
  });

  const { getRootProps: getRootPropsForEdit, getInputProps: getInputPropsForEdit } = useDropzone({
    onDrop: onDropForEdit,
    accept: "image/*", // Accept image files
  });

  return (
    <div className="admin-event">
      <h1>Event Admin Panel</h1>

      {/* Add Article Form */}
      <div>
        <h3>Add Article</h3>
        <input
          type="text"
          value={newArticle.title}
          onChange={(e) =>
            setNewArticle({ ...newArticle, title: e.target.value })
          }
          placeholder="Title"
        />
        <input
          type="text"
          value={newArticle.date}
          onChange={(e) =>
            setNewArticle({ ...newArticle, date: e.target.value })
          }
          placeholder="Date"
        />

        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          <p>Drag & Drop an image here, or click to select one</p>
        </div>

        <button className="add-article" onClick={handleAddArticle}>
          Add Article
        </button>
      </div>

      {/* Article List or Edit Form */}
      <div>
        <h3>{editArticle ? "Edit Article" : "Article List"}</h3>

        {editArticle ? (
          <div className="edit-article-form">
            <input
              type="text"
              value={editArticle.title}
              onChange={(e) =>
                setEditArticle({ ...editArticle, title: e.target.value })
              }
              placeholder="Title"
            />
            <input
              type="text"
              value={editArticle.date}
              onChange={(e) =>
                setEditArticle({ ...editArticle, date: e.target.value })
              }
              placeholder="Date"
            />

            <div {...getRootPropsForEdit()} className="dropzone">
              <input {...getInputPropsForEdit()} />
              <p>Drag & Drop an image here, or click to select one</p>
            </div>

            <button onClick={handleUpdateArticle}>Update Article</button>
            <button onClick={() => setEditArticle(null)}>Cancel</button>
          </div>
        ) : (
          <div className="event-container">
            {articles.map((article) => (
              <div key={article._id} className="article-item">
                <EventCard
                  title={article.title}
                  imageSrc={`http://localhost:5001${article.image}`} // Image path from server
                  date={article.date}
                />

                {/* Edit Button: Set article for editing */}
                <button
                  onClick={() => handleEditArticle(article._id)}
                  className="edit-button"
                >
                  Edit
                </button>

                {/* Delete Button: Delete the article */}
                <button
                  onClick={() => handleDeleteArticle(article._id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminEvent;
