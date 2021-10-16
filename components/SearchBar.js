import React, { useState } from 'react';
import { View, Box, Text, Center, Input, Button, Modal } from 'native-base';
import RNFetchBlob from 'rn-fetch-blob';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';
import { PermissionsAndroid } from 'react-native';
const audioRecorderPlayer = new AudioRecorderPlayer();
audioRecorderPlayer.setSubscriptionDuration(0.09);

const SearchBar = props => {
  const { itemName } = props;
  const [showModal, setShowModal] = useState(false);
  const onStartRecord = async () => {
    try {
      /*
      const grants = requestMultiple([
        PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PERMISSIONS.READ_EXTERNAL_STORAGE,
        PERMISSIONS.RECORD_AUDIO,
      ]).then(statuses => {
        console.log(statuses);
      });
      */
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
      const uri = await audioRecorderPlayer.startRecorder(path, audioSet);
      audioRecorderPlayer.addRecordBackListener(e => {
        console.log('Recording', e.currentPosition);
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
    await onStopRecord();
    setShowModal(false);
  };

  return (
    <>
      <Center bg="muted.100">
        <Input
          {...styles.searchBar}
          variant="rounded"
          placeholder="Ask me anything"
          size="lg"
          InputRightElement={<Button onPress={() => clickRecord()}>Mic</Button>}
        />
      </Center>

      <Modal isOpen={showModal}>
        <Modal.Content>
          <Modal.Header>Speak your thoughts</Modal.Header>
          <Modal.Body>
            <Button onPress={() => finishRecord()}>Stop Recording</Button>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

const styles = {
  searchBar: {
    w: '105%',
    borderRadius: '1000',
  },
};

export default SearchBar;
