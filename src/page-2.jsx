/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';

export default () => {
  const navigate = useNavigate();

  return (
    <>
      <p>PAGE-2</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};
