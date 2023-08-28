import { style, createVar } from '@vanilla-extract/css';
import OP from 'open-props';

export const accentVar = createVar();
export const onAccent = createVar();

export const styles = style({
  vars: {
    [accentVar]: OP.indigo8,
    [onAccent]: OP.indigo0,
  },
  backgroundColor: accentVar,
  color: onAccent,
  padding: `${OP.size4} ${OP.size8}`,
  borderRadius: OP.radius2,
  border: 'none',
  ':active': {
    vars: {
      [accentVar]: OP.indigo8,
      [onAccent]: 'white',
    },
  },
});
