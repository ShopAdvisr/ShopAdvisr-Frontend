import React, { useState } from 'react';
import { Button } from 'native-base';
import { RNCamera } from 'react-native-camera';

const Camera = () => {
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
      <RNCamera type={RNCamera.Constants.Type.back}>
        {({ camera, status }) => (
          <Button onPress={() => takePicture(camera)}>CAM</Button>
        )}
      </RNCamera>
    </>
  );
};

export default Camera;
