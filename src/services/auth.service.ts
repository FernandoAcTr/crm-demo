import { sleep } from '@utils/helpers'

export const login = async (user: string, password: string) => {
  await sleep(1000)
  if (user != 'USUFER' || password != 'USUFER') throw new Error('Bad Credentials')
  return { email: 'dumy@gmail.com', user: 'DumyUser' }
}

export const logout = async () => {}
