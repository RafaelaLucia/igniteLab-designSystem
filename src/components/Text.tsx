import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface TextProps {   
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

//define o size como medium caso a pessoa nao especifique
export function Text({ size = 'md', children, asChild }: TextProps){
    const Comp = asChild ? Slot : 'span';
    return(
        <Comp className={clsx('text-gray-100 font-sans', {
            'text-xs':size == 'sm', //quero aplicar um text extra small caso o size seja small
            'text-sm':size == 'md', // quero aplicar um text small caso o size seja medium
            'text-md':size == 'lg', // quero aplicar um text medium caso o size seja large
        })}>{children}</Comp>
    )
}