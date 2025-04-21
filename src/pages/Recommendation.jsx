import React, { useState, useMemo } from 'react';
import { universityData } from '../data/universityData';

const universityList = Object.values(universityData);

const allPrograms = Array.from(new Set(universityData.flatMap(u => u.programs)));
const allLocations = Array.from(new Set(universityData.map(u => u.location)));

export default function RecommendationPage() {
  const [maxFee, setMaxFee] = useState('');
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [maxRank, setMaxRank] = useState('');
  const [runFilter, setRunFilter] = useState(false);

  const resetFilters = () => {
    setMaxFee('');
    setSelectedPrograms([]);
    setSelectedLocation('');
    setMaxRank('');
    setRunFilter(false);
  };

  const results = useMemo(() => {
    if (!runFilter) return [];
    return universityList.filter(u => {
      if (maxFee && u.fee > +maxFee) return false;
      if (selectedPrograms.length > 0 && !selectedPrograms.some(p => u.programs.includes(p))) return false;
      if (selectedLocation && u.location !== selectedLocation) return false;
      if (maxRank && u.ranking > +maxRank) return false;
      return true;
    });
  }, [runFilter, maxFee, selectedPrograms, selectedLocation, maxRank]);

  const toggleProgram = prog => {
    setSelectedPrograms(ps =>
      ps.includes(prog) ? ps.filter(x => x !== prog) : [...ps, prog]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 p-6">
      <h1 className="text-3xl font-bold mb-6 text-purple-900">Personal Recommendations</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <label className="block mb-1 font-medium text-purple-700">Max Tuition Fee ($)</label>
          <input
            type="number"
            placeholder="Max"
            value={maxFee}
            onChange={e => setMaxFee(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <label className="block mb-1 font-medium text-purple-700">Programs</label>
          <div className="space-y-1 max-h-40 overflow-auto border p-2 rounded bg-gray-50">
            {allPrograms.map(prog => (
              <label key={prog} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedPrograms.includes(prog)}
                  onChange={() => toggleProgram(prog)}
                />
                <span>{prog}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <label className="block mb-1 font-medium text-purple-700">Location</label>
          <select
            value={selectedLocation}
            onChange={e => setSelectedLocation(e.target.value)}
            className="w-full p-2 border rounded bg-gray-50"
          >
            <option value="">All</option>
            {allLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
          </select>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <label className="block mb-1 font-medium text-purple-700">Max Ranking (Top N)</label>
          <input
            type="number"
            placeholder="Max"
            value={maxRank}
            onChange={e => setMaxRank(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div className="flex space-x-4 justify-center mb-6">
        <button
          onClick={() => setRunFilter(true)}
          className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
        >
          Get Recommendations
        </button>
        <button
          onClick={resetFilters}
          className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition"
        >
          Reset
        </button>
      </div>

      {runFilter && (
        results.length > 0 ? (
          <table className="w-full text-left border border-purple-300 shadow-md rounded-lg overflow-hidden bg-white">
            <thead className="bg-purple-300 text-purple-900">
              <tr>
                <th className="p-2 border-b border-purple-300">Name</th>
                <th className="p-2 border-b border-purple-300">Fee ($)</th>
                <th className="p-2 border-b border-purple-300">Location</th>
                <th className="p-2 border-b border-purple-300">Ranking</th>
                <th className="p-2 border-b border-purple-300">Programs</th>
              </tr>
            </thead>
            <tbody>
              {results.map(u => (
                <tr key={u.name} className="odd:bg-purple-100 even:bg-white">
                  <td className="p-2 border-b border-purple-200">{u.name}</td>
                  <td className="p-2 border-b border-purple-200">${u.fee}</td>
                  <td className="p-2 border-b border-purple-200">{u.location}</td>
                  <td className="p-2 border-b border-purple-200">Top {u.ranking}</td>
                  <td className="p-2 border-b border-purple-200">{u.programs.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-white">No universities match your criteria.</p>
        )
      )}
    </div>
  );
}
