import Dispatcher from "./dispatcher.js"

export function updateInfo(value){
    Dispatcher.dispatch({
        type: 'INFO_UPDATE',
        data: value
    })
}

