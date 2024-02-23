/* eslint-disable import/prefer-default-export */
/**
 * Navigation component
 */

import Elements from '../lib/Elements';
import Router from '../Router';

const Navigation = (h, m, s) => {
        const home = Elements.createButton({
            innerHTML: '<i class="fas fa-home"></i>',
            className: h,
            onClick: () => Router.navigate('/dashboard'),
        });

        const meldet = Elements.createButton({
            innerHTML: '<i class="fas fa-flag"></i>',
            className: m,
            onClick: () => Router.navigate('/meldet'),
        });

        const settings = Elements.createButton({
            innerHTML: '<i class="fas fa-cog"></i>',
            className: s,
            onClick: () => Router.navigate('/settings'),
        });

        const navBar = Elements.createContainer({
            className: 'navContent',
        });

        navBar.appendChild(meldet);
        navBar.appendChild(home);
        navBar.appendChild(settings);

        return navBar;
};

export default Navigation;
