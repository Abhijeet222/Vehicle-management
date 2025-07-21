// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const VehicleList = ({ token }) => {
//   const [vehicles, setVehicles] = useState([]);

//   useEffect(() => {
//     axios.get('/api/vehicles', {
//       headers: { Authorization: `Bearer ${token}` }
//     }).then(res => setVehicles(res.data));
//   }, [token]);

//   const handleDelete = async (id) => {
//     await axios.delete(`/api/vehicles/${id}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     });
//     setVehicles(vehicles.filter(v => v._id !== id));
//   };

//   return (
//     <div className="p-4">
//       <div className="flex justify-between mb-4">
//         <Link to="/vehicle/create" className="bg-green-500 px-4 py-2 text-white rounded">Create New</Link>
//         <Link to="/emails" className="bg-blue-500 px-4 py-2 text-white rounded">Add Emails</Link>
//       </div>

//       <table className="w-full border text-left">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="p-2">Vehicle Number</th>
//             <th className="p-2">Vehicle Owner</th>
//             <th className="p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {vehicles.map(v => (
//             <tr key={v._id} className="border-t">
//               <td className="p-2">{v.vehicleNumber}</td>
//               <td className="p-2">{v.ownerName}</td>
//               <td className="p-2 space-x-2">
//                 <Link to={`/vehicle/${v._id}/view`} className="text-blue-600">View</Link>
//                 <Link to={`/vehicle/${v._id}/edit`} className="text-yellow-600">Edit</Link>
//                 <button onClick={() => handleDelete(v._id)} className="text-red-600">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default VehicleList;
import { Link } from 'react-router-dom';

const VehicleList = () => {
  const vehicles = [
    { _id: '1', vehicleNumber: 'ABC123', ownerName: 'Abhinav' },
    { _id: '2', vehicleNumber: 'XYZ789', ownerName: 'Manav Raj' },
    { _id: '3', vehicleNumber: 'DEF456', ownerName: 'Rohan roy' },
  ];

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this vehicle?')) {
      alert(`Vehicle with ID ${id} deleted.`);
    }
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <div className="max-w-6xl mx-auto bg-white/60 backdrop-blur-lg rounded-3xl shadow-[12px_12px_20px_#cbd5e1,-8px_-8px_20px_#ffffff] p-8 border border-white">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800 drop-shadow-lg">🚘 Vehicle Dashboard</h2>
          <div className="space-x-4">
            <Link
              to="/vehicle/create"
              className="bg-green-400 hover:bg-green-500 text-white px-5 py-2 rounded-xl shadow-[inset_2px_2px_6px_rgba(0,0,0,0.1),inset_-2px_-2px_6px_rgba(255,255,255,0.7)] transition-all duration-200"
            >
              + Create New
            </Link>
            <Link
              to="/emails"
              className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2 rounded-xl shadow-[inset_2px_2px_6px_rgba(0,0,0,0.1),inset_-2px_-2px_6px_rgba(255,255,255,0.7)] transition-all duration-200"
            >
              📧 Add Emails
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white shadow-[6px_6px_12px_rgba(0,0,0,0.1),-4px_-4px_12px_rgba(255,255,255,0.6)]">
          <table className="w-full text-sm text-gray-700 rounded-xl overflow-hidden">
            <thead className="bg-gradient-to-r from-purple-200 via-white to-purple-100 text-gray-700">
              <tr>
                <th className="p-4 text-left font-semibold">🚗 Vehicle Number</th>
                <th className="p-4 text-left font-semibold">👤 Vehicle Owner</th>
                <th className="p-4 text-left font-semibold">⚙️ Actions</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((v, i) => (
                <tr
                  key={v._id}
                  className={`hover:bg-white/80 transition-all duration-300 ${
                    i % 2 === 0 ? 'bg-white/50' : 'bg-white/30'
                  }`}
                >
                  <td className="p-4 font-semibold">{v.vehicleNumber}</td>
                  <td className="p-4">{v.ownerName}</td>
                  <td className="p-4 space-x-3">
                    <Link
                      to={`/vehicle/${v._id}/view`}
                      className="text-blue-600 hover:underline hover:font-bold transition"
                    >
                      View
                    </Link>
                    <Link
                      to={`/vehicle/${v._id}/edit`}
                      className="text-yellow-600 hover:underline hover:font-bold transition"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(v._id)}
                      className="text-red-600 hover:underline hover:font-bold transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {vehicles.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center py-6 text-gray-500 text-lg">
                    🚫 No vehicles found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VehicleList;
