import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const VehicleForm = ({ token }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isView = useLocation().pathname.includes('view');
  const isEdit = useLocation().pathname.includes('edit');

  const [form, setForm] = useState({
    vehicleNumber: '',
    ownerName: '',
    vehicleType: '',
    insuranceExpiry: '',
    fitnessExpiry: '',
    permitExpiry: '',
    pollutionExpiry: '',
    taxExpiry: '',
    documentStatus: 'Active',
  });

  useEffect(() => {
    if (id) {
      axios.get(`/api/vehicles/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      }).then(res => setForm(res.data));
    }
  }, [id, token]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      await axios.put(`/api/vehicles/${id}`, form, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } else {
      await axios.post('/api/vehicles', form, {
        headers: { Authorization: `Bearer ${token}` }
      });
    }
    navigate('/');
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        {Object.entries(form).map(([key, value]) => (
          <div key={key}>
            <label className="block font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
            <input
              type={key.includes('Expiry') ? 'date' : 'text'}
              name={key}
              value={value}
              onChange={handleChange}
              disabled={isView}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
        ))}
        {!isView && (
          <button type="submit" className="bg-green-500 text-white px-4 py-2 mt-4 rounded">
            Save
          </button>
        )}
      </form>
    </div>
  );
};

export default VehicleForm;
