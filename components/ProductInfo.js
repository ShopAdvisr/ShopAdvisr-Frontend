import React from 'react';
import {
  NativeBaseProvider,
  Box,
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
        <Modal.Content m={0} mt="25%" h="50%">
          <VStack space={4}>
            <Center>
              <IconButton
                onPress={() => setShowProduct(false)}
                icon={<Icon as={CloseIcon} />}
                borderRadius="full"
              />
            </Center>
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
};

export default ProductInfo;
