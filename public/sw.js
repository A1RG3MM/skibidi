importScripts("/education/mathematics.js");
importScripts("/education/geography.js");
importScripts("/education/english.js");

const sw = new UVServiceWorker();
let userKey = new URL(location).searchParams.get('userkey');

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
