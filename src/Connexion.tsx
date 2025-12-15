import { Link } from "react-router-dom";

export const Connexion = () => {
  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <fieldset className="fieldset border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input
          type="email"
          className="input bg-[#2E2E2E]"
          placeholder="Email"
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input bg-[#2E2E2E]"
          placeholder="Password"
        />

        <Link
          className="text-white text-center pt-3 hover:text-[#fcb423]"
          to="/inscription"
        >
          Pas de compte ? Inscription
        </Link>

        <button className="btn bg-[#fdc700] hover:bg-[#fcb423] mt-4">
          Se connecter
        </button>
      </fieldset>
    </div>
  );
};
