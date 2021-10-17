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
  const { children, productInfo, showProduct, disableShowProduct } = props;

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
              <Center pr={2}>
                <Text>Aisle {productInfo.Aisle}</Text>
              </Center>
            </View>
            <View {...styles.productOverviewContainer}>
              <Image
                source={{
                  uri: productInfo['Image URL'],
                }}
                alt="Item"
                size="lg"
                {...styles.productImage}
              />
              <View maxWidth="70%">
                <Text {...styles.productTitle}>{productInfo.Product}</Text>
                <Text {...styles.productCategory}>{productInfo.Category}</Text>
              </View>
            </View>
            {/*<View style={{borderBottomColor: 'black', borderBottomWidth: 1}}/>*/}
            <HStack space={3} pl={2} pt={1}>
              <Text fontWeight="bold">{productInfo.Price}</Text>
            </HStack>
            <View {...styles.productDescription}>
              <Center>
              {productInfo['Old Price'] !== '' && (
                <Text>Sale! Was Originally {productInfo['Old Price']}</Text>
              )}
              <Text lineHeight={13} fontSize={11}>{productInfo.Description}</Text>
              {/*<Text>Product URL: {productInfo['Product URL']}</Text>*/}
              </Center>
            </View>
            <View pt={2} px={7}>
              {children}
            </View>
          </VStack>
        </Modal.Content>
      </Modal>
    </>
  );
};

const styles = {
  productImage: {
    borderRadius: 5,
    m: 0,
    mr: 4,
  },
  productTitle: {
    noOfLines: 3,
    fontSize: 'lg',
    fontWeight: 'semibold',
    lineHeight: 18
  },
  productDescription: {
    p: 2,
    mt: 2
  },
  productCategory: {
    color: 'muted.400'
  },
  modalContainer: {
    mt: Dimensions.get('window').height * 0.4,
    h: Dimensions.get('window').height * 0.6,
    w: Dimensions.get('window').width,
    px: 2
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productOverviewContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    mx: 2,
  },
  addToCartButton: {
    borderRadius: 1000,
    w: '50%',
    p: 2,
    _text: {
      textAlign: 'center',
      color: 'muted.50',
    },
    bg: {
      linearGradient: {
        colors: ['primary.300', 'violet.800'],
        start: [0, 0],
        end: [1, 1],
      },
    },
  },
};

export default ProductInfo;
