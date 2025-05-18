import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'; // make sure path is correct

export const CreateComplaint = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://urbaneye-641r.onrender.com/api/add', {
        title,
        description,
        imageUrl,
      });

      setMessage('✅ Complaint submitted successfully.');
      setTitle('');
      setDescription('');
      setImageUrl('');

      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      setMessage(err.response?.data?.error || '❌ Failed to submit complaint.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-10 px-4">
        <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            📝 Submit a Public Complaint
          </h2>

          {message && (
            <div className="mb-4 text-center text-sm text-green-600">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-1">Title</label>
              <input
                type="text"
                placeholder="e.g. Broken Streetlight"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Description</label>
              <textarea
                placeholder="Describe the issue in detail..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full p-2 border rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Image URL <span className="text-gray-500 text-sm">(optional)</span>
              </label>
              <input
                type="text"
                placeholder="https://example.com/image.jpg"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold"
            >
              Submit Complaint
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
