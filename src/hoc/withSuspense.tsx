import React, {ComponentType, LazyExoticComponent} from 'react';

import {Preloader} from '../components/common';

export const withSuspense = <P extends object>(
    Component: LazyExoticComponent<ComponentType<P>>
) => {
    return (props: P) => (
        <React.Suspense fallback={<Preloader/>}>
            <Component {...props} />
        </React.Suspense>
    );
};

