
import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

//** Button sizes */

export const SM ='sm'
export const MD ='md'
export const XL = 'xl'

//** Button appearance */
export const GHOST_BTN = 'ghost'
export const PRIMARY_BTN = 'primary'


export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  appearance: typeof PRIMARY_BTN | typeof GHOST_BTN;
  size: typeof SM | typeof MD | typeof XL;
  borderSide?: 'left';
}