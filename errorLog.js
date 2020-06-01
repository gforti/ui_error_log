globalThis.addEventListener('error', errorEvt => {
  console.log(errorEvt)
  const {message, filename, lineno, colno} = errorEvt
  const url = document.location.href
  console.log(message, filename, lineno, colno, url)
  console.log(hashCode(message), hashCode(url))
})


function hashCode(str = '') {
  return Array.from(str)
    .reduce((acc, cv) => Math.imul(31, acc) + cv.charCodeAt(0) | 0, 0)
}


