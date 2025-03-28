import React from 'react';
import { Header, HeaderLogo, HeaderMenu, HeaderMenuButton, HeaderMenuGroup, HeaderMenuItem } from '@digdir/designsystemet-react';

export const DigdirHeader = () => {
  return (
    <Header>
      <HeaderLogo title="KI Norge" href="/" />
      <HeaderMenu>
        <HeaderMenuGroup>
          <HeaderMenuItem href="/">Forsiden</HeaderMenuItem>
          <HeaderMenuItem href="/hva-er-ki-norge">Hva er KI Norge?</HeaderMenuItem>
          <HeaderMenuItem href="/blogg">Blogg</HeaderMenuItem>
          <HeaderMenuItem href="/om-oss">Om oss</HeaderMenuItem>
        </HeaderMenuGroup>
        <HeaderMenuGroup position="right">
          <HeaderMenuItem href="/admin">Admin</HeaderMenuItem>
        </HeaderMenuGroup>
      </HeaderMenu>
      <HeaderMenuButton />
    </Header>
  );
};

export default DigdirHeader; 