import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterBtn: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    paddingVertical: 10,
  },
  itemAdvisor: {
    height: 70,
    flexDirection: 'row',
  },
  separator: {
    height: 10,
  },
  leftItemAdvisor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightItemAdvisor: {
    flex: 3,
    justifyContent: 'center',
    paddingEnd: 15,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
  },
  rightItemAdvisorBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  txtName: {
    fontSize: 18,
  },
  txtEmail: {
    fontSize: 12,
  },
  txtPhone: {
    fontSize: 12,
  },
  txtEmailModal: {
    fontSize: 14,
  },
  txtTitleGroupText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginEnd: 5,
  },
  txtPhoneModal: {
    fontSize: 14,
    flex: 1,
  },
  groupTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  onlineView: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  offlineBackground: {
    backgroundColor: 'red',
  },
  modalInfo: {
    width: '95%',
    height: '28%',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  titleModal: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerTitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  onlineViewModal: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    marginEnd: 8,
  },
  groupMoreInfo: {
    paddingHorizontal: 20,
  },
});
