import React, { useState } from 'react';
import { universityData } from '../data/universityData';

const universityKeys = Object.keys(universityData);

const ComparisonPage = () => {
  const [selection1, setSelection1] = useState('');
  const [selection2, setSelection2] = useState('');

  const handleReset = () => {
    setSelection1('');
    setSelection2('');
  };

  const renderTable = (dataKey) => {
    const data = universityData[dataKey] || {};
    return (
      <table className="w-full text-left border border-purple-300 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-purple-100 text-purple-900">
          <tr><th className="p-2 border-b border-purple-300">Attribute</th><th className="p-2 border-b border-purple-300">Details</th></tr>
        </thead>
        <tbody>
          <tr className="odd:bg-purple-50 even:bg-white"><td className="p-2 border-b border-purple-200">Name</td><td className="p-2 border-b border-purple-200">{data.name || '-'}</td></tr>
          <tr className="odd:bg-purple-50 even:bg-white"><td className="p-2 border-b border-purple-200">Tuition Fee</td><td className="p-2 border-b border-purple-200">{data.fee ? `$${data.fee}` : '-'}</td></tr>
          <tr className="odd:bg-purple-50 even:bg-white"><td className="p-2 border-b border-purple-200">Location</td><td className="p-2 border-b border-purple-200">{data.location || '-'}</td></tr>
          <tr className="odd:bg-purple-50 even:bg-white"><td className="p-2 border-b border-purple-200">Ranking</td><td className="p-2 border-b border-purple-200">{data.ranking ? `Top ${data.ranking}` : '-'}</td></tr>
          <tr className="odd:bg-purple-50 even:bg-white"><td className="p-2">Programs</td><td className="p-2">{Array.isArray(data.programs)? data.programs.join(', '): (data.programs || '-')}</td></tr>
        </tbody>
      </table>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 p-6">
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">Compare Universities Now</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
        <div className="bg-white rounded-xl shadow-lg p-4">
        <select
          value={selection1}
          onChange={(e) => setSelection1(e.target.value)}
          className="w-full mb-4 p-2 border …"
        >
          <option value="">Select a University</option>
          {universityKeys.map(key => (
            <option key={key} value={key}>
              {universityData[key].name}
            </option>
          ))}
        </select>
          {renderTable(selection1)}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4">
        <select
          value={selection2}
          onChange={(e) => setSelection2(e.target.value)}
          className="w-full mb-4 p-2 border …"
        >
           <option value="">Select a University</option>
          {universityKeys
            .filter(key => key !== selection1)
            .map(key => (
              <option key={key} value={key}>
                {universityData[key].name}
              </option>
            ))}
        </select>
          {renderTable(selection2)}
        </div>
      </div>

      <div className="text-center">
        <button onClick={handleReset} className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">Reset</button>
      </div>
    </div>
  );
};

export default ComparisonPage;