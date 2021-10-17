import React, { useState } from 'react';
import { IconButton, Icon, Center, View } from 'native-base';
import { RNCamera } from 'react-native-camera';
import { LightCameraIcon } from 'root/components/Icon';
import { useCtx } from 'root/utils/context';
import RNFetchBlob from 'rn-fetch-blob';
import { imageSearch } from '../utils/requests';
import { useHistory } from 'react-router-native';

const CameraPage = () => {
  const history = useHistory();
  const { setSearchResults } = useCtx();
  const takePicture = async cameraRef => {
    if (cameraRef == null) {
      return;
    }

    try {
      const data = await cameraRef.takePictureAsync({
        quality: 0.5,
        base64: true,
      });
      console.debug('data uri', data.uri);
      const encoded = await RNFetchBlob.fs.readFile(data.uri, 'base64');
      let res = {};
      try {
        res = await imageSearch(encoded);
        console.log(res);
        setSearchResults([]);
        setSearchResults(res.items);
        console.log(res.items);
        history.push('/search');
      } catch (e) {
        console.log(e);
      }
    } catch (e) {
      console.debug('failed to take picture', e);
    }
  };

  return (
    <>
      <Center>
        <RNCamera type={RNCamera.Constants.Type.back} style={styles.camera}>
          {({ camera, status }) => (
            <Center>
              <IconButton
                style={styles.cameraButton}
                borderRadius="full"
                borderWidth={2}
                borderColor="cyan.500"
                onPress={() => takePicture(camera)}>
                <Icon as={LightCameraIcon} style={{ textAlign: 'center' }} />
              </IconButton>
            </Center>
          )}
        </RNCamera>
      </Center>
    </>
  );
};

const styles = {
  camera: {
    width: '100%',
    height: '100%',
  },
  cameraButton: {
    position: 'relative',
    marginTop: '150%',
  },
};

export default CameraPage;
