import {Correct, DownArrowFill, Fillter, Sort} from '@assets/svg/common';
import {Block, Text} from '@components';
import {theme} from '@theme';
import React, {useState} from 'react';
import {LayoutAnimation, Platform, Pressable, UIManager} from 'react-native';
import CheckBoxCustom from '../CheckBoxCustom';
import {useSelector} from 'react-redux';
const val = [
  {
    key: '1',
    text: 'Giá thấp đến cao',
  },
  {
    key: '2',
    text: 'Giá cao đến thấp',
  },
];

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const SortComponent = ({
  refRBSheet,
  idProvince,
  idCate,
  price,
  check,
  setCheck,
  titleCategorySub,
}) => {
  const [show, setShow] = useState(false);
  const config = useSelector(state => state.config?.data);

  return (
    <Block>
      <Block
        row
        alignCenter
        backgroundColor={theme.colors.white}
        paddingHorizontal={20}
        paddingVertical={10}
        space={'between'}>
        <Block row alignCenter>
          <Block row alignCenter>
            <Sort />
            <Text color={theme.colors.lightGray} paddingLeft={10} size={14}>
              Sắp xếp
            </Text>
          </Block>
          <Pressable
            onPress={() => {
              LayoutAnimation.easeInEaseOut();
              setShow(!show);
            }}>
            <Block row paddingLeft={20} alignCenter>
              <Text size={14} fontType={'medium'} marginRight={1}>
                Giá
              </Text>
              <Block paddingTop={3}>
                <DownArrowFill />
              </Block>
            </Block>
          </Pressable>
        </Block>
        <Block>
          {!titleCategorySub && (
            <Pressable onPress={() => refRBSheet.current.open()}>
              <Fillter color={theme.colors.black} />
            </Pressable>
          )}
          {idProvince || idCate || price ? (
            <Block
              backgroundColor={config?.backgroundcolor}
              absolute
              padding={1.5}
              top={-6}
              right={-4}
              radius={10}>
              <Correct width={10} height={10} color={theme.colors.white} />
            </Block>
          ) : null}
        </Block>
      </Block>
      {show && (
        <Block marginTop={1} backgroundColor={theme.colors.white} row>
          <CheckBoxCustom PROP={val} value={check} setValue={setCheck} />
        </Block>
      )}
    </Block>
  );
};

export default SortComponent;
