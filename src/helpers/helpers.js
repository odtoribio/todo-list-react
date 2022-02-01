
export const buildItem = title => {
  return {
    id:Date.now(),
    title,
    isDone: false
  }
}

export const resetInput = input => {
  input.current.value = ""
  input.current.focus()
}
