import {combineReducers} from 'redux';
import patientReducer from './reducer-patients';
import activePatientReducer from './reducer-active-patient';

const allReducers = combineReducers({
  patients: patientReducer
});

export default allReducers;