const request = config => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(this.responseText);
      } else {
        reject(this.status);
      }
    })
    xhr.addEventListener('error', function () {
      reject('No Internet');
    });
    
    xhr.addEventListener('timeout', function () {
      reject('Timeout');
    });
    
    xhr.open(config.method || 'GET', config.url);
    xhr.send();
  })
}


const usersUrl = 'https://api.github.com/search/users?q=ivan';
const usersPromise = request({ url: usersUrl });

console.log(usersPromise);

usersPromise
  .then(usersJson => {
    const users = JSON.parse(usersJson).items;
    console.log(users);
    return Promise.all(users.map(user => {
      return request({ url: user.repos_url })
    }));
  })
  // .then(repos => {
  //   console.log(repos);
  // })
  // .catch(error => {
  //   console.log('что то пошло не так', error);
  // });


// request({
//   method: 'GET',
//   url: usersUrl,
//   success: usersJson => {
//     const users = JSON.parse(usersJson).items;
//     users.forEach(user => {
//       request({
//         method: 'GET',
//         url: user.repos_url,
//         success: reposJson => {
//           console.log(user.login, JSON.parse(reposJson));
//         }, error: handleError
//       })
//     });
//   }, error: handleError
// });


