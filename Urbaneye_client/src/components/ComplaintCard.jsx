import React from 'react'

export const ComplaintCard = ({ complaint }) => {
  return (
    <div className="border p-4 rounded mb-4 shadow-sm">
      <h3 className="text-xl font-semibold">{complaint.title}</h3>
      <p className="text-gray-600 mb-2">{complaint.description}</p>
      
      {complaint.imageUrl && (
        <img
          src={complaint.imageUrl}
          alt="Complaint"
          className="w-full h-auto max-h-60 object-cover rounded mb-2"
        />
      )}
      
      <p className="text-sm text-blue-600">Status: {complaint.status}</p>
    </div>
  )
}
