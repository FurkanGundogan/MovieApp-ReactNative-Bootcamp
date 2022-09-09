import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {POSTER_URL} from '../assets/Info';
import IconStar from 'react-native-vector-icons/AntDesign';
const MovieDetailScreen = item => {
  const {title, overview, poster_path, vote_average, release_date, vote_count} =
    item?.route?.params;
  const deviceWidth = Dimensions.get('window').width;
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: POSTER_URL + poster_path,
          }}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.overview}>{overview}</Text>
      <Text style={styles.releaseTitle}>{'Release Date'}</Text>
      <Text style={styles.release}>{release_date}</Text>
      <Text style={styles.Votes}>{'Rating'}</Text>
      <View style={styles.starWrapper}>
        <Text style={styles.release}>{vote_average}</Text>
        <IconStar name="star" size={16} color="orange" />
      </View>

      <Text style={{...styles.release}}>{vote_count + ' votes'}</Text>
    </View>
  );
};

export default MovieDetailScreen;

const styles = StyleSheet.create({
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 12,
    borderColor: '#bcc9cf',
    borderWidth: 1,
    width: 250,
    height: 250,
    marginLeft: 16,
    alignSelf: 'center',
    marginTop: 24,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '800',
  },
  overview: {
    padding: 24,
    fontSize: 14,
    fontWeight: '400',
  },
  releaseTitle: {
    fontWeight: '800',
    textAlign: 'center',
  },
  release: {
    fontSize: 14,
    textAlign: 'center',
  },
  rate: {
    fontWeight: '800',
  },
  Votes: {
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 8,
  },
  starWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
