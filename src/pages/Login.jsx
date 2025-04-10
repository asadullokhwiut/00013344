import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2D0B5A] via-[#5F1B96] to-[#D12EBD] px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Log In</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F1B96]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F1B96]"
          />
          <button
            type="submit"
            className="w-full bg-[#5F1B96] hover:bg-[#4A177A] text-white font-medium py-2 rounded-md transition"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#5F1B96] hover:underline font-medium">
            Sign Up
          </Link>
        </p>
        <Link to="/" className="text-sm text-[#5F1B96] underline block mt-6 text-center">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Login;
