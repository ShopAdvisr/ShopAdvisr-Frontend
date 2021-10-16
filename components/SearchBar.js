import React, { useState } from 'react';
import { View, Box, Text, Center, Input, Button, Modal } from 'native-base';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';

const SearchBar = props => {
  const { itemName } = props;
  const [showModal, setShowModal] = useState(false);
  const audioRecorderPlayer = new AudioRecorderPlayer();
  audioRecorderPlayer.setSubscriptionDuration(0.09);

  const onStartRecord = async () => {
    const path = 'record.m4a';
    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    console.log('audioSet', audioSet);
    const uri = await audioRecorderPlayer.startRecorder(path, audioSet);
    console.log(`uri: ${uri}`);
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
  };

  const clickRecord = async () => {
    await onStartRecord();
    setShowModal(true);
  };

  const finishRecord = async () => {
    onStopRecord();
    setShowModal(false);
  };

  return (
    <>
      <Center>
        <Input
          {...styles.searchBar}
          variant="filled"
          placeholder="Ask me anything"
          size="lg"
          InputRightElement={<Button onPress={() => clickRecord()}>Mic</Button>}
        />
      </Center>

      <Modal isOpen={showModal} onClose={() => finishRecord()}>
        <Modal.Content>
          <Modal.Header>Speak your thoughts</Modal.Header>
          <Modal.Body>
            <Button onPress={() => setShowModal(false)}>Stop Recording</Button>
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
