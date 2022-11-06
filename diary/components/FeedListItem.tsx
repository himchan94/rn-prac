import {StyleSheet, Text, View, Platform, Pressable} from 'react-native';
import React from 'react';
import {format, formatDistanceToNow} from 'date-fns';
import {ko} from 'date-fns/locale';

const truncate = text => {
  const replaced = text.replace(/\n/g, '');

  if (replaced.length <= 100) {
    return replaced;
  }

  return replaced.slice(0, 100).concat('...');
};

const formatDate = date => {
  const d = new Date(date);

  const now = Date.now();
  const diff = (now - d.getTime()) / 1000;

  if (diff < 60 * 1) {
    return '방금 전';
  }

  return format(d, 'PPP EEE p', {locale: ko});
};

const FeedListItem = ({log}) => {
  const {title, body, date} = log;
  const onPress = () => {};

  return (
    <Pressable
      style={({pressed}) => [
        styles.block,
        Platform.OS === 'ios' && pressed && {backgroundColor: '#efefef'},
      ]}
      android_ripple={{color: '#ededed'}}
      onPress={onPress}>
      <Text style={styles.date}>{formatDate(date)}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{truncate(body)}</Text>
    </Pressable>
  );
};

export default FeedListItem;

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  date: {
    fontSize: 12,
    color: '#546e7a',
    marginBottom: 8,
  },
  title: {
    color: '#263238',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    color: '#37474f',
    fontSize: 16,
    lineHeight: 21,
  },
});
