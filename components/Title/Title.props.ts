import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TitleProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTitleElement>,
    HTMLTitleElement
  > {
    children: ReactNode;
    additional?: string;
    steps?:string | number 
}