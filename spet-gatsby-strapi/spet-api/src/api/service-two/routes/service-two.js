'use strict';

/**
 * service-two router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::service-two.service-two');
