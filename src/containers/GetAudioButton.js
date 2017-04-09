import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { audioSrc } from 'redux-audio/actions'

class GetAudioButton extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.audioSrc('mainPlayer', this.props.url)
  }

  render () {
    return (
      <button onClick={this.handleClick}>Get Audio</button>
    )
  }
}

const mapStateToProps = (state) => {
  const blobs = state.recorder.blobs
  const url = blobs.length > 0 ? URL.createObjectURL(blobs[ blobs.length-1 ]) : ''
  return {
    url
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ audioSrc }, dispatch)
}

GetAudioButton.propTypes = {
  audioSrc: React.PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(GetAudioButton)
