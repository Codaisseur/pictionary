// src/games/GameItem.js
import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './GameItem.sass'
import TeamItem from '../teams/TeamItem'

export class GameItem extends PureComponent {
  static propTypes = {
    teams: PropTypes.array.isRequired,
  }

  renderTeam(team, index) {
    return <TeamItem key={ index } { ...team } index={ index } />
  }

  render() {
    const { _id, teams } = this.props

    return(
      <article className="game">
        <header>
          <h1>
            <Link to={`/games/${_id}`}>Game { this.props.index + 1 }</Link>
          </h1>
        </header>
        <main>
          { this.props.teams.map(this.renderTeam.bind(this)) }
        </main>
        <footer>
        </footer>
      </article>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps)(GameItem)
