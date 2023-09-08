'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-512.png": "ac6c6bd025c1741073a2acffa101cfb3",
"icons/Icon-maskable-512.png": "ac6c6bd025c1741073a2acffa101cfb3",
"icons/Icon-maskable-192.png": "ac6c6bd025c1741073a2acffa101cfb3",
"icons/Icon-192.png": "ac6c6bd025c1741073a2acffa101cfb3",
"favicon.png": "ac6c6bd025c1741073a2acffa101cfb3",
"version.json": "8070025aff2c227c12857058d2d06881",
"assets/AssetManifest.bin": "b9b95c8e27b12bac7a640b972d489f35",
"assets/NOTICES": "d058c033a668cb9d2161443d45a5553e",
"assets/assets/icons/minus.png": "f6d32b78b354e2992a7d0fd425303997",
"assets/assets/icons/iconHandMoney.png": "bd97a4912847fd7d33a0729886a5b8f7",
"assets/assets/icons/plus.png": "edc40e8f455e92dabbb27064924622b8",
"assets/assets/icons/twitterIcon.png": "98eb4d41edc5512ca2c4c66ba408bfb7",
"assets/assets/icons/youtubeIcon.png": "5bc23fad4a47cba0f400dcacab50dee0",
"assets/assets/icons/iconMen.png": "90487c3842ce6411fb498bb63e4a5185",
"assets/assets/icons/iconHomeLoan.png": "282aed244647d02432c31c62b6d79026",
"assets/assets/icons/iconHandshake.png": "f7fbcb71ac1998064a9cb3c817b53fe3",
"assets/assets/icons/overdraft.png": "885afcf31669f17ddf6f14041a450e80",
"assets/assets/icons/iconHandSafety.png": "c8188c0aff516fc5ea80ffae31a2c4a3",
"assets/assets/icons/fbIcon.png": "f1222b4293541e227d0fbdcd727bce8b",
"assets/assets/icons/instaIcon.png": "e7912c00334ddbe6cc3ef0d6633dcb62",
"assets/assets/icons/iconHandHealth.png": "baa8e00da55155e8db6588a2017b6d32",
"assets/assets/icons/iconProperty.png": "f7daceff851df235c75b472b6ff6ffc7",
"assets/assets/icons/iconCar4.png": "7a6d5ceb6c8100fbb7ee31c843a619c0",
"assets/assets/images/offer3.png": "716c63ebe11fdda20399307e2caec3c1",
"assets/assets/images/offer2.png": "ccca80146f160867d9aee88a7ac9d576",
"assets/assets/images/img4.jpg": "5a32bea9e3ef3ccf6274512bea48ea24",
"assets/assets/images/imageOne.png": "9fda43633ae74c189c2e0c2552e15f73",
"assets/assets/images/img6.png": "975905d5796d537b7fa5b626362ad265",
"assets/assets/images/mailIcon.png": "0e9874059d5812b6ceb789e89cd475bf",
"assets/assets/images/secondWidgetImage.jpg": "e2c8017fcc38844ed51dbf0721228c74",
"assets/assets/images/imageFour.png": "33ea8b4e89e7af20daebca56e926156f",
"assets/assets/images/mapsIcon.png": "98d54d38f2322eaea001bc1b56175820",
"assets/assets/images/logo2.png": "ac6c6bd025c1741073a2acffa101cfb3",
"assets/assets/images/logo.png": "a0ba8a582a299f34d17b360f8de7ae0e",
"assets/assets/images/sliderGirlImage5.jpg": "6e4fc5f6153b2bd604bf8fbf88b5dbf7",
"assets/assets/images/imageTwo.png": "f1b238ba59056678baa7a7144ecd5bf2",
"assets/assets/images/img7.jpg": "356367519e6de2bd6d0dc83cfc29cc10",
"assets/assets/images/img3.jpg": "2b23577e382be9e28c6996db7e39d52e",
"assets/assets/images/offer7.png": "4533f6d995ff1d3583073ccb950dd057",
"assets/assets/images/frame2.png": "beb2cd6a6439698eadaf7787589584bb",
"assets/assets/images/dottedArrowDown.png": "0697632f9890591543bc4338d149adb1",
"assets/assets/images/callIcon.png": "6fa280fdaa3cb3a4e0296dd83350849b",
"assets/assets/images/img8.jpg": "99e278b3d4fbca51cbd079143b475ccd",
"assets/assets/images/imageThree.png": "651b88ced1fe825714234efeb1abc81e",
"assets/assets/images/dottedArrowUp.png": "574f332c5563aca835e49b503393f428",
"assets/assets/images/offer8.png": "fbb11ba492a40ff1c918a09f5fdcc67b",
"assets/assets/teams/team5.jpg": "f99b30854a395e1c4a420bb2160096a5",
"assets/assets/teams/team1.jpg": "304b180451f20589d0661f2d1ef38ad9",
"assets/assets/teams/team4.jpg": "a65bccacd8fd2bf5e7f79e31660ebafc",
"assets/assets/teams/team3.jpg": "07d9965a0dcdfb76754ca3d8cf4690ca",
"assets/assets/teams/team2.jpg": "f375fbcc4550cd34d9a0100975a4074a",
"assets/assets/loanImages/homeLoan.jpg": "b507adcce35ba7879bd142fe0ca9a978",
"assets/assets/loanImages/healthInsurance.jpg": "54b4ed7da11e9739da075975e9e4911f",
"assets/assets/loanImages/businessManMoney.jpg": "ac3816fdbf871b9817e9fbe47bd19c76",
"assets/assets/loanImages/overdraft.jpg": "437dd267a609f9ca6d4fbd1eda91722b",
"assets/assets/loanImages/personalLoan.jpg": "74959f05ca445951a3f6112817b98a24",
"assets/assets/loanImages/loanAgainstProperty.jpg": "1d0cd146f4f5e42690b19ae8896ae75c",
"assets/assets/loanImages/businessLoan.jpg": "8175d3a4790443b86179b9f87264140b",
"assets/assets/loanImages/generalInsurance.jpg": "c76324a929d71d4c91647070963316e4",
"assets/assets/loanImages/carLoan.jpg": "416d774c58d50d68492d079c477a458a",
"assets/assets/bankImages/b9.png": "71958ce00238ddc3552bcfd4de006d7f",
"assets/assets/bankImages/b14.png": "de939586ba6dd78deecf863cc537d7dc",
"assets/assets/bankImages/b5.png": "6f4d2c195977594ef6a46b1b014e2508",
"assets/assets/bankImages/b12.png": "15ed19063fbfe987bd5c12420c7d49b1",
"assets/assets/bankImages/b16.png": "bc3f868e501ded1285174afb55e06c67",
"assets/assets/bankImages/b7.png": "d015e861de2f8fd09c79de54a3fe8db4",
"assets/assets/bankImages/b13.png": "19f1de23ec7f663b4ed04e20ae679fb7",
"assets/assets/bankImages/b1.png": "8c9e0ab857e942dacf6492f8f45898fe",
"assets/assets/bankImages/b3.png": "5421c3e7c9cec0e7e63df2aa23260036",
"assets/assets/bankImages/b6.png": "4fc28c1fbbe825039fa5d86697f72465",
"assets/assets/bankImages/b10.png": "b93e9106d3b9564a9a9375249f1838b0",
"assets/assets/bankImages/b11.png": "a32b24a1db5c19c7adb99acc5a37d62a",
"assets/assets/bankImages/b2.png": "7f3e33b3513ee1af9cbb19bb9dedf776",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "20c5cf2b6c7eb760046cddf7f00b9111",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "107afdd49e88792539b606da387696f2",
"main.dart.js": "d283d96a536d9ca1fec7c830b54ea7f8",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"index.html": "39a4ec2aa56c661a1613534ee2a2ad37",
"/": "39a4ec2aa56c661a1613534ee2a2ad37",
"manifest.json": "355ec371a708b39cde5ce18f836fc3b6",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/skwasm.wasm": "867e0c1af67ee1abb30141e450e9d41f",
"canvaskit/canvaskit.wasm": "7c6de92a246382429b7782137b4b4b5e",
"canvaskit/canvaskit.js": "5d153c6a988d6f896b00f9a424320ff6",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/chromium/canvaskit.wasm": "6b6502433d076d159b59a13e6174cfde",
"canvaskit/chromium/canvaskit.js": "504767837b8b6bec6f77f3978ddc5543"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
