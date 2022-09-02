import React, { memo } from 'react';
import Link from 'next/link';
import styles from './menu.module.scss';

interface IMenuItem {
  path: string;
  label: string;
}

interface IMenuProps {
  menu: IMenuItem[];
}

const Menu: React.FC<IMenuProps> = (props: IMenuProps) => {
  const { menu } = props;

  return (
    <menu className={styles.Menu}>
      {menu.map(({ path, label }) => {
        return (
          <nav key={label} className={styles.Nav}>
            <Link href={path}>{label}</Link>
          </nav>
        );
      })}
    </menu>
  );
};

export default memo(Menu);
