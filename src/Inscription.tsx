export const Inscription = () => {
  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <fieldset className="fieldset border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Inscription</legend>

        <label className="label">Nom</label>
        <input type="text" className="input bg-[#2E2E2E]" placeholder="Nom" />

        <label className="label">Prénom</label>
        <input
          type="text"
          className="input bg-[#2E2E2E]"
          placeholder="Prénom"
        />

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

        <button className="btn bg-[#fdc700] hover:bg-[#fcb423] mt-4">
          S'inscrire
        </button>
      </fieldset>
    </div>
  );
};
