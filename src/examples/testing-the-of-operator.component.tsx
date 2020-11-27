import React, { useEffect } from 'react';
import { ajax } from 'rxjs/ajax';
import { Observable, of, from, } from 'rxjs';
import { map, delay, catchError } from 'rxjs/operators';

interface GithubUserInterface {
  login: string;
  url: string;
}

const TestingTheOfOperatorComponent: React.FC<{}> = () => {

useEffect(() => {
  //of and from 
  // const ofSource$: Observable<number> = of(1, 2, 3, 4, 5)
  // const arraySource$: Observable<number> = from([1, 2, 3, 4, 5]);
  // const promiseSource$: Observable<unknown> = from(new Promise(resolve => resolve('Hello World!')));
  // const mapObj: Map<number, string> = new Map();
  // mapObj.set(1, 'Hi');
  // mapObj.set(2, 'Bye');
  // const mapSource$ = from(mapObj);
  // const stringSource$: Observable<string> = from('Hello World')
  // .pipe(
  //   map((value: string) => value + ' +++ concat through map and pipe'),
  //   // delay(5000)
  // );
  const githubUserSource$: Observable<GithubUserInterface[]> = ajax
    .getJSON('https://api.github.com/users?per_page=2')
    .pipe(
      //TODO1 find out why is unkown and how to change
      map((githubUserData: (GithubUserInterface []| unknown)) => {
        if(Array.isArray(githubUserData)){
          return githubUserData.map((githubUser: GithubUserInterface) => githubUser.login);
        }
      }),
      catchError(error => {
        console.log('error: ', error);
        return of(error);
      })
    );

  // const ofSourceSubscription = ofSource.subscribe((value: number) => console.log('ofSource value', value));
  // const arraySourceSubscription = arraySource.subscribe((value: number) => console.log('arraySource value', value));
  // const promiseSourceSubscription = promiseSource.subscribe((value: unknown) => console.log('promiseSource value', value));
  // const mapSourceSubscription = mapSource.subscribe((val: [number, string]) => console.log('mapSourceSubscription value', val));
  // const stringSourceSubscription = stringSource.subscribe((val: string) => console.log('stringSource val', val));
  // const stringSourceSubscription = stringSource.subscribe({
  //     // on successful emissions
  //   next: event => console.log('stringSource next', event),
  //   // on errors
  //   error: error => console.log(error),
  //   // called once on completion
  //   complete: () => console.log('stringSource complete!')
  // });
  githubUserSource$.subscribe((res) => console.log('response', res), (err) => console.log('error', err));
  // githubUserSource.subscribe(() => {});

  return () => {
    // ofSourceSubscription.unsubscribe();
    // arraySourceSubscription.unsubscribe();
    // promiseSourceSubscription.unsubscribe()
    // mapSourceSubscription.unsubscribe();
    // stringSourceSubscription.unsubscribe();
  }
}, []);
// const CurrentPageComponent = () => currentPage;

return <h1>{'The first observable example component'}</h1>;
}

export default TestingTheOfOperatorComponent;
