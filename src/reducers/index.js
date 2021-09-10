import {combineReducers} from 'redux';
import UserReducer from './user';
import PaketDataReducer from './PaketDataAPIReducer';
import PulsaReducer from './PulsaAPIReducer';
import AuthReducer from './auth';
import ProfileReducer from './profile';

const rootReducer = combineReducers({
  UserReducer,
  PaketDataReducer,
  PulsaReducer,
  AuthReducer,
  ProfileReducer,
});

export default rootReducer;
