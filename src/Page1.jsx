/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from "react";
import { IxSelect, IxSelectItem } from "@siemens/ix-react";
import axios from "axios";

const Page1 = () => {
  const [existingPlatformsList, setExistingPlatformsList] = useState([]);

  const fetchPlatformsData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const existingPlatformsData = response.data;
      console.log(existingPlatformsData);

      setExistingPlatformsList(existingPlatformsData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>PAGE-1</h1>

      <IxSelect data-testid="dropdown">
        <IxSelectItem
          key="default"
          label="default item"
          value="default item"
          data-testid="dropdown-item"
        />
        {existingPlatformsList &&
          existingPlatformsList.map((platform) => (
            <IxSelectItem
              key={platform.name}
              label={platform.name}
              value={platform.name}
              data-testid="dropdown-item"
            />
          ))}
      </IxSelect>
      <button data-testid="add-btn" onClick={fetchPlatformsData}>
        Fetch more ...
      </button>
    </div>
  );
};

export default Page1;
