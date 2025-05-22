import '../style.css'
import gallery from './gallery.html?raw'
import { useHeader } from '../utils/useHeader'
import { useFooter } from '../utils/useFooter'

useHeader()
useFooter()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = gallery