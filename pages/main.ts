import './style.css'
import main from './main.html?raw'
import schedule from './components/schedule.html?raw'
import { useHeader } from './utils/useHeader'
import { useFooter } from './utils/useFooter'

useHeader()
useFooter()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = main

document.querySelector<HTMLDivElement>('#schedule')!.innerHTML = schedule;