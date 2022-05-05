export const toggleDarkClass = (v: boolean) => document.documentElement.classList.toggle('dark', v)

export const log = (...args: unknown[]) => console.log.apply(null, [`[${new Date().toLocaleString()}]`, ...args])

export const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ')
