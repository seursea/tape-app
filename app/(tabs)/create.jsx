import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native';
import icons from '../../constants/icons.js';

const CreateBacklog = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#73dabf" />

      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={icons.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Backlog</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Backlog Title</Text>
          <View style={styles.inputWithIcon}>
            <Image source={icons.task} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter backlog title"
              placeholderTextColor="#1e1e1e50"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Description</Text>
          <View style={styles.textAreaContainer}>
            <View style={styles.iconContainer}>
              <Image source={icons.task} style={styles.inputIcon} />
            </View>
            <TextInput
              style={styles.textArea}
              placeholder="Enter backlog description"
              placeholderTextColor="#1e1e1e50"
              multiline={true}
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Date</Text>
          <View style={styles.inputWithIcon}>
            <Image source={icons.task} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="10/03/2024"
              placeholderTextColor="#1e1e1e50"
              editable={false}
            />
          </View>
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
    backgroundColor: '#F1EDE4',
  },
  header: {
    backgroundColor: '#73dabf',
    flexDirection: 'row',
    alignItems: 'center',
    height: 200,
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    height: '100%',
    justifyContent: 'center',
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#f1ede4',
    marginTop: 120,
  },
  headerTitle: {
    flex: 1,
    color: '#f1ede4',
    fontSize: 40,
    fontWeight: '900',
    textAlign: 'right',
    marginRight: 4, 
    marginTop: 120,
  },
  formContainer: {
    padding: 24,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1e1e1e',
    opacity: 0.7,
    marginBottom: 8,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  inputIcon: {
    width: 20,
    height: 20,
    opacity: 0.6,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1e1e1e',
    marginLeft: 12,
    paddingVertical: 0,
  },
  textAreaContainer: {
    flexDirection: 'row',
    backgroundColor: '#d9d9d9',
    borderRadius: 8,
    minHeight: 120,
  },
  iconContainer: {
    paddingTop: 12,
    paddingLeft: 12,
  },
  textArea: {
    flex: 1,
    fontSize: 16,
    color: '#1e1e1e',
    textAlignVertical: 'top',
    paddingTop: 12,
    paddingRight: 12,
    paddingLeft: 12,
  },
  createButton: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 32,
  },
  buttonText: {
    color: '#f1ede4',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default CreateBacklog;