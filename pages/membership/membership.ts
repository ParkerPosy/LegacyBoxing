import '../style.css'
import memberships from './membership.html?raw'
import { useHeader } from '../utils/useHeader'
import { useFooter } from '../utils/useFooter'

useHeader()
useFooter()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = memberships