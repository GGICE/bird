export default function text(state = {text: '☺'}, action) {
  switch (action.type) {
    case 'show':
      return {
          text: action.text  
        }
    default: 
      return state 
  }
}