import DOMPurify from 'dompurify'

const config = {
  ADD_TAG: ['a'],
  ADD_ATTR: ['onclick', 'href', 'rel', 'target'],
}

/**
 * anchorタグの送客ボタンに元の挙動を担保するためhrefにjavascriptを設定
 * @param node htmlのエレメントを受け取る
 */
const anchorSendButton = (node: any) => {
  if (!('target' in node)) {
    return node
  }
  const onclickAction: string = node.getAttribute('onclick')
  if (onclickAction == null) {
    return node
  }

  if (
    onclickAction.startsWith('pre_send') ||
    onclickAction.startsWith('popup_mass_enquete')
  ) {
    node.setAttribute('href', 'javascript:void(0)')
  }
  return node
}

DOMPurify.addHook('afterSanitizeAttributes', (node: any) => {
  node = anchorSendButton(node)
  return node
})

export const sanitizeHtml = (html?: string) => {
  return DOMPurify.sanitize(html, config)
}
