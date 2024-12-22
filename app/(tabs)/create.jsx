import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import icons from '../../constants/icons.js';

const CreateBacklog = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Create Backlog</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Backlog Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter backlog title"
            placeholderTextColor="#a0a0a070"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter backlog description"
            placeholderTextColor="#a0a0a070"
            multiline={true}
            numberOfLines={4}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Date</Text>
          <TextInput
            style={styles.input}
            placeholder="10/03/2024"
            placeholderTextColor="#a0a0a070"
          />
        </View>

        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.buttonText}>Create Backlog</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1ede4',
  },
  header: {
    backgroundColor: '#73dabf',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  time: {
    color: '#f1ede4',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: '#f1ede4',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 40,
  },
  formContainer: {
    padding: 20,
    marginTop: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e1e1e70',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#d9d9d9',
    borderRadius: 5,
    padding: 15,
    fontSize: 14,
  },
  textArea: {
    height: 113,
    textAlignVertical: 'top',
  },
  createButton: {
    backgroundColor: '#1e1e1e',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#f1ede4',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CreateBacklog;