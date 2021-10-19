import {icons} from '@assets';
import {Block, Button, Text} from '@components';
import ItemProduct from '@components/Common/ItemList/ItemProduct';
import {routes} from '@navigation/routes';
import {theme} from '@theme';
import React from 'react';
import {FlatList, Image, Platform, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const uri =
  'https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/131621153_835496243935495_7699482739742171687_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=0debeb&_nc_ohc=UVVSJqLEZkwAX8Uihvr&_nc_ht=scontent.fdad3-4.fna&oh=5caff79316561014d86e4e175b0cdc36&oe=6191B392';
const data = [
  {
    image:
      'https://salt.tikicdn.com/cache/280x280/ts/product/17/6d/36/179b87629f8780608d63943662103ce4.jpg',
    title: 'Smart Tivi Casper HD 32 inch 32HX6200',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/280x280/ts/product/e4/93/74/d869ef799a8b1f7625146e97f53fcf04.png',
    title:
      'Áo thun nam thể thao trơn, cổ tròn đẹp, trẻ trung, mặc thoáng mát, thấm hút tốt, đủ size 25kg-92kg (Trắng)',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/280x280/ts/product/86/78/40/0df5a90d7bd5d327de2d25d510dd9b65.jpg',
    title: 'Điện Thoại Samsung Galaxy M31 (6GB/128GB) - Hàng Chính Hãng',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/280x280/ts/product/82/d5/05/18c7abbd948c6e5dae557244a8e3ac44.jpg',
    title: 'KHẨU TRANG Y TẾ WAKAMONO - (4 Lớp, Hộp 10 Cái)',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/280x280/ts/product/d3/f6/d5/9fd75deca506264412da501a2a429c65.jpg',
    title:
      'Áo thun tay lỡ nữ freesize - Áo phông form rộng dáng Unisex, mặc lớp, nhóm, cặp, couple thêu hình rau củ 6 màu',
  },
];

const _renderItem = ({item}) => (
  <ItemProduct
    image={item.image}
    nameProduct={item.title}
    fashsale
    left={-0.75}
    style={styles.styleitem}
  />
);

const ShopProduct = () => {
  const navigation = useNavigation();
  return (
    <Block marginBottom={10}>
      <Block paddingHorizontal={12}>
        <Block row space="between">
          <Block row>
            <Block
              alignCenter
              justifyCenter
              radius={70}
              width={70}
              height={70}
              borderWidth={0.5}
              borderColor={theme.colors.lightGray}>
              <Image
                source={{
                  uri,
                }}
                style={styles.avatarShop}
              />
            </Block>
            <Block justifyCenter marginLeft={10}>
              <Text fontType="bold">Thuỳ Dung</Text>
              <Block row alignCenter>
                <Image
                  source={icons.location}
                  style={styles.iconLocation}
                  resizeMode="contain"
                />
                <Text paddingHorizontal={5} color={theme.colors.lightGray}>
                  Hà Nội
                </Text>
              </Block>
            </Block>
          </Block>
          <Button
            onPress={() => navigation.navigate(routes.PRODUCT_STORE)}
            style={styles.btn}
            titleStyle={{color: theme.colors.pink}}
            title="Xem Shop"
          />
        </Block>
        <Block row alignCenter marginTop={10} space="between">
          <Block flex>
            <Block alignCenter justifyCenter>
              <Text size={16} fontType="semibold" color={theme.colors.pink}>
                1,2k
              </Text>
              <Text marginTop={5} color={theme.colors.lightGray}>
                Sản phẩm
              </Text>
            </Block>
          </Block>
          <Block
            width={1}
            height="100%"
            backgroundColor={theme.colors.lightGray}
          />
          <Block flex>
            <Block alignCenter justifyCenter>
              <Text size={16} fontType="semibold" color={theme.colors.pink}>
                1,2k
              </Text>
              <Text marginTop={5} color={theme.colors.lightGray}>
                Đánh giá
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
      <Block height={10} marginTop={10} backgroundColor={theme.colors.smoke} />

      <Block paddingHorizontal={12} paddingTop={10}>
        <Block row alignCenter space="between">
          <Text size={16} fontType="bold">
            Các sản phẩm khác của shop
          </Text>
          <Pressable>
            <Block row alignCenter>
              <Text color={theme.colors.pink}>Xem tất cả</Text>
              <Image
                source={icons.next}
                style={styles.iconnext}
                resizeMode="contain"
              />
            </Block>
          </Pressable>
        </Block>
        <Block marginTop={10}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            maxToRenderPerBatch={5}
            updateCellsBatchingPeriod={30}
            initialNumToRender={6}
            disableVirtualization={false}
            windowSize={5}
            removeClippedSubviews={Platform.OS === 'ios' ? true : false}
            renderItem={_renderItem}
            keyExtractor={(item, index) => String(index)}
          />
        </Block>
      </Block>
    </Block>
  );
};

export default ShopProduct;
