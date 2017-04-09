import { VOLUME_METER_STOP, VOLUME_METER_START, 
  REQUEST_SPEECH, RECEIVE_SPEECH, 
  REQUEST_TOKEN, RECEIVE_TOKEN } from './TYPES'

import axios from 'axios'
// import Qs from 'qs'
import Guid from 'guid'

// import watson from 'watson-developer-cloud'
// import recognizeFile from 'watson-speech/speech-to-text/recognize-file'

export const volumeMeterStart = () => {
  return {type: VOLUME_METER_START}
}

export const volumeMeterStop = () => {
  return {type: VOLUME_METER_STOP}
}

export const requestSpeech = () => {
  return {
    type: REQUEST_SPEECH
  }
}

export const receiveSpeech = (response) => {
  return {
    type: RECEIVE_SPEECH,
    response
  }
}

export const requestToken = () => {
  return {
    type: REQUEST_TOKEN
  }
}

export const receiveToken = (token) => {
  return {
    type: RECEIVE_TOKEN,
    token
  }
}


const APIKey = '7c1edb8aa60546e1bc1938210fff849d'

export const fetchSpeech = (blob) => {
  return (dispatch) => {
    dispatch(requestToken())
    const config = { headers: { 'Ocp-Apim-Subscription-Key': APIKey } }
    axios.post('https://api.cognitive.microsoft.com/sts/v1.0/issueToken', null, config)
    .then(response => {
      const token = response.data
      console.log(response)
      dispatch(receiveToken(token))
      const newGuid = Guid.raw()
      console.log(blob)
      axios({
        url: 'https://speech.platform.bing.com/recognize',
        method: 'post',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'audio/wav; samplerate=44100'
        },
        params: {
          'Version': '3.0',
          'requestid': newGuid,
          'appID': 'D4D52672-91D7-4C74-8AD8-42B1D98141A5',
          'format': 'json',
          'locale': 'locale=en-US',
          'device.os': 'iPhone OS',
          'scenarios': 'ulm',
          'instanceid': newGuid
        },
        data: blob
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    })
  }
}


/*
export const fetchSpeech = (blob) => {
  return (dispatch) => {
    const authorization = new watson.AuthorizationV1({
      username: '8d5008f2-05db-49c4-8e15-8c2ac5ba7008',
      password: 'FowWaW3FpmBU',
      url: watson.TextToSpeechV1.URL
    })
    authorization.getToken((err, token) => {
      if (!token) {
        console.log('error:', err);
      } else {
        console.log(token)
      }
    });
  }
}
*/