import { createContext, ReactNode, useState, useEffect } from 'react'
import Cookies from 'js-cookie'

interface ProfileContextataProps {
  nickname: string
  urlImage: string
  updateNickname: (username: string) => void
  formatNameDisplay: (username: string) => string
}

interface ProfileProviderProps {
  children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextataProps)

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [nickname, setNickname] = useState('')
  const urlImage = `https://ui-avatars.com/api/?name=${nickname}&&rounded=true&&background=random&&bold=true&&color=fff`

  useEffect(() => {
    Cookies.set('nickname', nickname)
    Cookies.set('urlImage', urlImage)
  }, [nickname])  

  const updateNickname = (userName: string) => {
    setNickname(userName)
  }

  const formatNameDisplay = (userName: string) => {
    const names = userName.split(' ')

    for (let index = 0; index < names.length; index++) {
      const nameElement =
        names[index].charAt(0).toUpperCase() + names[index].substring(1)
      names[index] = nameElement
    }

    return names.join(' ')
  }

  return (
    <ProfileContext.Provider
      value={{
        nickname,
        urlImage,
        updateNickname,
        formatNameDisplay
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}
