import { CircleX } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "./stores/authStore";

type ConnexionFormValues = {
  email: string;
  password: string;
};

export const Connexion = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { setIsLogged, setUser, isLogged } = useAuthStore();

  useEffect(() => {
    if (toastMessage) {
      // Petit délai pour déclencher le fade-in
      setTimeout(() => setIsVisible(true), 0);

      // Disparaître après 5 secondes
      const timer = setTimeout(() => {
        setIsVisible(false);
        // Attendre la fin de l'animation avant de retirer le message
        setTimeout(() => setToastMessage(null), 300);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  useEffect(() => {
    if (isLogged) {
      const timer = setTimeout(() => {
        navigate("/profil");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isLogged, navigate])

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ConnexionFormValues>();

  const onSubmit = async (data: ConnexionFormValues) => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        const message =
          errorBody?.message || "Une erreur est survenue lors de la connexion";
        console.log(errorBody, "ERRORBODY");

        setToastMessage(message);
        return;
      }

      const result = await response.json();
      setIsLogged(true);
      if (result.user) {
        setUser(result.user);
      }
      console.log("Réponse API :", result);
    } catch (err) {
      console.error("Erreur réseau ou inattendu :", err);
    }
  };

  return (
    <div className="container m-auto">
      {toastMessage && (
        <div
          role="alert"
          className={`alert alert-error transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          <CircleX size={18} />
          <span>{toastMessage}</span>
        </div>
      )}
      <div className="h-[calc(100vh-100px)] flex items-center justify-center">

        {isLogged ?
          <img src="../src/assets/check-connexion.gif" className="h-50 w-auto rounded-4xl" alt="Check" />
          :
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="fieldset border-base-300 rounded-box w-xs border p-4"
          >
            <legend className="fieldset-legend">Login</legend>

            <label className="label">Email</label>
            <input
              type="email"
              className="input bg-[#2E2E2E]"
              placeholder="Email"
              {...register("email", {
                required: "L'email est obligatoire",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email invalide",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email.message}</p>
            )}

            <label className="label">Password</label>
            <input
              type="password"
              className="input bg-[#2E2E2E]"
              placeholder="Password"
              {...register("password", {
                required: "Le mot de passe est obligatoire",
                minLength: {
                  value: 6,
                  message: "Minimum 6 caractères",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-400 text-sm">{errors.password.message}</p>
            )}

            <Link
              className="text-white text-center pt-3 hover:text-OrangeBase"
              to="/inscription"
            >
              Pas de compte ? Inscription
            </Link>

            <button
              type="submit"
              className="btn bg-[#fdc700] hover:bg-OrangeBase mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Connexion..." : "Se connecter"}
            </button>
          </form>}
      </div>
    </div>
  );
};
