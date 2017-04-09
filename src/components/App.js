import React from 'react'
import { Recorder } from 'react-recorder-redux'
import VolumeMeter from '../containers/VolumeMeter'
import StartButton from '../containers/StartButton'
import StopButton from '../containers/StopButton'
import GetAudioButton from '../containers/GetAudioButton'
import SendAudioButton from '../containers/SendAudioButton'
import { Audio } from 'redux-audio'

const AudioContext = window.AudioContext || window.webkitAudioContext
const audioCtx = new AudioContext()

const App = () => (
  <div>
    <Recorder blobOpts={{ type: 'audio/wav'}} />
    <VolumeMeter width={300} height={200} audioContext={audioCtx} />
    <StartButton text='Start' />
    <StopButton text='Stop' />
    <GetAudioButton />
    <SendAudioButton />
    <div>
      <Audio controls={true} uniqueId='mainPlayer'/>
    </div>
  </div>
)

export default App