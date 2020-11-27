import React from 'react';
import { useParams } from "react-router-dom";

const ExamplePage: React.FC<{}> = () => {
  const { exampleSlug, isFolder } = useParams<{exampleSlug: string, isFolder?: string}>();
  const ExampleComponent = (Boolean(isFolder)) ?
   require(`../examples/${exampleSlug}`)?.default : 
   require(`../examples/${exampleSlug}.component`)?.default
   ; 
  
    return (
        <div style={{padding: 8}}>
            <ExampleComponent />
        </div>
    );
}

export default ExamplePage;