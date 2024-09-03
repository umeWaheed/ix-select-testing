/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxMenu, IxMenuItem, IxMenuCategory } from '@siemens/ix-react';
import React from 'react';
import { useLocation } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const location = useLocation();

  return (
    <IxMenu startExpanded>
      <IxMenuItem home tab-icon="home">
        Home
      </IxMenuItem>
      <IxMenuItem tab-icon="globe"> Normal Tab </IxMenuItem>
      <IxMenuItem tab-icon="star" disabled>
        Disabled Tab
      </IxMenuItem>
      <IxMenuItem tab-icon="star"> With other Icon </IxMenuItem>
      <IxMenuCategory label="Top level Category" icon="rocket">
        <IxMenuItem
          tab-icon="star"
          active={location.pathname.split('/')[1] === 'page-1'}
        >
          Page 1
        </IxMenuItem>
        <IxMenuItem
          tab-icon="star"
          active={location.pathname.split('/')[1] === 'page-2'}
        >
          Page 2
        </IxMenuItem>
      </IxMenuCategory>
    </IxMenu>
  );
};
