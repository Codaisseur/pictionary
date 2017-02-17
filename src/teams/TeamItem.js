import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import PlayerItem from './PlayerItem'
import RaisedButton from 'material-ui/RaisedButton'
import { buttonStyle } from '../styles/app.js'

export class TeamItem extends PureComponent {
  static propTypes = {
    players: PropTypes.array.isRequired,
    canJoin: PropTypes.bool.isRequired,
  }

  renderPlayers(player, index) {
    return <PlayerItem key={ index } { ...player } index={ index } />
  }

  joinTeam() {}

  render() {
    const { _id, teams } = this.props

    return(
      <div>
        { this.props.canJoin &&
          <RaisedButton
            style={ buttonStyle }
            onClick={ this.joinTeam.bind(this) }
            label="Join"
            primary={true} /> }

        <h3>
          Team { this.props.index + 1 }
        </h3>

        { !!this.props.players && this.props.players.map(this.renderPlayers.bind(this)) }
      </div>
    )
  }
}

export default connect()(TeamItem)
