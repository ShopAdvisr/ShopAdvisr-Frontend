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

const ProductInfo = ({ productInfo, showProduct, setShowProduct }) => {
  return (
    <>
      <Modal
        isOpen={showProduct}
        onClose={() => setShowProduct(false)}
        animationPreset="slide">
        <Modal.Content {...styles.modalContainer}>
          <VStack space={4}>
            <View {...styles.topBar}>
              <Center>
                <IconButton
                  onPress={() => setShowProduct(false)}
                  icon={<Icon as={CloseIcon} />}
                  borderRadius="full"
                />
              </Center>
            </View>
            <Center bg="muted.100" rounded="md" shadow={3}>
              <HStack alignItems="center" space={10}>
                <Center w={'1/3'}>
                  <Image
                    source={{
                      uri: 'https://wallpaperaccess.com/full/317501.jpg',
                    }}
                    {...styles.productImage}
                    alt="Item"
                    size="xl"
                  />
                </Center>
                <Center>
                  <Text>peepee</Text>
                </Center>
              </HStack>
            </Center>
            <Center>
              <Button {...styles.addToCartButton}>Add to Cart</Button>
              <Box 
                bg={{
                  linearGradient: {
                    colors: ['primary.300', 'violet.800'],
                    start: [0, 0],
                    end: [1, 1]
                  }
                }}
              >
                benis
              </Box>
            </Center>
          </VStack>
        </Modal.Content>
      </Modal>
    </>
  );
};

const styles = {
  productImage: {
    minWidth: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    borderRadius: 50,
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
  addToCartButton: {
    borderRadius: 1000,
    w: "50%",
    bg: {
      linearGradient: {
        colors: ['primary.300', 'violet.800'],
        start: [0, 0],
        end: [1, 1]
      }
    }
  }
};

export default ProductInfo;
