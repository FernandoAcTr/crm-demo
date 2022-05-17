export const sleep = (time: number) => new Promise((res) => setTimeout(res, time))

export const addWindowClass = (classList: string) => {
  const window = document.getElementById('root')
  window?.classList.add(classList)
}

export const removeWindowClass = (classList: string) => {
  const window = document.getElementById('root')
  window?.classList.remove(classList)
}
