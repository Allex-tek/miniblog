import styles from './Register.module.css';

import { useState, useEffect } from 'react';

const Register = () => {
  return (
    <div className={styles.register} >
        <h1>Cadastre-se para postar</h1>
        <p  >Crie seu usuário  e compartilhe suas histórias</p>
        <form>
            <label>
                <span>Nome:</span>
                <input
                    type='text'    
                    name='displayName'
                    required
                    placeholder='Nome do usuário'
                />
                <span>E-mail:</span>
                <input 
                    type='E-mail'
                    name='email'
                    required
                    placeholder='E-mail do usuário'
                />
                <span>Senha:</span>
                <input 
                    type='password'
                    name='password'
                    required
                    placeholder='senha do usuário'
                />
                <span>Confirmar senha:</span>
                <input 
                    type='password'
                    name='confirmPassword'
                    required
                    placeholder='Confirmar senha'
                />
            </label>
            <button className='btn'>Cadastrar</button>
        </form>
    </div>
  )
}

export default Register