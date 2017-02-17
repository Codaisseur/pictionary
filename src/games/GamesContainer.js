import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchGames from '../actions/games/fetch'
import addGame from '../actions/games/add-game'
import subscribeToGamesService from '../actions/games/subscribe'
import Title from '../components/Title'
import GameItem from './GameItem'
import RaisedButton from 'material-ui/RaisedButton'
import './GamesContainer.sass'
import { buttonStyle } from '../styles/app.js'

export class GamesContainer extends PureComponent {
  static propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired,
    subscribeToGamesService: PropTypes.func.isRequired,
    addGame: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.fetchGames()
    this.props.subscribeToGamesService()
  }

  renderGame(game, index) {
    return <GameItem key={ index } { ...game } />
  }

  addGameClick() {
    this.props.addGame(this.props.currentUser)
  }

  render() {
    return(
      <div className="games wrapper">
        <header>
          <Title content="All Games" />
        </header>

        <RaisedButton
          style={ buttonStyle }
          onClick={ this.addGameClick.bind(this) }
          label="Add game"
          primary={true} />

        <main className="container">
          { this.props.games.map(this.renderGame.bind(this)) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ games, currentUser }) => ({ games, currentUser })

export default connect(mapStateToProps, {
  fetchGames,
  subscribeToGamesService,
  addGame,
})(GamesContainer)
