import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Button, TextInput } from 'react-native-paper';

interface Course {
  id: string;
  title: string;
}

interface CourseDetailsProps {
  course: Course;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ course }) => {
  const [file, setFile] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleWorkSubmission = () => {
    // Logic for submitting work
    alert(`Submitting work for course: ${course.title}`);
  };

  const handleLectureNotes = () => {
    // Logic for accessing lecture notes
    alert(`Accessing lecture notes for course: ${course.title}`);
  };

  const handleLecturePowerpoints = () => {
    // Logic for accessing lecture powerpoints
    alert(`Accessing lecture powerpoints for course: ${course.title}`);
  };

  const handleFileUpload = () => {
    setIsUploading(true);
    // Simulating file upload delay for demonstration purposes
    setTimeout(() => {
      setIsUploading(false);
      setFile('');
      alert(`File uploaded successfully for course: ${course.title}`);
    }, 2000);
  };

  return (
    <>
      <Card.Title title={course.title} />
      <Card.Actions style={styles.buttonContainer}>
        <Button style={styles.button} onPress={handleWorkSubmission}>
          Submit Work
        </Button>
        <Button style={styles.button} onPress={handleLectureNotes}>
          Lecture Notes
        </Button>
        <Button style={styles.button} onPress={handleLecturePowerpoints}>
          Lecture Powerpoints
        </Button>
      </Card.Actions>
      <View style={styles.uploadContainer}>
        <TextInput
          label="Upload File"
          value={file}
          onChangeText={setFile}
          disabled={isUploading}
        />
        <Button
          style={styles.uploadButton}
          onPress={handleFileUpload}
          loading={isUploading}
          disabled={isUploading || file === ''}
        >
          Upload
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    paddingHorizontal: 20,
  },
  uploadContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  uploadButton: {
    marginLeft: 10,
  },
});
