/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the RelationshipTypeFieldMapping class.
 * @constructor
 * Map a field of profile to its corresponding StrongId in Related Profile.
 *
 * @member {string} profileFieldName Specifies the fieldName in profile.
 *
 * @member {string} relatedProfileKeyProperty Specifies the KeyProperty (from
 * StrongId) of the related profile.
 *
 */
class RelationshipTypeFieldMapping {
  constructor() {
  }

  /**
   * Defines the metadata of RelationshipTypeFieldMapping
   *
   * @returns {object} metadata of RelationshipTypeFieldMapping
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RelationshipTypeFieldMapping',
      type: {
        name: 'Composite',
        className: 'RelationshipTypeFieldMapping',
        modelProperties: {
          profileFieldName: {
            required: true,
            serializedName: 'profileFieldName',
            type: {
              name: 'String'
            }
          },
          relatedProfileKeyProperty: {
            required: true,
            serializedName: 'relatedProfileKeyProperty',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RelationshipTypeFieldMapping;
