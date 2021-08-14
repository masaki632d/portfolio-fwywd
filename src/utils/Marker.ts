import 'intersection-observer'

/* document内にあるmarkerを取得し、画面の真ん中に表示された際にクラスを付与する */
export const marker = (): void => {
  const markers: NodeListOf<Element> = document.querySelectorAll('.marker')

  const activateIndex = (dom: Element): void => {
    dom.classList.add('show')
  }

  // 監視対象から実行するdomを抜粋し、activateIndexへ渡す
  const checkActiveTag = (entries: Array<IntersectionObserverEntry>): void => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        activateIndex(entry.target)
      }
    })
  }

  // 画面中央を実行する場所として指定
  const options = {
    rootMargin: '-50% 0px',
    threshold: 0,
  }
  const observer = new IntersectionObserver(checkActiveTag, options)

  markers.forEach((marker) => {
    observer.observe(marker)
  })
}
