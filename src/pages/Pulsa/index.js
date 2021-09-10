import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import {IconTelkomsel, IconXL, IconIndosat, IconSmartFren} from '../../assets';
import {getPulsaList} from '../../actions/PulsaAPI';

class Pulsa extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(getPulsaList());
  }

  render() {
    const {getPulsaResult} = this.props;
    console.log('DATA TABEL PULSA: ', this.props.getPulsaResult);
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            placeholder="Masukan Nomor Anda..."
            style={styles.inputText}
          />
        </View>
        <FlatList
          style={styles.notificationList}
          data={getPulsaResult}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.notificationBox}>
                {item.nama_provider === 'Telkomboy' ? (
                  <IconTelkomsel />
                ) : item.nama_provider === 'XXL' ? (
                  <IconXL />
                ) : item.nama_provider === 'Indosat' ? (
                  <IconIndosat />
                ) : item.nama_provider === 'Smartpren' ? (
                  <IconSmartFren />
                ) : (
                  <IconTelkomsel />
                )}
                <Text style={styles.nameList}>{item.nama_provider}</Text>
                <Text style={styles.paketList}>{item.nominal_pulsa}</Text>
                <Text style={styles.harga}>
                  Harga Pulsa : Rp. {item.harga_pulsa}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const mapStatetoProps = state => ({
  getPulsaResult: state.PulsaReducer.getPulsaResult,
});

export default connect(mapStatetoProps, null)(Pulsa);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC93C',
  },

  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  notificationBox: {
    padding: 50,
    marginTop: 15,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderRadius: 10,
  },
  nameList: {
    marginTop: 10,
    fontSize: 20,
    color: '#3498db',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  paketList: {
    fontSize: 18,
    color: 'red',
    marginLeft: 10,
    fontWeight: 'bold',
    flexDirection: 'column',
  },
  harga: {
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
    flexDirection: 'column',
  },
  inputText: {
    height: 60,
    borderWidth: 2,
    paddingLeft: 20,
    margin: 5,
    borderColor: 'black',
    backgroundColor: 'white',
  },
});
