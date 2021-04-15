import { createContext, ReactNode, useState, useEffect, useContext } from 'react'
import { ChallengesContext } from './ChallengesContext'

interface CountdownProviderProps {
  children: ReactNode
}

interface CountdownContextDataProps {
  minutes: number
  seconds: number
  hasFinished: boolean
  isActive: boolean
  startCountdown: () => void
  resetCountdown: () => void
}

let countdownTimeout: NodeJS.Timeout

export const CountdownContext = createContext({} as CountdownContextDataProps)

export function CountdownProvider({ children }: CountdownProviderProps) {
  // contexts
  const { startNewChallenge } = useContext(ChallengesContext)

  //states
  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  //consts
  const minutes = Math.floor(time / 60)
  const seconds = time - minutes * 60

  const startCountdown = () => {
    setIsActive(true)
  }

  const resetCountdown = () => {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(25 * 60)
    setHasFinished(false)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}
