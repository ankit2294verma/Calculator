// import { http } from 'msw'
 
// const postdata = [
//     {
//         "name": "dummy1",  
//       },
//       {
//         "name": "dummy2",  
//       },{
//         "name": "dummy3",  
//       },
// ]
// export const handlers = [
//   // By calling "http.get()" we're instructing MSW
//   // to capture all outgoing "GET /posts" requests
//   // and execute the given response resolver when they
//   // happen.
//   http.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
//     // Response resolver allows you to react to captured requests,
//     // respond with mock responses or passthrough requests entirely.
//     // For now, let's just print a message to the console.
//     console.log('Captured a "GET /posts" request')
//     return res(
//         ctx.json({
//             data: postdata
//         })
//     )
//   }),
// ]