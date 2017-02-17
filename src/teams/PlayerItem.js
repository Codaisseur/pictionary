import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

export class PlayerItem extends PureComponent {
  static propTypes = {
  }

  render() {
    const { _id } = this.props

    return(
      <div>
        <h4>
          Player { this.props.index + 1 }
        </h4>
      </div>
    )
  }
}

export default connect()(PlayerItem)
