import { Icon, SelectViewBox } from './style';
import HorizontalIcon from '../../assets/icons/horizontal-icon.svg';
import HorizontalHoverIcon from '../../assets/icons/horizontal-hover-icon.svg';
import VerticalIcon from '../../assets/icons/vertical-icon.svg';
import VerticalHoverIcon from '../../assets/icons/vertical-hover-icon.svg';

export default function SelectView(props) {
  const { selected: { horizontal, vertical }, onSetSelectedView } = props;
  let selected = props.selected;

  const handleChangeView = e => {
    const name = e.target.getAttribute('name');

    if (name.includes('vertical')) {
      if (vertical) return;
      selected = { vertical: !selected[name], horizontal: false };
    }

    if (name.includes('horizontal')) {
      if (horizontal) return;
      selected = { horizontal: !selected[name], vertical: false };
    }

    onSetSelectedView(selected);
  }

  return (
    <SelectViewBox>
      <Icon name="horizontal" selected={horizontal} src={HorizontalIcon} hoverSrc={HorizontalHoverIcon} onClick={handleChangeView} />
      <Icon name="vertical" selected={vertical} src={VerticalIcon} hoverSrc={VerticalHoverIcon} onClick={handleChangeView} />
    </SelectViewBox>
  );
};