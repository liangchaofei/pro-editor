import { createStyles } from '../../../theme';

export const useStyle = createStyles(({ token, css, cx, prefixCls }) => {
  const prefix = `${prefixCls}-${token.editorPrefix}`;
  return {
    demo: cx(
      `${prefix}-demo-data`,
      css({
        maxWidth: '120px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeSM,
      }),
    ),
  };
});
