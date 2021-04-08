import styles from '../styles/components/ChallengeBox.module.css'

export const ChallengeBox = () => {
  const hasActiveChallenge = true

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" alt="" />
            <strong>Novo desafio</strong>
            <p>Levante e faça um caminhada de 3 minutos.</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFailButton}>
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceedButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber novos desafios</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  )
}
