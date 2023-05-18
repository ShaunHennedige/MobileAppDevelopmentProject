import React from 'react';
import {View} from 'react-native';
import {Card, Text, Avatar} from 'react-native-paper';
import styles from '../util/styles';
import {AuthContext} from '../util/AuthContext';

const Home = () => {
  const {userData} = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Card style={{width: '88%', flex: 1}}>
        <Card.Cover source={require('../../assets/MYLMS.png')} />
        <Card.Title
          title={<Text variant="titleLarge">Welcome, {userData.name}!</Text>}
          subtitle={'Account statistics:'}
          // eslint-disable-next-line react/no-unstable-nested-components
          left={props => <Avatar.Icon {...props} icon={'chart-bar'} />}
        />
        <Card.Content>
          <View style={styles.cardSection}>
            <Text variant="bodyLarge">Total Cources:</Text>
            <Text variant="titleLarge">6</Text>
          </View>
          <View style={styles.cardSection}>
            <Text variant="bodyLarge">Total Completed Cources:</Text>
            <Text variant="titleLarge">0</Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Home;
