import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'; 

export const Dashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const res = await axios.get('https://urbaneye-641r.onrender.com/api');
        setComplaints(res.data);
      } catch (err) {
        console.error('Failed to fetch complaints:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchComplaints();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-center text-blue-700">
            Complaints Dashboard
          </h2>

          {loading ? (
            <p className="text-center text-gray-600">Loading...</p>
          ) : complaints.length === 0 ? (
            <p className="text-center text-gray-600">No complaints found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border border-gray-200 rounded-md">
                <thead className="bg-blue-100 text-blue-900">
                  <tr>
                    <th className="py-3 px-4 border">#</th>
                    <th className="py-3 px-4 border text-left">Title</th>
                    <th className="py-3 px-4 border text-left">Description</th>
                    <th className="py-3 px-4 border text-center">Image</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                  {complaints.map((item, index) => (
                    <tr
                      key={item._id}
                      className="hover:bg-blue-50 transition duration-150"
                    >
                      <td className="py-3 px-4 border text-center font-medium">
                        {index + 1}
                      </td>
                      <td className="py-3 px-4 border">{item.title}</td>
                      <td className="py-3 px-4 border">{item.description}</td>
                      <td className="py-3 px-4 border text-center">
                        {item.imageUrl ? (
                          <img
                            src={item.imageUrl}
                            alt="Complaint"
                            className="w-16 h-16 object-cover rounded-md mx-auto shadow"
                          />
                        ) : (
                          <span className="text-gray-400">No Image</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
