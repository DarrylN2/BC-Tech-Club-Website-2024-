'use strict';

/**
 * service-one router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::service-one.service-one');
