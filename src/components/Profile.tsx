import styles from '../styles/components/Profile.module.css'

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/48362368?s=460&u=526f8ca9668b412ffd8577499560cf3be5c5d853&v=4"
        alt="Gabriel Rodrigues"
      />
      <div>
        <strong>Gabriel Rodrigues</strong>
        <p>
          <img src="./icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  )
}

export default Profile
