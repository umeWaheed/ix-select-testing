/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Example from './vertical-tabs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Page1 from './Page1';
import Page2 from './page-2';
import {
  IxApplication,
  IxApplicationHeader,
  IxContent,
  IxContentHeader,
} from '@siemens/ix-react';

function NavigationButtons() {
  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <div className="navigation-buttons">
      <button onClick={() => navigate('/page-1')}>Go to Page 1</button>
      <button onClick={() => navigate('/page-2')}>Go to Page 2</button>
      <a href="/page-1">Default Link to page-1</a>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <IxApplication>
        <IxApplicationHeader name="My Application">
          <div className="placeholder-logo" slot="logo"></div>
        </IxApplicationHeader>
        <Example />
        <IxContent>
          <IxContentHeader
            slot="header"
            header-title="Page content"
          ></IxContentHeader>
          <Routes>
            <Route path="/page-1" element={<Page1 />} />
            <Route path="/page-2" element={<Page2 />} />
            <Route path="*" element={<NavigationButtons />} />
          </Routes>
        </IxContent>
      </IxApplication>
    </Router>
  );
}
