import '../style.css'
import courses from './courses.html?raw'
import schedule from '../components/schedule.html?raw'
import { useHeader } from '../utils/useHeader'
import { useFooter } from '../utils/useFooter'

useHeader()
useFooter()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = courses

document.querySelector<HTMLDivElement>('#schedule')!.innerHTML = schedule;