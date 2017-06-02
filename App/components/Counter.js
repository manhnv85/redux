import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class Counter extends Component {
    render(){
        return(
            <View>
                <Button title="Up" onPress={this.props.cong} />
                <Text style={styles.counter} onPress={this.props.lam_lai}>
                    {this.props.count}
                </Text>
                <Button title="Down" onPress={this.props.tru}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    counter: {
        padding: 10,
        alignSelf: 'center',
        fontSize: 26,
        fontWeight: 'bold'
    }
})