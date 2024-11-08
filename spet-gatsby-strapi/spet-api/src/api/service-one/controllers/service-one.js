'use strict';

/**
 * service-one controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::service-one.service-one');
