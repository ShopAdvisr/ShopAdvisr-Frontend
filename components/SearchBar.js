import React, { useState } from 'react';
import { useHistory } from 'react-router-native';
import {
  View,
  Box,
  Flex,
  Text,
  Center,
  Input,
  Button,
  Icon,
  IconButton,
  Modal,
  Spinner,
} from 'native-base';
import RNFetchBlob from 'rn-fetch-blob';
import { micSearch } from '../services/application.services';
import {
  MicrophoneIcon,
  CameraIcon,
  StopRecordIcon,
} from 'root/components/Icon';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';
import { PermissionsAndroid } from 'react-native';

import Camera from 'root/components/Camera';
import Graph from 'root/components/Line-chart';

const audioRecorderPlayer = new AudioRecorderPlayer();
audioRecorderPlayer.setSubscriptionDuration(0.09);

const SearchBar = props => {
  const { itemName } = props;
  const history = useHistory();

  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  let tempCurrentMetering = [];
  const [currentMetering, setCurrentMetering] = useState([]);
  const onStartRecord = async () => {
    try {
      const grants = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);

      console.log('write external stroage', grants);

      if (
        grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        grants['android.permission.READ_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        grants['android.permission.RECORD_AUDIO'] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('Permissions granted');
      } else {
        console.log('All required permissions not granted');
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }

    const dirs = RNFetchBlob.fs.dirs;
    const path = `${dirs.CacheDir}/file.m4a`;
    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    try {
      console.log('audioSet', audioSet);
      const uri = await audioRecorderPlayer.startRecorder(path, audioSet, true);
      audioRecorderPlayer.addRecordBackListener(e => {
        // console.log('Recording', e.currentPosition);
        setCurrentMetering(prevMetering => [
          ...prevMetering,
          e.currentMetering,
        ]);
        // tempCurrentMetering.push(e.currentMetering * -1);
        // console.log(tempCurrentMetering);
      });
      console.log(`uri: ${uri}`);
    } catch (err) {
      console.log(err);
    }
    return true;
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
  };

  const clickRecord = async () => {
    console.log('clicked');
    const res = await onStartRecord();
    if (!res) {
      return;
    }
    setShowModal(true);
  };

  const finishRecord = async () => {
    console.log('stop recording');
    setLoading(true);
    await onStopRecord();
    const dirs = RNFetchBlob.fs.dirs;
    const path = `${dirs.CacheDir}/file.m4a`;
    const data = await RNFetchBlob.fs.readFile(path, 'base64');
    let text = '';
    try {
      text = await micSearch(data);
    } catch (err) {
      console.log(err);
    }
    setSearchText(text);
    // RNFetchBlob.fetch('GET', 'https://shopadvisr.herokuapp.com')

    setCurrentMetering([]);
    tempCurrentMetering = [];
    setShowModal(false);
    setLoading(false);
  };

  return (
    <>
      <Center>
        <Input
          {...styles.searchBar}
          placeholder="Ask me anything"
          variant="filled"
          size="md"
          InputRightElement={
            <Flex align="center" justify="center" flexDirection="row">
              <IconButton onPress={() => clickRecord()} borderRadius="full">
                <Icon as={MicrophoneIcon} style={{ textAlign: 'center' }} />
              </IconButton>
              <IconButton onPress={() => {console.log('clicked camera'); history.push('/camera');}} borderRadius="full">
                <Icon as={CameraIcon} style={{ textAlign: 'center' }} />
              </IconButton>
            </Flex>
          }
        />
      </Center>

      <Modal isOpen={showModal}>
        <Modal.Content>
          <Modal.Header>Speak your thoughts</Modal.Header>
          <Modal.Body>
            <Graph data={currentMetering} />
            <Center>
              {loading ? (
                <Spinner />
              ) : (
                <IconButton onPress={() => finishRecord()} borderRadius="full">
                  <Icon as={StopRecordIcon} style={{ textAlign: 'center' }} />
                </IconButton>
              )}
            </Center>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

const styles = {
  searchBar: {
    w: '105%',
    borderRadius: '10',
  },
};

export default SearchBar;
