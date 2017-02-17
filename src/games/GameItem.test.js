// src/games/GameItem.test.js
import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import { GameItem } from './GameItem'

chai.use(chaiEnzyme)

// TODO fix properties
const game = {
    title: 'Spanish Omelette',
    summary: 'A traditional dish from Spanish cuisine called tortilla española or tortilla de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
    vegan: false,
    vegetarian: true,
    pescatarian: false,
}

describe('<GameItem />', () => {
  const container = shallow(<GameItem { ...game } />)

  it('is wrapped in a article tag with class name "game"', () => {
    expect(container).to.have.tagName('article')
    expect(container).to.have.className('game')
  })

  it('contains a the title', () => {
    expect(container.find('h1')).to.have.text(game.title)
  })
})
