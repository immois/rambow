import Link from 'next/link';
import { IconButton } from '@rambow/ui';
import IconMenu from '../../public/static/icons/burger-menu-left.svg';
import IconCart from '../../public/static/icons/carro-de-la-compra.svg';

interface HeaderProps {
  clickMenu: () => void;
}

const Header = ({ clickMenu }: HeaderProps) => {
  return (
    <header className="h-16 w-full flex items-center  px-3">
      <IconButton icon={IconMenu} className="h-full px-3" onClick={clickMenu} />
      <div className='flex-1 text-center'>
        <Link href='/'>Logo</Link>
      </div>
      <IconButton as={Link} href='/cart' icon={IconCart} className="h-full px-3" />
    </header>
  )
}

export default Header