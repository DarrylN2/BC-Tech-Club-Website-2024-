'use strict';

/**
 * service-two controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::service-two.service-two');
