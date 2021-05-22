/**
 * Drawer Content Screen
 */
import React, { Component, useState } from 'react';
import { SafeAreaView, View, Alert, Image, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import styles from './DrawerContentStyle';


class DrawerContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // menuItems: MenuItems,
        }
    }

    componentDidMount() {
        this._unsubscribe = this.props.navigation.addListener('focus', async () => {
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.drawerContainer}>
                <>
                <ScrollView {...this.props}>
                    <View style={styles.drawerContent}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CartScreen')}><Text style={styles.menuItemText}>Home</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}><Text style={styles.menuItemText}>Today's Deal</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileScreen')}><Text style={styles.menuItemText}>Profile</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('MyOrders')}><Text style={styles.menuItemText}>My Orders</Text></TouchableOpacity>
                    </View>
                </ScrollView>
                </>
            </SafeAreaView>
        );
    }
}

export default DrawerContent;