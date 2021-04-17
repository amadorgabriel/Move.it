import styles from '../styles/pages/Login.module.css'

const Login = () => {
  return (
    <div className={styles.container}>
      <section>
        <img src="/logo-full-white.svg" alt="Login Move.it" />

        <div className={styles.mainContent}>
          <h1>Bem vindo!</h1>
          <p>Escolha como deseja prosseguir</p>

          <div>
            <input type="text" placeholder="Digite seu @username"/>
            <button type="submit" className={styles.submitButton}> 
              <img src="/icons/arrow-right.svg" alt="Icone seta apontada para direita"/>
            </button>  
          </div>

          <button
            type="button"
          >
            <img src="/icons/github.svg" alt="Logo Github" />
            Faça login com seu github
          </button>
        </div>
      </section>
    </div>
  )
}

export default Login
