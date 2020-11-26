import React from 'react';
import { useParams } from "react-router-dom";

const ExamplePage: React.FC<{}> = () => {
  const { exampleSlug } = useParams<{exampleSlug: string}>();
  const ExampleComponent = React.lazy(() => import(`../examples/${exampleSlug}.component`));
  
    return (
        <div >
            <h1> {'Example page'} </h1>
            <h1> {exampleSlug} </h1>
            <ExampleComponent />
        </div>
    );
}

export default ExamplePage;