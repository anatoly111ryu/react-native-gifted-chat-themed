import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Send extends React.Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.text.trim().length === 0 && nextProps.text.trim().length > 0 || this.props.text.trim().length > 0 && nextProps.text.trim().length === 0) {
  //     return true;
  //   }
  //   return false;
  // }
  render() {
    if (this.props.text.trim().length > 0) {
      return (
          <TouchableOpacity
              style={[styles.container, this.props.containerStyle]}
              onPress={() => {
                this.props.onSend({text: this.props.text.trim()}, true);
              }}
              accessibilityTraits="button"
          >
            <Text style={[styles.text, this.props.textStyle]}>{this.props.label}</Text>
          </TouchableOpacity>
      );
    }
    else {
      return (
          <TouchableOpacity
              style={[styles.container, this.props.containerStyle]}
              accessibilityTraits="button"
          >
            <Text style={[styles.text, this.props.textStyle]}>{this.props.label}</Text>
          </TouchableOpacity>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    justifyContent: 'flex-end',
  },
  text: {
    color: '#f08b3a',
    fontWeight: '900',
    fontSize: 13,
    backgroundColor: 'transparent',
    marginBottom: 12,
    marginLeft: 10,
    marginRight: 10,
  },
});

Send.defaultProps = {
  text: '',
  onSend: () => {
  },
  label: 'SEND',
  containerStyle: {},
  textStyle: {},
};

Send.propTypes = {
  text: React.PropTypes.string,
  onSend: React.PropTypes.func,
  label: React.PropTypes.string,
  containerStyle: View.propTypes.style,
  textStyle: Text.propTypes.style,
};
