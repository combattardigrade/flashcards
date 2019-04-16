import React, { Component } from 'react'
import { createStackNavigator, addNavigationHelpers } from 'react-navigation'
import DeckList from './DeckList'
import { connect } from 'react-redux';

// https://medium.com/async-la/a-stately-guide-to-react-navigation-with-redux-1f90c872f96e

export const Navigator = createStackNavigator({
    DeckList: {
        screen: DeckList
    }
}, {
        initialRouteName: 'DeckList'
    })

class Nav extends Component {
    render() {
        return (
            <Navigator navigation={
                addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.navigation,
                })
            } />
        )
    }
}

const mapStateToProps = state => ({
    navigation: state.navigation
})

export default connect(mapStateToProps)(Nav)