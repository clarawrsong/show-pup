import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class CourseStyle extends Component {
  render() {
    return (
      <View>

      </View>
    );
  }
}

class Course extends Component {
  render() {
    return (
      <View>

      </View>
    );
  }
}

class Column extends Component {
  render() {
    return (
      <View style={columnStyles.container}>
        <Text style={columnStyles.text}>{this.props.name}</Text>
      </View>
    );
  }
}

class TimeColumn extends Component {
  render() {
    return (
      <View style={columnStyles.container}>
        <Text style={columnStyles.text}>{this.props.name}</Text>
      </View>
    );
  }
}

class Schedule extends Component {
  render() {
    return (
      <View style={scheduleStyles.container}>
        <TimeColumn name={'Time'} />
        <Column name={'Mon'} />
        <Column name={'Tue'} />
        <Column name={'Wed'} />
        <Column name={'Thu'} />
        <Column name={'Fri'} />
      </View>
    );
  }
}

export default class ScheduleScreen extends Component {
  // constructor() {
  //   super();
  //   this.addCourse = this.addCourse.bind(this);
  // }

  // addCourse() {

  // }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.addCourse()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Class to Schedule</Text>
          </View>
        </TouchableOpacity>
        <Schedule />
      </View>
    );
  }
}

const columnStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderTopWidth: 3,
    borderColor: 'gray'
  },
  text: {
    margin: 5,
    textAlign: 'center'
  }
});

const scheduleStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#2196F3',
    justifyContent: 'space-between'
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  buttonContainer: {
    flexDirection: 'row',
    height: 50,
    margin: 20
  },
  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 15,
    color: 'white'
  },
  test: {
    height: 300
  },
  backTest: {
    backgroundColor: '#2196F3'
  }
});
