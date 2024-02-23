/* eslint-disable import/prefer-default-export */
/**
 * Event component
 */

import Elements from '../lib/Elements';

export const Event = (name) => {
        const eventsDiv = document.querySelector('.eventsDiv');

        const eventName = Elements.createHeader({
            size: 4,
            textContent: name,
            className: 'eventName',
        });

        const host = Elements.createContainer({
            className: 'hostAvatar',
            innerHTML: 'KV',
        });

        const eventInfo = Elements.createContainer({
            className: 'eventInfo',
            children: [host, eventName],
        });

        const event = Elements.createContainer({
            children: [eventInfo],
            className: 'event',
        });

        eventsDiv.appendChild(event);
    };
