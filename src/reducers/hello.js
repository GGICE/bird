export default function text(state = {text: 'haha'}, action) {
  switch (action.type) {
    case 'show':
      return {
          text: 'click'
        }
    default:
      return state
  }
}