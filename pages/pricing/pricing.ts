import '../style.css'
import pricing from './pricing.html?raw'
import { useHeader } from '../utils/useHeader'
import { useFooter } from '../utils/useFooter'

useHeader()
useFooter()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = pricing