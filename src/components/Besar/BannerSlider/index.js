import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Slider1, Slider2} from '../../../assets';
import {SliderBox} from 'react-native-image-slider-box';
import {responsiveHeight, responsiveWidth} from '../../../utils/responsive';

export default class BannerSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [Slider1, Slider2],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
          autoplay
          circleLoop
          sliderBoxHeight={responsiveHeight(132)}
          ImageComponentStyle={styles.slider}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slider: {
    borderRadius: 8,
    width: responsiveWidth(354),
  },
  container: {
    marginTop: 25,
  },
});
