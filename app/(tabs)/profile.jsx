import React, { act, useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
  Image,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import icons from '../../constants/icons.js';
import { useFonts } from 'expo-font';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('My Profile');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const navigation = useNavigation();

  const languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Japanese',
    'Korean'
  ];

  const renderLanguageSelector = () => (
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
        style={styles.picker}
        dropdownIconColor="#1e1e1e"
      >
        {languages.map((language) => (
          <Picker.Item key={language} label={language} value={language} />
        ))}
      </Picker>
    </View>
  );

  const renderPreviewSection = () => (
    <View style={styles.previewSection}>
      <Text style={styles.previewTitle}>Preview</Text>
      <View style={styles.previewCard}>
        <View style={styles.previewContent}>
          <View style={styles.leftContent}>
            <View style={styles.previewAvatar}>
              <Image 
                style={styles.avatarImage}
                source={require('../../assets/images/default-avatar.png')} 
                defaultSource={require('../../assets/images/default-avatar.png')}
              />
            </View>
            <View style={styles.previewInfo}>
              <Text style={styles.nameText}>Name</Text>
              <Text style={styles.usernameText}>@username</Text>
            </View>
          </View>
          <View style={styles.rightContent}>
            <TouchableOpacity style={styles.photoButton}>
              <Text style={styles.photoButtonText}>Upload New Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.photoButton}>
              <Text style={styles.photoButtonText}>Select New Avatar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  const renderMyProfile = () => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.actionButtons}>
          <Text style={styles.actionButton}>Save</Text>
          <Text style={styles.actionButton}>Cancel</Text>
        </View>
      </View>
      
      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Name</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input}
              placeholder="Enter name"
            />
          </View>
        </View>
        <View style={styles.inputGroup}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Username</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input}
              placeholder="Enter username"
            />
          </View>
        </View>
        <View style={styles.inputGroup}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Email</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input}
              placeholder="Enter email"
            />
          </View>
        </View>
        <View style={styles.inputGroup}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Age</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input}
              placeholder="Enter age"
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.inputGroup}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Language</Text>
          </View>
          <View style={styles.inputContainer}>
            {renderLanguageSelector()}
          </View>
        </View>
        <View style={styles.inputGroup}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Bio</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input}
              placeholder="Add bio"
            />
          </View>
        </View>
      </View>
      {renderPreviewSection()}
    </View>
  );

  const renderCustomization = () => (
    <View style={styles.section}>
      <View style={styles.customizationContainer}>
        <View style={styles.themeSection}>
          <View style={styles.themeTitleRow}>
            <Text style={styles.sectionTitle}>Theme Selection</Text>
            <View style={styles.actionButtons}>
              <Text style={styles.actionButton}>Save</Text>
              <Text style={styles.actionButton}>Cancel</Text>
            </View>
          </View>
          
          <Text style={styles.subsectionTitle}>Appearance</Text>
          
          <View style={styles.themeOptions}>
            <View style={styles.themeOptionColumn}>
              <View style={styles.themeBox}>
              <Image source={icons.sun} style={styles.themeIcon} />
              </View>
              <Text style={styles.themeLabel}>Light Mode</Text>
            </View>
            
            <View style={styles.themeOptionColumn}>
              <View style={styles.themeBox1}>
              <Image source={icons.moon} style={[styles.themeIcon, styles.darkThemeIcon]} />
              </View>
              <Text style={styles.themeLabel}>Dark Mode</Text>
            </View>
            
            <View style={styles.themeOptionColumn}>
              <View style={styles.themeBox2}>
              <Image source={icons.settings} style={styles.themeIcon} />
              </View>
              <Text style={styles.themeLabel}>System Mode</Text>
            </View>
          </View>

          <View style={styles.fontSection}>
            <Text style={styles.subsectionTitle}>Font Style</Text>
            <View style={styles.fontOptions}>
              <TouchableOpacity style={[styles.fontOption, styles.fontOptionActive]}>
                <Text style={styles.fontOptionText}>Default</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.fontOption}>
                <Text style={styles.fontOptionText1}>Kavoon</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.fontOption}>
                <Text style={styles.fontOptionText2}>Clara</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={icons.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <View style={styles.tabContainer}>
        <View style={styles.tabWrapper}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'My Profile' && styles.activeTab]}
            onPress={() => setActiveTab('My Profile')}>
            <Text style={[styles.tabText, activeTab === 'My Profile' && styles.activeTabText]}>
              My Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'Customization' && styles.activeTab]}
            onPress={() => setActiveTab('Customization')}>
            <Text style={[styles.tabText, activeTab === 'Customization' && styles.activeTabText]}>
              Customization
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content}>
        {activeTab === 'My Profile' ? renderMyProfile() : renderCustomization()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EDE4',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 200,
    backgroundColor: '#73dabf',
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
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabContainer: {
    backgroundColor: '#f1ede4',
  },
  tabWrapper: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    paddingVertical: 22,
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
  },
  activeTab: {
    backgroundColor: '#f1ede4',
  },
  tabText: {
    fontSize: 21,
    color: '#818087',
    fontWeight: '800',
  },
  activeTabText: {
    color: '#1e1e1e',
    opacity: 0.7,
    fontWeight: '800',
  },
  content: {
    flex: 1,
    backgroundColor: '#f1ede4',
  },
  section: {
    paddingTop: 16,
  },
  sectionHeader: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: '500',
    color: '#1e1e1e',
    opacity: 0.7,
    fontWeight: '800',
  },
  formContainer: {
    paddingHorizontal: 16,
  },
  inputGroup: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 20,
    color: '#1e1e1e',
    opacity: 0.7,
    fontWeight: '800',
  },
  labelContainer: {
    marginRight: 12,
  },
  inputContainer: {
    flex: 1, 
  },
  input: {
    backgroundColor: '#d9d9d9',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    width: '100%',
  },
  bioInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  previewSection: {
    marginTop: 24,
    paddingHorizontal: 16,
    marginBottom: 80,
  },
  previewTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1E1E1E',
    opacity: 0.7,
    marginBottom: 16,
  },
  previewCard: {
    backgroundColor: '#CBCACA',
    borderRadius: 8,
    padding: 12,
    width: '100%',
    marginBottom: 20,
  },
  previewContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start', 
  },
  leftContent: {
    flexDirection: 'column', 
    alignItems: 'center',
    flex: 1,
  },
  rightContent: {
    flex: 1,
    marginLeft: 12,
  },
  previewAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#8E8E8E',
    marginBottom: 8, 
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  previewInfo: {
    alignItems: 'center', 
  },
  previewName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E1E1E',
    marginBottom: 2,
  },
  previewUsername: {
    fontSize: 14,
    color: '#666666',
  },
  customizationContainer: {
    padding: 16,
  },
  themeSection: {
    marginBottom: 24,
  },
  themeTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    color: '#73dabf',
    fontSize: 14,
    fontWeight: '500',
  },
  actionButtonWrapper: {
    padding: 5,
  },
  subsectionTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  themeOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  themeOptionColumn: {
    alignItems: 'center',
    flex: 1,
  },
  themeBox: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeBox1: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: '#000000',
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeBox2: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: '#CBCACA',
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightThemeIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F1EDE4',
  },
  darkThemeIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#000000',
  },
  systemThemeIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#636363',
  },
  themeLabel: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  fontSection: {
    marginTop: 24,
  },
  fontOptions: {
    flexDirection: 'row',
    gap: 12,
  },
  fontOption: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: '#cbcACA',
  },
  fontOptionActive: {
    backgroundColor: '#73dabf',
  },
  fontOptionText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#1e1e1e',
  },
  fontOptionText1: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Love Twist Sans',
    color: '#1e1e1e',
  },
  fontOptionText2: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Clara-Regular',
    color: '#1e1e1e',
  },
  languageSelector: {
    backgroundColor: '#F1EDE4',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#1e1e1e',
  },
  languageText: {
    fontSize: 16,
    color: '#1e1e1e',
  },
  dropdownIcon: {
    fontSize: 12,
  },
  dropdownOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'F1EDE4',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    color: '#1e1e1e',
  },
  dropdownModal: {
    backgroundColor: '#F1EDE4',
    borderRadius: 8,
    padding: 8,
    width: '80%',
    maxHeight: '50%',
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  languageOption: {
    padding: 16,
    borderBottomWidth: 1,
    color: '#1e1e1e',
  },
  languageOptionText: {
    fontSize: 16,
    color: '#1e1e1e',
  },
  pickerContainer: {
    backgroundColor: '#d9d9d9',
    borderRadius: 8,
    overflow: 'hidden'
  },
  picker: {
    width: '100%',
    backgroundColor: '#d9d9d9',
    color: '#1e1e1e',
  },
  previewSection: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  previewTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e1e1e',
    opacity: 0.7,
    marginBottom: 16,
  },
  avatarContainer: {
    alignItems: 'center',
    width: '100%',
    gap: 8,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#d9d9d9',
    marginBottom: 16,
  },
  photoButton: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
  },
  photoButtonText: {
    color: '#1E1E1E',
    fontSize: 16,
    fontWeight: '600',
  },
  rightContent: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
});

export default Profile;