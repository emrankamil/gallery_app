
function reducer(state, action){
    if (action.type === 'change'){
        return {text: action.text}
    }
    else if (action.type === 'reset'){
        return {text: 'Hello, World!'}
    }
    else {
        return state;
    }
}

const Text = (props) => {
    const [state, dispatch] = useReducer(reducer, {text: 'Hello, World!'});

    return <p>props.items</p>
}

export default Text;