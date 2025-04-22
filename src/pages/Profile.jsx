import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser?.photoURL) {
        setAvatarUrl(currentUser.photoURL);
      }
      if (currentUser?.displayName) {
        setDisplayName(currentUser.displayName);
      }
    });
    return () => unsub();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  const handleUpdateName = async () => {
    try {
      await updateProfile(auth.currentUser, { displayName });
      setStatus('Name updated!');
    } catch (err) {
      console.error(err);
      setStatus('Update failed.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 flex justify-center items-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-800">Your Profile</h2>

        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt="Avatar"
            className="w-24 h-24 mx-auto rounded-full object-cover mb-4 shadow"
          />
        ) : (
          <div className="w-24 h-24 mx-auto rounded-full bg-purple-200 flex items-center justify-center text-3xl mb-4">
            👤
          </div>
        )}

        {user && (
          <>
            <p className="text-center text-purple-800 mb-2">
              <strong>Email:</strong> {user.email}
            </p>

            <div className="mb-4">
              <label className="block text-sm font-medium text-purple-700 mb-1">
                Display Name
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full p-2 border border-purple-300 rounded"
              />
              <button
                onClick={handleUpdateName}
                className="mt-2 bg-purple-600 text-white w-full py-2 rounded hover:bg-purple-700"
              >
                Update Name
              </button>
            </div>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>

            {status && <p className="text-center text-sm text-gray-600 mt-3">{status}</p>}
          </>
        )}
      </div>
    </div>
  );
}