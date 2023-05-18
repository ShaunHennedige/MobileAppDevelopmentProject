import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { BarCodeScanner, BarCodeScannedCallback } from 'expo-barcode-scanner';
// import styles from '../util/styles';

interface Course {
  id: string;
  title: string;
}

const Scanner: React.FC = () => {
  const [permission, setPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState<boolean>(true);
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      // Simulated API call to fetch courses
      const response = await fetch('https://example.com/api/courses');
      const data = await response.json();
      setCourses(data.courses);
    };

    fetchCourses();
  }, []);

  const handleBarCodeScanned: BarCodeScannedCallback = ({ type, data }) => {
    setScanned(true);
    const course = courses.find((course) => course.id === data);
    if (course) {
      alert(`Course: ${course.title}`);
      // Logic for navigating to the course details page
    } else {
      alert('Course not found');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.heading}>Available Courses:</Text>
        {courses.map((course) => (
          <Card key={course.id} style={styles.courseCard}>
            <Card.Content>
              <Text>{course.title}</Text>
            </Card.Content>
          </Card>
        ))}
      </View>
      <View>
        {permission ? (
          !scanned && (
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
          )
        ) : !permission ? (
          <Text>No access to camera</Text>
        ) : (
          <Text>Requesting permission...</Text>
        )}
        {scanned && (
          <Button onPress={() => setScanned(false)} mode="contained">
            Tap to Scan
          </Button>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
  },
  courseCard: {
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
  },
  scannerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scannerText: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
});
