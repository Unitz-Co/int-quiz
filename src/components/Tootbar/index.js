import { ToolbarBox, LeftItem, RightItem } from './style';
import Filter from '../Filters';
import SearchBox from '../SearchBox';
import SelectView from '../SelectView';

export default function Toolbar(props) {
  const { originalData, selected, onSetSelectedView, onFilterData, keyWord, onSetKeyWord, status, onSetStatus  } = props;

  return (
    <ToolbarBox>
      <LeftItem>
        <Filter keyWord={keyWord} originalData={originalData} onFilterData={onFilterData} onSetStatus={onSetStatus} />
        <SearchBox originalData={originalData} onFilterData={onFilterData} onSetKeyWord={onSetKeyWord} status={status} />
      </LeftItem>
      <RightItem><SelectView selected={selected} onSetSelectedView={onSetSelectedView} /></RightItem>
    </ToolbarBox>
  );
};