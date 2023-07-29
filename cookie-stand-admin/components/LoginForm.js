import { useAuth } from '../contexts/auth';

export default function LoginForm() {
  const { login } = useAuth();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
        onSubmit={(e) => {
          e.preventDefault();
          login(e.target.username.value, e.target.password.value);
        }}
      >
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
            Username
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
