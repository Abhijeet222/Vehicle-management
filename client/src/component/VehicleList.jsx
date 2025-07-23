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
//     if (window.confirm('Are you sure you want to delete this vehicle?')) {
//       await axios.delete(`/api/vehicles/${id}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setVehicles(vehicles.filter(v => v._id !== id));
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {vehicles.map((v) => (
//           <div key={v._id} className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h3 className="text-lg font-bold text-gray-800">{v.vehicleNumber}</h3>
//                 <p className="text-sm text-gray-600 mb-1">Owner: {v.ownerName}</p>
//                 <p className="text-sm text-gray-600">Type: {v.vehicleType}</p>
//               </div>
//               <div className="text-sm">
//                 <span className={`px-2 py-1 rounded-full text-white text-xs font-semibold ${
//                   v.documentStatus === 'Active'
//                     ? 'bg-green-500'
//                     : v.documentStatus === 'Warning'
//                     ? 'bg-yellow-500'
//                     : 'bg-red-500'
//                 }`}>
//                   {v.documentStatus}
//                 </span>
//               </div>
//             </div>

//             <div className="mt-4 text-sm text-gray-700 space-y-1">
//               <p><strong>Insurance Expiry:</strong> {new Date(v.insuranceExpiry).toLocaleDateString()}</p>
//               <p><strong>Fitness Expiry:</strong> {new Date(v.fitnessExpiry).toLocaleDateString()}</p>
//               <p><strong>Permit Expiry:</strong> {new Date(v.permitExpiry).toLocaleDateString()}</p>
//               <p><strong>Pollution Expiry:</strong> {new Date(v.pollutionExpiry).toLocaleDateString()}</p>
//               <p><strong>Tax Expiry:</strong> {new Date(v.taxExpiry).toLocaleDateString()}</p>
//             </div>

//             <div className="mt-4 flex space-x-4 text-sm">
//               <Link to={`/vehicle/${v._id}/view`} className="text-blue-600 hover:underline font-medium">View</Link>
//               <Link to={`/vehicle/${v._id}/edit`} className="text-yellow-600 hover:underline font-medium">Edit</Link>
//               <button onClick={() => handleDelete(v._id)} className="text-red-600 hover:underline font-medium">Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VehicleList;



import { Link } from 'react-router-dom';
import { FaCar, FaTrash, FaEdit, FaEye } from 'react-icons/fa';

const VehicleList = () => {
  const vehicles = [
    {
      _id: '1',
      vehicleNumber: 'MH12AB1234',
      ownerName: 'Ramesh Singh',
      vehicleType: 'Truck',
      insuranceExpiry: '2025-11-15',
      fitnessExpiry: '2025-12-10',
      permitExpiry: '2025-12-30',
      pollutionExpiry: '2025-11-01',
      taxExpiry: '2026-01-15',
      documentStatus: 'Active',
    },
    {
      _id: '2',
      vehicleNumber: 'DL01XY5678',
      ownerName: 'Suresh Kumar',
      vehicleType: 'Car',
      insuranceExpiry: '2024-09-10',
      fitnessExpiry: '2024-08-01',
      permitExpiry: '2024-10-05',
      pollutionExpiry: '2024-07-20',
      taxExpiry: '2024-12-01',
      documentStatus: 'Warning',
    },
    {
      _id: '3',
      vehicleNumber: 'RJ14PQ1111',
      ownerName: 'Anil Mehta',
      vehicleType: 'Bike',
      insuranceExpiry: '2023-12-20',
      fitnessExpiry: '2023-10-15',
      permitExpiry: '2023-11-05',
      pollutionExpiry: '2023-09-10',
      taxExpiry: '2023-12-31',
      documentStatus: 'Expired',
    },
  ];

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this vehicle?')) {
      alert(`Vehicle with ID ${id} deleted (mocked).`);
    }
  };

  const statusClasses = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'Warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300 animate-pulse';
      case 'Expired':
        return 'bg-red-100 text-red-700 border-red-300 animate-pulse';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-extrabold text-indigo-800">Vehicle Dashboard</h1>
          <Link
            to="/vehicle/create"
            className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition duration-200 shadow-sm"
          >
            + Add New Vehicle
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((v) => (
            <div
              key={v._id}
              className="bg-white rounded-2xl border shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2 group-hover:text-indigo-600">
                      <FaCar className="text-blue-500 transition-transform group-hover:scale-110" />
                      {v.vehicleNumber}
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">Owner: {v.ownerName}</p>
                    <p className="text-sm text-gray-600">Type: {v.vehicleType}</p>
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border shadow-sm ${statusClasses(
                      v.documentStatus
                    )}`}
                  >
                    {v.documentStatus}
                  </span>
                </div>

                <div className="border-t pt-3 text-sm text-gray-700 space-y-1 leading-6">
                  <p><strong>Insurance:</strong> {new Date(v.insuranceExpiry).toLocaleDateString()}</p>
                  <p><strong>Fitness:</strong> {new Date(v.fitnessExpiry).toLocaleDateString()}</p>
                  <p><strong>Permit:</strong> {new Date(v.permitExpiry).toLocaleDateString()}</p>
                  <p><strong>Pollution:</strong> {new Date(v.pollutionExpiry).toLocaleDateString()}</p>
                  <p><strong>Tax:</strong> {new Date(v.taxExpiry).toLocaleDateString()}</p>
                </div>

                <div className="mt-5 flex justify-between text-sm text-gray-700">
                  <Link
                    to={`/vehicle/${v._id}/view`}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition"
                  >
                    <FaEye className="transition-transform group-hover:scale-110" /> View
                  </Link>
                  <Link
                    to={`/vehicle/${v._id}/edit`}
                    className="flex items-center gap-1 text-yellow-600 hover:text-yellow-800 transition"
                  >
                    <FaEdit className="transition-transform group-hover:scale-110" /> Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(v._id)}
                    className="flex items-center gap-1 text-red-600 hover:text-red-800 transition"
                  >
                    <FaTrash className="transition-transform group-hover:scale-110" /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehicleList;
