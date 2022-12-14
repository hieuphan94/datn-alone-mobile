import {BackgroundColorShop, IconForward} from '@assets/svg/common';
import {Block, Carousel, Empty, Text} from '@components';
import ItemVoucherFromShop from '@components/Common/ItemList/ItemVoucherFromShop';
import {routes} from '@navigation/routes';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import actions from '@redux/actions';
import SellingProduct from '@screens/Bottom/HomeScreens/components/SellingProduct';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import React, {useEffect} from 'react';
import {FlatList, Pressable, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ProductRelated from '../ProductDetails/components/ProductRelated';
import moment from 'moment';
import InforShop from './components/InforShop';
import SearchShop from './components/SearchShop';
import styles from './styles';
import {lottie} from '@assets';
import {getRandomItem} from '@utils/needed';

const ProductStore = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const shop = useSelector(state => state.infoShop?.data);
  const productShop = useSelector(state => state.productDetailsShop?.data);
  const user = useSelector(state => state.tokenUser?.data);
  const config = useSelector(state => state.config?.data);
  const shopVoucher = useSelector(state => state.shopVoucher?.data);
  const modeLoadingShop = useSelector(state => state.infoShop?.isLoading);
  const modeLoadingProductShop = useSelector(
    state => state.productDetailsShop?.isLoading,
  );
  const modeLoadingShopVoucher = useSelector(
    state => state.shopVoucher?.isLoading,
  );

  const modeLoading =
    modeLoadingShop || modeLoadingProductShop || modeLoadingShopVoucher;

  const {id} = route.params || {};

  const focus = useIsFocused();
  const result = getRandomItem(productShop);


  console.log(result, '\n---------------------------------------');

  useEffect(() => {
    if (id) {
      if (focus) {
        dispatch({
          type: actions.GET_SHOP_USERS_BY_ID,
          body: {
            shopId: id,
          },
        });
        dispatch({
          type: actions.GET_PRODUCT_DETAILS_BY_SHOP,
          params: {
            shopId: id,
          },
        });
        dispatch({
          type: actions.GET_SHOP_VOUCHERS,
          params: {
            shopId: id,
            user,
          },
        });
      }
    }
  }, [id, dispatch, focus, user]);

  const _renderBanner = () => {
    return (
      <Block marginTop={-18}>
        {shop?.banner && <Carousel shop data={shop?.banner} />}
      </Block>
    );
  };

  const _renderVoucher = ({item}) => {
    return (
      <ItemVoucherFromShop
        typeVoucher={item.content}
        timeVoucher={moment(item.expireDate).format('DD/MM/YYYY')}
      />
    );
  };

  const _renderTitleVoucher = () => {
    return (
      <Block paddingHorizontal={12} row space="between" marginBottom={10}>
        <Text
          lineHeight={20}
          size={16}
          fontType="bold"
          color={theme.colors.black}>
          M?? gi???m gi??
        </Text>
        {shopVoucher?.length != 0 && (
          <Pressable
            style={styles.wrapperTextVoucher}
            onPress={() =>
              navigation.navigate(routes.PROMO_SCREEN, {
                id: shop?._id,
                shopName: shop?.shopName,
                profilePicture: shop?.profilePicture,
              })
            }>
            <Text color={config?.backgroundcolor} lineHeight={18}>
              Xem th??m
            </Text>
            <Block alignCenter justifyCenter paddingLeft={4} paddingTop={3}>
              <IconForward
                width={15}
                height={15}
                color={config?.backgroundcolor}
              />
            </Block>
          </Pressable>
        )}
      </Block>
    );
  };

  const _renderVoucherShop = () => {
    return (
      <Block
        backgroundColor={theme.colors.white}
        paddingTop={12}
        marginBottom={10}
        marginTop={-30}>
        <_renderTitleVoucher />
        {shopVoucher?.length != 0 ? (
          <FlatList
            style={{marginLeft: getSize.s(12)}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={shopVoucher}
            renderItem={_renderVoucher}
            keyExtractor={item => item._id.toString()}
          />
        ) : (
          <Block alignCenter justifyCenter paddingBottom={15}>
            <Text size={12} color={theme.colors.gray}>
              Hi???n t???i c???a h??ng n??y ch??a c?? m?? gi???m n??o...
            </Text>
          </Block>
        )}
      </Block>
    );
  };

  return (
    <Block flex>
      {modeLoading ? (
        <Empty lottie={lottie.loading} content="?????i trong gi??y l??t..." />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <BackgroundColorShop width={width} height={getSize.s(375)} />
          <Block
            absolute
            width={width}
            style={{zIndex: getSize.s(99)}}
            paddingHorizontal={12}>
            <SearchShop idShop={id} />
            <InforShop data={shop} />
            <_renderBanner />
          </Block>
          <_renderVoucherShop />

          <Block backgroundColor={theme.colors.white}>
            {productShop && (
              <ProductRelated
                random={(productShop)}
                // productCategory={productShop}
                nameTitle="S???n ph???m b??n ch???y"
              />
            )}
          </Block>
          <Block marginVertical={10} backgroundColor={theme.colors.white}>
            {productShop && (
              <SellingProduct
                data={productShop}
                titleSelling="T???t c??? s???n ph???m"
              />
            )}
          </Block>
        </ScrollView>
      )}
    </Block>
  );
};

export default ProductStore;
