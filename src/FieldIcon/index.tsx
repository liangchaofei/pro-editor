import Icon from '@ant-design/icons';
import { APIFieldType, themeToken, withProvider } from '@ant-design/pro-editor';
import classNames from 'classnames';
import type { CSSProperties } from 'react';
import React from 'react';
import {
  TypeAny,
  TypeAnyArr,
  TypeArray,
  TypeBool,
  TypeBoolArr,
  TypeNum,
  TypeNumArr,
  TypeObj,
  TypeObjArr,
  TypeSting,
  TypeStingArr,
} from './icons';

import { useStyle } from './style';

interface FieldIconProps {
  /**
   * 类名
   */
  className?: string;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * API 字段类型
   */
  type?: APIFieldType | string;
}

const FieldIcon: React.FC<FieldIconProps> = (props) => {
  const { type, className, style: customStyle } = props;

  const { styles } = useStyle();

  const style: CSSProperties = {};
  let IconComponent = TypeAny;
  switch (type) {
    case APIFieldType.bool:
      IconComponent = TypeBool;
      style.color = themeToken.colorTypeBoolean;
      break;
    case APIFieldType.number:
    case APIFieldType.integer:
      IconComponent = TypeNum;
      style.color = themeToken.colorTypeNumber;
      break;
    case APIFieldType.string:
      IconComponent = TypeSting;
      style.color = themeToken.colorTypeString;
      break;
    case APIFieldType.boolArray:
      IconComponent = TypeBoolArr;
      style.color = themeToken.colorTypeBoolArray;
      break;
    case APIFieldType.integerArray:
    case APIFieldType.numberArray:
      IconComponent = TypeNumArr;
      style.color = themeToken.colorTypeNumberArray;
      break;
    case APIFieldType.stringArray:
      IconComponent = TypeStingArr;
      style.color = themeToken.colorTypeStringArray;
      break;
    case APIFieldType.array:
      IconComponent = TypeArray;
      break;
    case APIFieldType.object:
      IconComponent = TypeObj;
      break;
    case APIFieldType.objectArray:
      IconComponent = TypeObjArr;
      break;
    case APIFieldType.any:
      IconComponent = TypeAny;
      break;
    case APIFieldType.anyArray:
      IconComponent = TypeAnyArr;
      break;
    default:
      break;
  }

  return (
    <Icon
      component={IconComponent}
      style={{ ...style, ...customStyle }}
      className={classNames(className, styles.icon)}
    />
  );
};

export default withProvider(FieldIcon) as React.FC<FieldIconProps>;
