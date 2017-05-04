'use strict';

import React, {Component} from 'react'
import {
    Text,
    StyleSheet,
    NavigatorIOS,
    AppRegistry
} from 'react-native'
import SearchPage from './SearchPage.ios'

let styles = StyleSheet.create({
    container: {
        flex: 1
    }
});


class PropertyFinderApp extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: 'Property Finder',
                    component: SearchPage
                }}
            />
        )
    }
}

AppRegistry.registerComponent('PropertyFinder', function () {
    return PropertyFinderApp
});
