import header from '../components/header.html?raw'

export function useHeader() {
  document.querySelector<HTMLDivElement>('#header')!.innerHTML = header;
}