import { ElementType, PropsWithChildren } from "react";
import clsx from "clsx";

interface IconButtonProps<E extends ElementType = 'button'> {
  icon: any,
  as?: E,
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

type Props<E extends React.ElementType> = PropsWithChildren<
  IconButtonProps<E>
> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof IconButtonProps<E>>;

export const IconButton = <E extends ElementType>({ icon, as, size = 'medium', className, ...rest }: Props<E>) => {
  const IconComp = icon;
  const Comp = as || 'button'

  const mergeClassName = clsx(
    'box-content flex items-center text-gray-200',
    size === 'medium' && 'w-6 h-6', size === 'large' && 'w-8 h-8',
    className
  )

  return (
    <Comp className={mergeClassName} {...rest}>
      <IconComp className={clsx(size === 'medium' && 'w-6 h-6', size === 'large' && 'w-8 h-8')} />
    </Comp>
  )
}
