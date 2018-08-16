import { EventEmitter } from 'events';
import dispatcher from './dispatcher';

class InfoStore extends EventEmitter{
    constructor(){
        super()
        this.info = null
    }

    getInfo(){
        return this.info   
    }

    handleActions (action) {
        // console.log('Store = ')
        switch (action.type) {
            case 'INFO_UPDATE':{
                this.info = action.data;
                this.emit('flux_test');
                break
            }
        }
    }
}

const infoStore = new InfoStore()
dispatcher.register(infoStore.handleActions.bind(infoStore))
export default infoStore