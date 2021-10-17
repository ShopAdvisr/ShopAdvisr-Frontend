import React from 'react';
import { Dimensions } from 'react-native';
import {
  NativeBaseProvider,
  View,
  Box,
  Button,
  Heading,
  Modal,
  Image,
  VStack,
  HStack,
  Center,
  Text,
  Icon,
  IconButton,
} from 'native-base';
import { CloseIcon } from 'root/components/Icon';

const ProductInfo = props => {
  const {
    children,
    productInfo,
    showProduct,
    disableShowProduct
  } = props;

  return (
    <>
      <Modal
        isOpen={showProduct}
        onClose={disableShowProduct}
        animationPreset="slide">
        <Modal.Content {...styles.modalContainer}>
          <VStack>
            <View {...styles.topBar}>
              <Center>
                <IconButton
                  onPress={disableShowProduct}
                  icon={<Icon as={CloseIcon} />}
                  borderRadius="full"
                />
              </Center>
            </View>
            <View {...styles.productOverviewContainer}>
              <Image
                source={{
                  uri: 'https://wallpaperaccess.com/full/317501.jpg',
                }}
                alt="Item"
                size="xl"
                {...styles.productImage}
              />
              <View w="auto">
                <Heading size="lg">{productInfo.name}</Heading>
              </View>
            </View>
            <Center>
              {children}
            </Center>
          </VStack>
        </Modal.Content>
      </Modal>
    </>
  );
};

const styles = {
  productImage: {
    borderRadius: 1000,
    mr: 4
  },
  modalContainer: {
    mt: Dimensions.get('window').height*0.4,
    h: Dimensions.get('window').height*0.6,
    w: Dimensions.get('window').width,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  productOverviewContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    m: 3
  },
};

export default ProductInfo;
