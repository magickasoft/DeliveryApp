import { Root } from '../config/router';

const initialState = {
    index: 0,
    routes: [
        { index: 0, key: 'Init', routeName: 'Tabs',
            routes: [
                { index: 0, key: 'Feed', routeName: 'Feed', routes: [
                    { key: 'Init', routeName: 'Feed' },
                  ],
                },
                { key: 'Me', routeName: 'Me' },
            ],
        },
    ],
};

export function nav(state = initialState, action) {

    //const newState = Root.router.getStateForAction(action, state);
    //return newState || state;
    return state;
}
