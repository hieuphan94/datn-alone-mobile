import {icons} from '@assets';
import {Block, Empty, Header, Text} from '@components';
import ItemPromoScreen from '@components/Common/ItemList/ItemPromoScreen';
import {lottie} from '@assets';
import {theme} from '@theme';
import {Toast} from '@utils/helper';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import actions from '@redux/actions';
import {FlatList} from 'react-native-gesture-handler';
import OptionsMenu from 'react-native-option-menu';
import styles from './styles';
import {SelectCircle} from '@assets/svg/common';
import {getSize} from '@utils/responsive';

const MyVouchers = () => {
  const expiry = () => {
    Toast('Hạn sử dụng mã giảm giá');
  };
  const allPromotion = () => {
    Toast('Tất cả mã giảm giá');
  };

  const dispatch = useDispatch();
  const user = useSelector(state => state.tokenUser?.data);
  const myvoucher = useSelector(state => state.getmyVoucher?.data);

  useEffect(() => {
    dispatch({
      type: actions.GET_MY_VOUCHER,
      user,
    });
  }, [user, dispatch]);

  const renderItem = ({item, index}) => {
    const isCheck = index === myvoucher?.length - 1;
    return (
      <ItemPromoScreen
        name={item.shopName}
        title={item.content}
        date={moment(item.expireDate).format('DD/MM/YYYY')}
        image={item.image}
        index={index}
        isCheck={isCheck}
        save={item.save}
        idShop={item.shopId}
      />
    );
  };

  const _renderEmpty = () => {
    return (
      <Empty
        lottie={lottie.cancel}
        content="Bạn chưa có Voucher nào"
        imageStyles={{width: getSize.s(220), height: getSize.s(220)}}
      />
    );
  };

  return (
    <Block flex backgroundColor={'#E9EAEB'}>
      <Header checkBackground canGoBack title="Voucher của tôi" />
      {myvoucher && myvoucher?.length ? (
        <>
          <Block
            paddingHorizontal={12}
            paddingVertical={12}
            row
            backgroundColor={theme.colors.white}>
            <SelectCircle />
            <Block paddingLeft={8} justifyCenter>
              <Text size={13} color={theme.colors.placeholder} lineHeight={18}>
                Sắp xếp:
              </Text>
            </Block>
            <Block paddingHorizontal={3} justifyCenter>
              <Text size={13} color={theme.colors.black} lineHeight={18}>
                Tất cả
              </Text>
            </Block>

            <Block paddingHorizontal={1} justifyCenter alignCenter>
              <OptionsMenu
                button={icons.caret_down}
                buttonStyle={styles.buttonStyle}
                destructiveIndex={1}
                options={['Tất cả', 'Hạn sử dụng', 'Hủy thao tác']}
                actions={[allPromotion, expiry]}
              />
            </Block>
          </Block>
          <FlatList
            data={myvoucher}
            renderItem={renderItem}
            keyExtractor={item => item._id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </>
      ) : (
        <_renderEmpty />
      )}
    </Block>
  );
};

export default MyVouchers;
