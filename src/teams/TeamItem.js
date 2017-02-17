import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

export class TeamItem extends PureComponent {
  static propTypes = {
    players: PropTypes.array.isRequired,
  }

  render() {
    const { _id, teams } = this.props

    return(
      <h3>
        Team { this.props.index + 1 }
      </h3>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps)(TeamItem)
