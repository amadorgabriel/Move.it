import { useContext } from 'react'
import { useRouter } from 'next/router'

import { ProfileContext } from '../contexts/ProfileContext'

import styles from '../styles/pages/Login.module.css'

const Login = () => {
  const router = useRouter()
  const { nickname, updateNickname } = useContext(ProfileContext)

  const handleRedirectWithNickname = () => {
    const newNickname = nickname.replace(/\s+/g, '_')
    router.push(`/${newNickname}`);
  }

  return (
    <div className={styles.container}>
      <section>
        <img src="/logo-full-white.svg" alt="Login Move.it" />

        <div className={styles.mainContent}>
          <h1>Bem vindo!</h1>
          <p>Escolha como deseja prosseguir</p>

          <div>
            <input
              type="text"
              placeholder="Digite seu @username"
              onChange={event => {
                updateNickname(event.target.value)
              }}
            />
            <button
              type="submit"
              className={styles.submitButton}
              disabled={nickname === '' ? true : false}
              onClick={handleRedirectWithNickname}
            >
              <img
                src="/icons/arrow-right.svg"
                alt="Icone seta apontada para direita"
              />
            </button>
          </div>

          <button type="button" disabled>
            <img src="/icons/github.svg" alt="Logo Github" />
            Faça login com seu github
          </button>
        </div>
      </section>
    </div>
  )
}

export default Login
