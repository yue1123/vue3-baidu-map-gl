const urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'

export function nanoid(size = 21) {
  let id = ''
  // A compact alternative for `for (var i = 0; i < step; i++)`.
  let i = size
  while (i--) {
    // `| 0` is more compact and faster than `Math.floor()`.
    id += urlAlphabet[(Math.random() * 64) | 0]
  }
  return id
}
