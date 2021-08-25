import React from 'react';
import data from '../../constant/data.json';
import {ContextApp} from '../../constant/App';

export const HomeLogic = props => {
  const contextData = React.useContext(ContextApp);
  const [selectedAdvisor, setSelectedAdvisor] = React.useState();
  const [dataAdvisor, setDataAdvisor] = React.useState([]);
  const [filter, setFilter] = React.useState({
    name: '',
    category: [],
    onlineStatus: undefined,
  });
  const rootDataAdvisor = data.data.advisorProfileCollection.items;

  React.useEffect(() => {
    const filterData = rootDataAdvisor.filter(advisor => {
      const filterNameCheck = advisor.displayName
        .toLocaleLowerCase()
        .includes(filter.name.toLocaleLowerCase());

      const categoryCheck = !!filter.category.length
        ? advisor.categoriesCollection.items.some(cate =>
            filter.category.includes(cate.sys.id),
          )
        : true;

      const onlineStatusCheck =
        filter.onlineStatus != undefined
          ? filter.onlineStatus == advisor.onlineStatus
          : true;

      return filterNameCheck && categoryCheck && onlineStatusCheck;
    });
    setDataAdvisor(filterData);
  }, [filter]);

  const _onPressFilter = () =>
    props.navigation.navigate('Filter', {
      filterData: filter,
      onSaveFilter: value => {
        setFilter(value);
      },
    });

  const _closeModalInfo = () => setSelectedAdvisor(undefined);

  return {
    _onPressFilter,
    dataAdvisor,
    setSelectedAdvisor,
    selectedAdvisor,
    _closeModalInfo,
    orientation: contextData.orientation,
  };
};
