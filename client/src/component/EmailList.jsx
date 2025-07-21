import { useEffect, useState } from 'react';
import axios from 'axios';

const EmailList = ({ token }) => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/emails', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setEmails(res.data);
      } catch (err) {
        console.error('Error fetching emails:', err);
      }
    };

    fetchEmails();
  }, [token]);

  return (
    <div className="mt-6">
      <h2 className="font-bold mb-2">Saved Emails:</h2>
      <ul className="space-y-1">
        {emails.map((item) => (
          <li key={item._id} className="border p-2 rounded">
            {item.email} <span className="text-gray-500 text-sm">({item.addedBy?.username || 'User'})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailList;
