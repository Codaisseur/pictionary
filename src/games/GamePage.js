import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchGames from '../actions/games/fetch'
import Title from '../components/Title'
import GameItem from './GameItem'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import { buttonStyle, dialogStyle } from '../styles/app.js'
import TeamItem from '../teams/TeamItem'

export class GamePage extends PureComponent {
  static propTypes = {
  }

  componentDidMount() {
    this.props.fetchGames()
  }

  renderTeams(team, index) {
    return <TeamItem key={ index } { ...team } index={ index } />
  }

  render() {
    const { _id } = this.props

    return(
      <Paper style={ dialogStyle }>
        <Title content={ "Game " || 'Loading...' } />

        { !!this.props.teams && this.props.teams.map(this.renderTeams.bind(this)) }
      </Paper>
    )
  }
}

const mapStateToProps = ({ games }, { params }) => {
  const game = games.reduce((prev, next) => {
    if (next._id === params.gameId) {
      return next
    }
    return prev
  }, {})

  return {
    ...game
  }
}

export default connect(mapStateToProps, { fetchGames })(GamePage)
