import React, { useState } from 'react';
import { IconButton, Icon, Center, View } from 'native-base';
import { RNCamera } from 'react-native-camera';
import { LightCameraIcon } from 'root/components/Icon';

const CameraPage = () => {
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
