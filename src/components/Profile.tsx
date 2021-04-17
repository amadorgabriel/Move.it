import { useContext, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { ProfileContext } from '../contexts/ProfileContext'

import styles from '../styles/components/Profile.module.css'

interface ProfileProps {
  nickname: string
  urlImage: string
}

export function Profile(props: ProfileProps) {
  const { level } = useContext(ChallengesContext)
  const { formatNameDisplay } = useContext(ProfileContext)

  const [image] = useState(props.urlImage)
  const [name] = useState(props.nickname)

  console.log('aa: ' + name)

  return (
    <div className={styles.profileContainer}>
      <img src={image} alt="Profile Image" />
      <div>
        <strong>{formatNameDisplay(name)}</strong>
        <p>
          <img src="./icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}
