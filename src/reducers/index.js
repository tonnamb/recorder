import { recorderReducer as recorder } from 'react-recorder-redux'
import { audioReducer as audio } from 'redux-audio'
import { combineReducers } from 'redux'
import volumeMeter from './volumeMeterReducer'

export default combineReducers({
  recorder,
  audio,
  volumeMeter
})