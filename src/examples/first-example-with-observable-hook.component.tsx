import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Typography } from '@material-ui/core';
import { Observable, interval, timer } from 'rxjs';
import { startWith,endWith, takeUntil } from 'rxjs/operators';

const useObservable = (
  observable: Observable<string | number>,
  setter: Dispatch<SetStateAction<string | number>>) => {
  useEffect(() => {
    const subscription = observable.subscribe({
        next: (x: string | number) => setter(x),
        error: (err: string) => console.error('something wrong occurred: ' + err),
        complete: () => console.log('Done') 
    });

    return () => subscription.unsubscribe();
  }, []);
}

const FirstExampleComponent: React.FC<{}> = () => {
  const [value, setValue] = useState<number | string>('Initial value');
  const timer$ = timer(6000);
  const source$ = interval(1000)
  .pipe(
    startWith('startWith operator (set a value at beginning of stream)'),
    takeUntil(timer$),
    endWith('endWith operator (set a value at beginning of stream)'),
  );

  useObservable(source$, setValue);

  return (
    <>
    <Typography variant='h4' component='h2' align='center'>
      {`Current value is: ${value}`}
    </Typography>
    </>
  );
}

export default FirstExampleComponent;
