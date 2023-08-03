export default function LoginForm({ onLogin }) {

  async function handleSubmit(event) {
      event.preventDefault();
      onLogin(event.target.username.value, event.target.password.value);
  }

  return (
      <form className="flex flex-col justify-between w-3/4 p-8 mx-auto my-10 text-center bg-green-300 border-2 border-green-500 rounded h-60" onSubmit={handleSubmit}>
              
              <label htmlFor="username">USERNAME</label>
              <input className="px-2" placeholder="User Name" name="username" />
              <label htmlFor="password">PASSWORD</label>
              <input className="px-2" placeholder="Password" type="password" name="password" />
              <button className="py-2 mt-6 bg-green-500 rounded">SIGN IN</button>
              
      </form>
  );
}