import footer from '../components/footer.html?raw'

export function useFooter() {
  document.querySelector<HTMLDivElement>('#footer')!.innerHTML = footer;
}