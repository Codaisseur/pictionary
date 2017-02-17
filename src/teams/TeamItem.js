import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import PlayerItem from './PlayerItem'

export class TeamItem extends PureComponent {
  static propTypes = {
    players: PropTypes.array.isRequired,
  }

  renderPlayers(player, index) {
    return <PlayerItem key={ index } { ...player } index={ index } />
  }

  render() {
    const { _id, teams } = this.props

    return(
      <div>
        <h3>
          Team { this.props.index + 1 }
        </h3>

        { !!this.props.players && this.props.players.map(this.renderPlayers.bind(this)) }
      </div>
    )
  }
}

export default connect()(TeamItem)
