import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import CircularProgress from 'react-native-circular-progress-indicator'; // Ensure this library is installed

const DashboardScreen = () => {
  // Data for visualizations
  const [moodData, setMoodData] = useState([50, 60, 70, 80, 75, 90]);
  const [waterIntakeData, setWaterIntakeData] = useState([2, 4, 6, 5, 3, 7]);
  const [sleepData, setSleepData] = useState([6, 7, 8, 7.5, 6.5, 7]);

  // Real-time data
  const [heartRate, setHeartRate] = useState(72); // Example initial heart rate
  const [stressLevel, setStressLevel] = useState(35); // Example initial stress level

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate((prev) => Math.max(60, Math.min(120, prev + Math.random() * 10 - 5))); // Fluctuates between 60 and 120 bpm
      setStressLevel((prev) => Math.max(0, Math.min(100, prev + Math.random() * 5 - 2))); // Fluctuates between 0% and 100%
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      {/* Visualization Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mood Over Time</Text>
        <LineChart
          data={{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [
              {
                data: moodData,
              },
            ],
          }}
          width={Dimensions.get('window').width - 40}
          height={200}
          chartConfig={chartConfig}
          style={styles.chart}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Water Intake (Cups)</Text>
        <BarChart
          data={{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [
              {
                data: waterIntakeData,
              },
            ],
          }}
          width={Dimensions.get('window').width - 40}
          height={200}
          chartConfig={chartConfig}
          style={styles.chart}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sleep Quality (Hours)</Text>
        <LineChart
          data={{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [
              {
                data: sleepData,
              },
            ],
          }}
          width={Dimensions.get('window').width - 40}
          height={200}
          chartConfig={chartConfig}
          style={styles.chart}
        />
      </View>

      {/* Real-Time Data Section */}
      <View style={styles.realTimeSection}>
        <Text style={styles.sectionTitle}>Real-Time Data</Text>
        <View style={styles.gaugeContainer}>
          {/* stress Rate */}
          <View style={styles.gauge}>
            <Text style={styles.gaugeLabel}>Stress Level</Text>
            <CircularProgress
              value={heartRate}
              maxValue={150}
              radius={70}
              textColor="#51158c"
              activeStrokeColor="#51158c"
              inActiveStrokeColor="#e0e0e0"
              
            />
          </View>

          {/* heart Level */}
          <View style={styles.gauge}>
            <Text style={styles.gaugeLabel}>Heart Rate</Text>
            <CircularProgress
              value={stressLevel}
              maxValue={100}
              radius={70}
              textColor="#ff6b6b"
              activeStrokeColor="#ff6b6b"
              inActiveStrokeColor="#e0e0e0"
             
              
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  decimalPlaces: 0, // No decimal places
  color: (opacity = 1) => `rgba(81, 21, 140, ${opacity})`, // Primary color
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Label color
  style: {
    borderRadius: 16,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#51158c',
    textAlign: 'center',
    marginVertical: 20,
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  chart: {
    borderRadius: 10,
  },
  realTimeSection: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  gaugeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  gauge: {
    alignItems: 'center',
    width: '50%',
  },
  gaugeLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
});

export default DashboardScreen;
