import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Card, Button, Text} from 'react-native-paper';
import * as DocumentPicker from 'expo-document-picker';
import styles from '../util/styles';

const courseList = [
  {
    title: 'Mobile App Development',
    id: 'PG 2020',
  },
  {
    title: 'Software Development',
    id: 'PG 2021',
  },
  {
    title: 'Arduino Development',
    id: 'PG 2022',
  },
  {
    title: 'Network Devevelopmet',
    id: 'PG 2023',
  },
  {
    title: 'System Analysis And Design',
    id: 'PG 2024',
  },
  {
    title: 'Computer Architecture',
    id: 'PG 2025',
  },
];

const CourseCard = (props: {title: string; id: string}) => {
  const [file, setFile] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleLectureNotes = () => {
    // Logic for accessing lecture notes
    alert(`Accessing lecture notes for course: ${props.title}`);
  };

  const handleLecturePowerpoints = () => {
    // Logic for accessing lecture powerpoints
    alert(`Accessing lecture powerpoints for course: ${props.title}`);
  };

  const handleFileUpload = async () => {
    setIsUploading(true);
    // Simulating file upload delay for demonstration purposes
    const doc = await DocumentPicker.getDocumentAsync({});
    if (doc.type === 'cancel') {
      alert('Aborted');
    } else {
      console.log(doc.uri);
      setTimeout(() => {
        setIsUploading(false);
        setFile('');
        alert(`File uploaded successfully for course: ${props.title}`);
      }, 2000);
    }
  };

  return (
    <Card style={{width: '100%', flex: 1, marginTop: 20}}>
      <Card.Title title={<Text variant="titleLarge">{props.title}</Text>} />
      <Card.Content>
        <View style={styles.cardSection}>
          <Text variant="bodyLarge">Module ID:</Text>
          <Text variant="titleLarge">{props.id}</Text>
        </View>
        <View>
          <Button
            mode="contained"
            onPress={handleFileUpload}
            style={{margin: 10}}
            contentStyle={{height: 50}}
            labelStyle={{fontSize: 16}}>
            Upload Coursework
          </Button>
          <Button
            mode="contained"
            onPress={handleLectureNotes}
            style={{margin: 10}}
            contentStyle={{height: 50}}
            labelStyle={{fontSize: 16}}>
            View Lecture Notes
          </Button>
          <Button
            mode="contained"
            onPress={handleLecturePowerpoints}
            style={{margin: 10}}
            contentStyle={{height: 50}}
            labelStyle={{fontSize: 16}}>
            View Slides
          </Button>
        </View>
      </Card.Content>
    </Card>
  );
};

const CourseDetails = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: 'space-evenly',
        padding: 20,
      }}>
      {courseList.map((course, i) => (
        <CourseCard title={course.title} id={course.id} key={i} />
      ))}
    </ScrollView>
  );
};

export default CourseDetails;
