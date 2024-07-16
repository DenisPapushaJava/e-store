export interface Props {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  margin?: string;
}
