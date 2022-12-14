import {lottie} from '@assets';
import {Block, Empty, Header} from '@components';
import ItemProduct from '@components/Common/ItemList/ItemProduct';
import {useIsFocused} from '@react-navigation/native';
import actions from '@redux/actions';
import {getSize} from '@utils/responsive';
import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';

const FavoriteScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.productFavorite?.data);
  const user = useSelector(state => state.tokenUser?.data);
  const focus = useIsFocused();

  useEffect(() => {
    if (focus) {
      dispatch({type: actions.GET_PRODUCT_FAVORITE, user});
    }
  }, [dispatch, focus, user]);

  const _renderItem = ({item, index}) => {
    return (
      <ItemProduct
        key={index}
        review={item.reviews}
        style={styles.style_item(index)}
        images={item.images[0]}
        nameProduct={item.name}
        price={item.price}
        productSold={item.productSold}
        sellOff={item.sellOff}
        _id={item._id}
      />
    );
  };
  const renderEmptyContainer = () => {
    return (
      <Empty
        lottie={lottie.empty_Favorite}
        content="Bạn chưa yêu thích sản phẩm nào"
        imageStyles={{width: getSize.s(200), height: getSize.s(200)}}
      />
    );
  };
  return (
    <Block flex>
      <Header checkBackground canGoBack title="Yêu Thích" />
      {data && data?.length ? (
        <FlatList
          data={data}
          numColumns={2}
          renderItem={_renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item._id.toString()}
        />
      ) : (
        renderEmptyContainer()
      )}
    </Block>
  );
};

export default FavoriteScreen;
