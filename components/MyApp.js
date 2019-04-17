import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { View, ActivityIndicator } from 'react-native'

class MyApp extends Component {
    state = {
        loading: true
    }
    async componentDidMount () {     
        this.setState({
            loading: true 
        })

        await this.props.dispatch(handleInitialData())
        
        this.setState({
            loading: false
        })
        
    } 
    render() {
        const { loading } = this.state
        return (
            <View>
                {
                    loading === true
                    ? <ActivityIndicator size="large" color="#0000ff" />
                    : this.props.children
                }
            </View>
        )
    }
}

export default connect()(MyApp)