import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle image file selection
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Generate blog content using OpenAI
  const generateContent = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/blogs/generate-content', { title });
      setContent(response.data.content); // Set generated content
    } catch (error) {
      console.error('Error generating content:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission for creating a blog post
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.post('/api/blogs', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigate('/blogs'); // Redirect to blog list after successful submission
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create a Blog</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Blog Title */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border-2 border-gray-300 rounded w-full"
            placeholder="Enter blog title"
            required
          />
        </div>

        {/* Content Text Area */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="p-2 border-2 border-gray-300 rounded w-full"
            rows="10"
            placeholder="Generated content or write your own"
            required
          />
          {/* Generate Blog Content Button */}
          <button
            type="button"
            onClick={generateContent}
            className="bg-blue-500 text-white py-2 px-4 mt-2 rounded"
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Blog Content'}
          </button>
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="p-2 border-2 border-gray-300 rounded w-full"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
