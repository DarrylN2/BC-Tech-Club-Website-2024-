'use strict';

/**
 * service-one service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-one.service-one');
