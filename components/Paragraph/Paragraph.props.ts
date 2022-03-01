
import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
}