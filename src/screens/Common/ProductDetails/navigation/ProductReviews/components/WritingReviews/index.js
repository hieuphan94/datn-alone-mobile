import {Block, Text, Button} from '@components';
import React, {useState} from 'react';
import {Image, Pressable, TextInput, ScrollView} from 'react-native';
import {theme} from '@theme';
import styles from './styles';
import {Camering} from '@assets/svg/common';
import {useImagePicker} from '@hooks';
import StarRating from '../StarRating';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@redux/actions';
import storage from '@react-native-firebase/storage';
import {Toast} from '@utils/helper';

const WritingReviews = ({_id, check, isClosed}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.tokenUser?.data);
  const isLoading = useSelector(state => state.addProductReview?.isLoading);
  const isLoadingUpdate = useSelector(
    state => state.updateProductReview?.isLoading,
  );
  const {openMultiPicker, pictures, cleanUps} = useImagePicker();
  const [rating, setRating] = useState(check ? check?.rating : 0);
  const [review, setReview] = useState(check ? check?.review : '');

  const _onPress = () => {
    isClosed.current.close();
  };

  const onSubmit = async () => {
    if (rating < 1) {
      Toast('Vui lòng chọn thang điểm đánh giá');
    } else if (pictures) {
      let images = [];

      for (let index = 0; index < pictures?.length; index++) {
        const filename = pictures[index]?.path.substring(
          pictures[index]?.path.lastIndexOf('/') + 1,
        );

        const path = 'ProductReview/' + filename;
        const response = await fetch(pictures[index]?.path);
        const file = await response.blob();
        let upload = await storage().ref(path).put(file);
        const url = await storage().ref(path).getDownloadURL();
        images.push(url);
      }

      const data = {
        userId: user,
        rating: rating,
        review: review,
        image: images,
      };

      dispatch({
        type: actions.ADD_PRODUCT_REVIEW,
        user,
        body: {
          productId: _id,
          review: JSON.stringify(data),
        },
        onFinish: () => cleanUps(),
      });

      _onPress();
    } else {
      const data = {
        userId: user,
        rating: rating,
        review: review,
      };

      dispatch({
        type: actions.ADD_PRODUCT_REVIEW,
        user,
        body: {
          productId: _id,
          review: JSON.stringify(data),
        },
      });
      _onPress();
    }
  };

  const onEdit = async () => {
    if (rating < 1) {
      Toast('Vui lòng chọn thang điểm đánh giá');
    } else if (pictures) {
      let multiline = [];

      for (let index = 0; index < pictures?.length; index++) {
        const filename = pictures[index]?.path.substring(
          pictures[index]?.path.lastIndexOf('/') + 1,
        );

        const path = 'ProductReview/' + filename;
        const response = await fetch(pictures[index]?.path);
        const file = await response.blob();
        let upload = await storage().ref(path).put(file);
        const url = await storage().ref(path).getDownloadURL();
        multiline.push(url);
      }

      const DataObject = {
        _id: check?._id,
        userId: user,
        rating: rating,
        review: review,
        image: multiline,
      };

      dispatch({
        type: actions.UPDATE_PRODUCT_REVIEW,
        user,
        body: {
          productId: _id,
          review: JSON.stringify(DataObject),
        },
        onFinish: () => cleanUps(),
      });

      _onPress();
    } else {
      const DataObject = {
        _id: check?._id,
        userId: user,
        rating: rating,
        review: review,
      };

      dispatch({
        type: actions.UPDATE_PRODUCT_REVIEW,
        user,
        body: {
          productId: _id,
          review: JSON.stringify(DataObject),
        },
      });
      _onPress();
    }
  };

  const _renderMapImages = (item, index) => {
    return (
      <Block key={index} marginRight={12}>
        <Image source={{uri: item.path}} style={styles.imgReviews} />
      </Block>
    );
  };

  const _renderCamering = () => {
    return (
      <Block marginTop={16} radius={4} alignCenter justifyCenter>
        <Pressable onPress={openMultiPicker} style={styles.wrapperCamera}>
          <Camering />
        </Pressable>
        <Text fontType="semibold" size={12}>
          Thêm ảnh
        </Text>
      </Block>
    );
  };
  return (
    <Block flex paddingHorizontal={12}>
      <>
        <Block alignCenter>
          <StarRating
            startingValue={rating}
            imageSize={36}
            readonly
            onFinishRating={rating => setRating(rating)}
          />
          <Text
            size={18}
            fontType="semibold"
            paddingHorizontal={0}
            center
            marginTop={32}
            lineHeight={22}
            marginBottom={16}>
            {'Hãy chia sẻ ý kiến của bạn về sản phẩm'}
          </Text>
        </Block>
        <Block
          style={styles.shadow}
          height={155}
          backgroundColor={theme.colors.white}
          radius={8}
          paddingHorizontal={12}
          marginBottom={32}>
          <TextInput
            style={styles.input}
            placeholder="Nhập nội dung đánh giá"
            value={review}
            onChangeText={text => setReview(text)}
            multiline
          />
        </Block>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsHorizontalScrollIndicator={false}
          horizontal>
          <Block row wrap alignCenter>
            {pictures?.map(_renderMapImages)}
            <_renderCamering />
          </Block>
        </ScrollView>
        <Button
          disabled={check ? isLoadingUpdate : isLoading}
          onPress={check ? onEdit : onSubmit}
          title={check ? 'SỬA NHẬN XÉT' : 'GỬI NHẬN XÉT'}
          height={45}
          shadow
          style={styles.button}
          elevation={10}
        />
      </>
    </Block>
  );
};
export default WritingReviews;