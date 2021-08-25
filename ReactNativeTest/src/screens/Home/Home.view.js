import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {Header, Card, Modal} from '../../components';
import {IconSVG} from '../../assets/iconSvg';
import {Images} from '../../assets/images';
import {HomeLogic} from './Home.logic';
import {styles} from './Home.styles';
import {LANDSCAPE, PORTRAIT} from 'react-native-orientation-locker';

const _Home = props => {
  const {
    dataAdvisor,
    selectedAdvisor,
    setSelectedAdvisor,
    _onPressFilter,
    _closeModalInfo,
    orientation,
  } = HomeLogic(props);

  const _renderButtonRight = () => {
    return (
      <TouchableOpacity onPress={_onPressFilter} style={styles.filterBtn}>
        <IconSVG.Filter width={24} height={24} color={'#333'} />
      </TouchableOpacity>
    );
  };

  const _renderItemAdvisor = ({item}) => {
    const avatar = item.avatarUrl?.url
      ? {uri: item.avatarUrl.url}
      : Images.defaultAvatar;
    return (
      <Card onPress={() => setSelectedAdvisor(item)} style={styles.itemAdvisor}>
        <View style={styles.leftItemAdvisor}>
          <Image
            source={avatar}
            style={styles.avatar}
            resizeMode={item.avatarUrl?.url ? undefined : 'contain'}
          />
        </View>
        <View style={styles.rightItemAdvisor}>
          <Text style={styles.txtName}>{item.displayName}</Text>
          {(item.email || item.phone) && (
            <View style={styles.rightItemAdvisorBottom}>
              <Text style={styles.txtEmail}>{item.email}</Text>
              <Text style={styles.txtPhone}>{item.phone}</Text>
            </View>
          )}
        </View>
        <View
          style={[
            styles.onlineView,
            !item.onlineStatus && styles.offlineBackground,
          ]}
        />
      </Card>
    );
  };

  const renderSeparator = () => <View style={styles.separator} />;

  const avatar = selectedAdvisor?.avatarUrl?.url
    ? {uri: selectedAdvisor.avatarUrl.url}
    : Images.defaultAvatar;

  const _renderHeaderModalInfo = () => {
    return (
      <View style={styles.headerTitleView}>
        <View
          style={[
            styles.onlineViewModal,
            !selectedAdvisor?.onlineStatus && styles.offlineBackground,
          ]}
        />
        <Text style={styles.titleModal}>{selectedAdvisor?.displayName}</Text>
      </View>
    );
  };

  const _keyExtractor = advisor => advisor.sys.id;

  const hasCategory = !!selectedAdvisor?.categoriesCollection?.items?.length;
  const hasSkills = !!selectedAdvisor?.skillsCollection?.items?.length;
  const hasServices = !!selectedAdvisor?.servicesCollection?.items?.length;

  const getModalHeight = () => {
    return {height: orientation == LANDSCAPE ? '55%' : '28%'};
  };

  return (
    <View style={styles.container}>
      <Header title={'Advisors'} renderButtonRight={_renderButtonRight} />
      <FlatList
        contentContainerStyle={styles.flatList}
        data={dataAdvisor}
        renderItem={_renderItemAdvisor}
        keyExtractor={_keyExtractor}
        ItemSeparatorComponent={renderSeparator}
      />
      <Modal
        style={[styles.modalInfo, getModalHeight()]}
        isOpen={!!selectedAdvisor}
        onPressClose={_closeModalInfo}
        onClosed={_closeModalInfo}
        renderHeader={_renderHeaderModalInfo}
        position={'center'}>
        {!!selectedAdvisor && (
          <>
            <View style={styles.itemAdvisor}>
              <View style={styles.leftItemAdvisor}>
                <Image
                  source={avatar}
                  style={styles.avatar}
                  resizeMode={
                    selectedAdvisor.avatarUrl?.url ? undefined : 'contain'
                  }
                />
              </View>
              <View style={styles.rightItemAdvisor}>
                <View style={styles.groupTextRow}>
                  <Text style={styles.txtTitleGroupText}>Email: </Text>
                  <Text style={styles.txtEmailModal}>
                    {selectedAdvisor.email ?? 'Unknown'}
                  </Text>
                </View>
                <View style={styles.groupTextRow}>
                  <Text style={styles.txtTitleGroupText}>Phone: </Text>
                  <Text style={styles.txtPhoneModal}>
                    {selectedAdvisor.phone ?? 'Unknown'}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.groupMoreInfo}>
              <View style={styles.groupTextRow}>
                <Text style={styles.txtTitleGroupText}>Category: </Text>
                <Text numberOfLines={2} style={styles.txtPhoneModal}>
                  {!hasCategory
                    ? 'Unknown'
                    : selectedAdvisor.categoriesCollection?.items
                        ?.map(cate => cate.displayName)
                        .join(', ')}
                </Text>
              </View>
              <View style={styles.groupTextRow}>
                <Text style={styles.txtTitleGroupText}>Skills: </Text>
                <Text numberOfLines={2} style={styles.txtPhoneModal}>
                  {!hasSkills
                    ? 'Unknown'
                    : selectedAdvisor.skillsCollection?.items
                        ?.map(cate => cate.displayName)
                        .join(', ')}
                </Text>
              </View>
              <View style={styles.groupTextRow}>
                <Text style={styles.txtTitleGroupText}>Services: </Text>
                <Text numberOfLines={2} style={styles.txtPhoneModal}>
                  {!hasServices
                    ? 'Unknown'
                    : selectedAdvisor.servicesCollection?.items
                        ?.map(cate => cate.name)
                        .join(', ')}
                </Text>
              </View>
            </View>
          </>
        )}
      </Modal>
    </View>
  );
};

export const Home = React.memo(_Home);
