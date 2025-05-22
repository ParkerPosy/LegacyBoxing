import '../style.css'
import contact from './contact.html?raw'
import { useHeader } from '../utils/useHeader'
import { useFooter } from '../utils/useFooter'

useHeader()
useFooter()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = contact