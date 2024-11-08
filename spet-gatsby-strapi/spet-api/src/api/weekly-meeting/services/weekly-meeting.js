'use strict';

/**
 * weekly-meeting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::weekly-meeting.weekly-meeting');
