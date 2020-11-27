import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { interval, timer } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

const FirstExampleWithObservableHookComponent: React.FC<{}> = () => {
  const [value, setValue] = useState<number | string>('');

  useEffect(() => {
    const timer$ = timer(10000);
    const source$ = interval(1000)
    .pipe(
      startWith('Start with operator (set a value at beginning of stream)'),
      takeUntil(timer$),
    );

    const subscription = source$.subscribe({
        next: (x) => setValue(x),
        error: (err) => console.error('something wrong occurred: ' + err),
        complete: () => setValue('done') 
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      <Typography variant='h4' component='h2' align='center'>
        {`Current value is: ${value}`}
      </Typography>
    </div>
  );
}

export default FirstExampleWithObservableHookComponent;
