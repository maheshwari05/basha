import { combineReducers } from 'redux';
import basic from './basic.reducer';
import sentences from './sentences.reducer';

const Reducers = combineReducers({
basic,
sentences,
});

export default Reducers;