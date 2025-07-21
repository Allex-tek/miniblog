import { useAuthentication } from "../../hooks/useAuthentication";
import styles from "./Register.module.css";

import { useState, useEffect } from "react";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    const response = await createUser(user);

    console.log(response);

    setConfirmPassword("");
    setDisplayName("");
    setEmail("");
    setError("");
    setPassword("");
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
            autoComplete="username"
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
          />
          <span>E-mail:</span>
          <input
            type="E-mail"
            name="email"
            required
            placeholder="E-mail do usuário"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="senha do usuário"
            autoComplete="new-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <span>Confirmar senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirmar senha"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </label>
        {!loading && <button className="btn">Cadastrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
      </form>
    </div>
  );
};

export default Register;
