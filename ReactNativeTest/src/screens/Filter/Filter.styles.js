import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  cardDefault: {
    width: '95%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
  },
  input: {
    height: 40,
  },
  btnSelectCategory: {
    width: '100%',
    height: 50,
    borderBottomColor: '#d9d9d9',
    borderBottomWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  txtCategory: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  txtCategoryPlaceholder: {
    color: '#9e9e9e',
  },
  groupBtn: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    height: 38,
    width: '95%',
  },
  btnSave: {
    width: '48%',
    backgroundColor: '#00a031',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnReset: {
    width: '48%',
    backgroundColor: '#9e9e9e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  txtSaveBtn: {
    color: '#fff',
    fontWeight: 'bold',
  },
  btnSelectOnlineOffline: {
    width: '100%',
    height: 50,
    borderBottomColor: '#d9d9d9',
    borderBottomWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  txtOnlineOffline: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  modalStyleStatus: {
    height: '20%',
    width: '100%',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  modalStyleCategory: {
    height: '40%',
    width: '100%',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  btnItemOnlineOffline: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundSelected: {
    backgroundColor: '#fff255c2',
  },
  itemCategory: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
