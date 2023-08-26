import isEqual from 'lodash.isequal';
import type { FC } from 'react';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';
import { List, SortableItem } from '../components';
import type { Store } from '../store';
import { useStore } from '../store';

const selector = (s: Store) => ({
  renderItem: s.renderItem,
  getItemStyles: s.getItemStyles,
  hideRemove: s.hideRemove,
  dispatchListData: s.dispatchListData,
});

interface SortableListProps {
  prefixCls: string;
}

const SortableList: FC<SortableListProps> = ({ prefixCls }) => {
  const { dispatchListData, renderItem, hideRemove, getItemStyles } = useStore(selector, shallow);

  const items = useStore((s) => s.value, isEqual);

  return (
    <List prefixCls={prefixCls}>
      {items.map((item, index) => {
        return (
          <SortableItem
            key={item.id}
            id={item.id}
            item={item}
            index={index}
            hideRemove={hideRemove}
            renderItem={renderItem}
            getItemStyles={getItemStyles}
            onRemove={() => dispatchListData({ type: 'removeItem', index })}
            useDragOverlay={true}
            prefixCls={prefixCls}
          />
        );
      })}
    </List>
  );
};

export default memo(SortableList);
