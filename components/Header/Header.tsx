import React from "react";
import styles from './Header.module.scss'

interface IHeaderProps {
    children: JSX.Element
}

const Header:React.FC<IHeaderProps> = (props: React.PropsWithChildren<IHeaderProps>) => {
    const {children} = props;
    return (
        <header className={styles.Header}>{children}</header>
    )
}

export default Header;