import { interval, map, mergeMap, switchMap } from 'rxjs'

const ob1$ = interval(1000)
const ob2$ = interval(500).pipe(map(() => Math.random()))


// let unsubscribe

// ob1$.subscribe((nb1) => {
//     console.log(nb1)
//     if (unsubscribe) {
//         unsubscribe.unsubscribe()
//     }
//     unsubscribe = ob2$.subscribe((nb2) => {
//         console.log(nb2)
//     })
// })

ob1$.pipe(
    switchMap((nb1) => {
        console.log(nb1)
        return ob2$
    })
).subscribe((nb2) => {
    console.log(nb2)
})