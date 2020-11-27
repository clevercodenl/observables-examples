interface routeInterface {
    title: string;
    category: string[];
    description: string;
    path: string;
    isFolder?: boolean;
}

const routes: routeInterface[] = [
    {
        title: 'Example 1',
        category: ['RxJs'],
        description: 'Testing out the of operator',
        path: '/examples/testing-the-of-operator',
    },
    {
        title: 'Observable and subscribing to useState',
        category: ['RxJs'],
        description: `Creating an observable, pushing a
         piece of data to state and outputting that`,
        path: '/examples/first-example',
    },
    {
        title: 'Previous example with custom useObservable hook',
        category: ['RxJs'],
        description: `Creating an observable, pushing a
         piece of data to state and outputting that`,
        path: '/examples/first-example-with-observable-hook',
    },
    {
        title: 'Chat application test',
        category: ['RxJs'],
        description: `Following tutorial :
         https://blog.logrocket.com/rxjs-with-react-hooks-for-state-management/`,
        path: '/examples/chat-application/1',
        isFolder: true,
    },
];

export default routes;