import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchSpeech } from '../actions'

class SendAudioButton extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.fetchSpeech(this.props.lastBlob)
  }

  render () {
    return (
      <button onClick={this.handleClick}>Send Audio</button>
    )
  }
}

const mapStateToProps = (state) => {
  const blobs = state.recorder.blobs
  const lastBlob = blobs[ blobs.length - 1]
  const url = blobs.length > 0 ? URL.createObjectURL(lastBlob) : ''
  return {
    lastBlob,
    url
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchSpeech }, dispatch)
}

SendAudioButton.propTypes = {
  fetchSpeech: React.PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SendAudioButton)
