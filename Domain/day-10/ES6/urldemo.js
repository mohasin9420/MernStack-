import url from 'node:url';

const myurl = new url.URL('https://learn.anudip.org:8085/index.php');

console.log("Complete URL:", myurl.href);
console.log("Host name:", myurl.hostname);
console.log("Path:", myurl.pathname);
console.log("Port:", myurl.port);
console.log("Protocol:", myurl.protocol);