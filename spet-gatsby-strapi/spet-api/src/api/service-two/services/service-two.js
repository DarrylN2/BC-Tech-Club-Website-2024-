'use strict';

/**
 * service-two service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-two.service-two');
