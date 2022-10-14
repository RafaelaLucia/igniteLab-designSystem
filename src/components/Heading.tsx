import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface HeadingProps {   
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

//define o size como medium caso a pessoa nao especifique
export function Heading({ size = 'md', children, asChild }: HeadingProps){
    const Comp = asChild ? Slot : 'h2';
    return(
        <Comp className={clsx('text-gray-100 font-bold font-sans', {
            'text-lg':size == 'sm', //quero aplicar um text extra small caso o size seja small
            'text-xl':size == 'md', // quero aplicar um text small caso o size seja medium
            'text-2xl':size == 'lg', // quero aplicar um text medium caso o size seja large
        })}>{children}</Comp>
    )
}