import { styled } from 'styled-components';
import { Props } from './constInterfase.ts';

export const StyledFlex = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.align || 'stretch'};
  justify-content: ${(props) => props.justify || 'row'};
  margin: ${(props) => props.margin || '0'};
`;
