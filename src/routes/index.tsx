interface routeInterface {
    title: string;
    category: string[];
    description: string;
    path: string;
}

const routes: routeInterface[] = [
    {
        title: 'Example 1',
        category: ['RxJs'],
        description: 'Testing out the of operator',
        path: '/examples/testing-the-of-operator',
    },
];

export default routes;