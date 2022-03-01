import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface NavItemProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  children: ReactNode;
  arrow: boolean;
  route: string;
}