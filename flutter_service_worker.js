'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "77eed4423cf7f567568f47f082bde662",
"assets/assets/images/mapsIcon.png": "98d54d38f2322eaea001bc1b56175820",
"assets/assets/images/img6.png": "975905d5796d537b7fa5b626362ad265",
"assets/assets/images/img5.jpg": "cc9a7d7acf7427c56063499035fb546a",
"assets/assets/images/mailIcon.png": "0e9874059d5812b6ceb789e89cd475bf",
"assets/assets/images/frame2.png": "beb2cd6a6439698eadaf7787589584bb",
"assets/assets/images/imageOne.png": "9fda43633ae74c189c2e0c2552e15f73",
"assets/assets/images/img4.jpg": "5a32bea9e3ef3ccf6274512bea48ea24",
"assets/assets/images/offer5.png": "78f5fc0026d8375bf3a553d24967e953",
"assets/assets/images/imageThree.png": "651b88ced1fe825714234efeb1abc81e",
"assets/assets/images/offer9.png": "6bdc5cae69fec1998d3ee197900e7e9f",
"assets/assets/images/offer3.png": "716c63ebe11fdda20399307e2caec3c1",
"assets/assets/images/img7.jpg": "356367519e6de2bd6d0dc83cfc29cc10",
"assets/assets/images/img3.jpg": "2b23577e382be9e28c6996db7e39d52e",
"assets/assets/images/sliderGirlImage3.jpg": "a94873b002e29d905726a67eba7dbfa5",
"assets/assets/images/smilingWomen.png": "bfc884d1dfb3947d3336969e4cce77f4",
"assets/assets/images/callIcon.png": "6fa280fdaa3cb3a4e0296dd83350849b",
"assets/assets/images/img8.jpg": "99e278b3d4fbca51cbd079143b475ccd",
"assets/assets/images/frame.jpg": "fb6eeab8c358eb1d86d40d23260c4236",
"assets/assets/images/img1.jpg": "0d8ad0abcfdc5142beeaf38038fd507e",
"assets/assets/images/offer1.png": "e8f687b515a2b9f6d551c9fa82d7c71d",
"assets/assets/images/dottedArrowUp.png": "574f332c5563aca835e49b503393f428",
"assets/assets/images/secondWidgetImage.jpg": "e2c8017fcc38844ed51dbf0721228c74",
"assets/assets/images/sliderGirlImage2.jpg": "1e4a31c296123e291aa1e1d8e21e0139",
"assets/assets/images/logo2.png": "ac6c6bd025c1741073a2acffa101cfb3",
"assets/assets/images/smilingMan.png": "dc051405747dea6c54a3c6a9b5453430",
"assets/assets/images/dottedArrowDown.png": "0697632f9890591543bc4338d149adb1",
"assets/assets/images/offer7.png": "4533f6d995ff1d3583073ccb950dd057",
"assets/assets/images/sliderGirlImage5.jpg": "6e4fc5f6153b2bd604bf8fbf88b5dbf7",
"assets/assets/images/imageTwo.png": "f1b238ba59056678baa7a7144ecd5bf2",
"assets/assets/images/offer2.png": "ccca80146f160867d9aee88a7ac9d576",
"assets/assets/images/offer4.png": "1283dc7356abfc450a4f13f8d8a6e7c7",
"assets/assets/images/offer8.png": "fbb11ba492a40ff1c918a09f5fdcc67b",
"assets/assets/images/logo.png": "a0ba8a582a299f34d17b360f8de7ae0e",
"assets/assets/images/img2.jpg": "3109534bcd321b588f6126e25a0f1ba4",
"assets/assets/images/sliderGirlImage4.jpg": "032bb76e60bd984e2847d68380a2b69e",
"assets/assets/images/homeImage.jpg": "292c9271e944f396218dc5cb66fdec22",
"assets/assets/images/sliderGirlImage.png": "2d4d9c92f4fcb6ce17953bfb14c6d315",
"assets/assets/images/offer6.png": "069aeca06105f14ab91bcbd39881d9ce",
"assets/assets/images/imageFour.png": "33ea8b4e89e7af20daebca56e926156f",
"assets/assets/images/manMug.jpg": "ee9140f394608d8ed638c9b39b9c1c4f",
"assets/assets/loanImages/businessLoan.jpg": "08adb7b5f74ca9e9b5010b06e9fcb432",
"assets/assets/loanImages/healthInsurance.jpg": "ea80d85bf58175a275ef7c933599b2fb",
"assets/assets/loanImages/generalInsurance.jpg": "382e99ca00f92e6188b3b376ebe56d6f",
"assets/assets/loanImages/carLoan.jpg": "1ec41f7ea17a9f7bb8d02e8bf5927a47",
"assets/assets/loanImages/homeLoan.jpg": "f7c287ab2218048e64b83ec5d10bc452",
"assets/assets/loanImages/businessManMoney.jpg": "97144067638564da0b98d310c866e9e3",
"assets/assets/loanImages/personalLoan.jpg": "b4d5ef2e747fd0fa51d9d9448382f9c8",
"assets/assets/loanImages/loanAgainstProperty.jpg": "0c6d48c1dfc0403fdb410a1ea9c0fd8d",
"assets/assets/bankImages/b15.png": "0980692f8d6f589e65590b1e588cbddb",
"assets/assets/bankImages/b16.png": "bc3f868e501ded1285174afb55e06c67",
"assets/assets/bankImages/b1.png": "5c902b8cf8c4fedf5338ad17bd8ff4b7",
"assets/assets/bankImages/b10.png": "b93e9106d3b9564a9a9375249f1838b0",
"assets/assets/bankImages/b12.png": "15ed19063fbfe987bd5c12420c7d49b1",
"assets/assets/bankImages/b9.png": "989d4cc651861e58382ae2054517d3ca",
"assets/assets/bankImages/b13.png": "19f1de23ec7f663b4ed04e20ae679fb7",
"assets/assets/bankImages/b5.png": "6f4d2c195977594ef6a46b1b014e2508",
"assets/assets/bankImages/b3.png": "5421c3e7c9cec0e7e63df2aa23260036",
"assets/assets/bankImages/b8.png": "79486267c1ccf8b3dceb7fc69f6e7b0b",
"assets/assets/bankImages/b14.png": "de939586ba6dd78deecf863cc537d7dc",
"assets/assets/bankImages/b7.png": "d015e861de2f8fd09c79de54a3fe8db4",
"assets/assets/bankImages/b11.png": "a32b24a1db5c19c7adb99acc5a37d62a",
"assets/assets/bankImages/b2.png": "7f3e33b3513ee1af9cbb19bb9dedf776",
"assets/assets/bankImages/b6.png": "4fc28c1fbbe825039fa5d86697f72465",
"assets/assets/bankImages/b4.png": "50c04587addd94759928d7a4b1fe2675",
"assets/assets/icons/iconMen.png": "90487c3842ce6411fb498bb63e4a5185",
"assets/assets/icons/iconProperty.png": "f7daceff851df235c75b472b6ff6ffc7",
"assets/assets/icons/messengerIcon.png": "631f1e1f419bbfcdab487d40df532953",
"assets/assets/icons/plus.png": "edc40e8f455e92dabbb27064924622b8",
"assets/assets/icons/youtubeIcon.png": "5bc23fad4a47cba0f400dcacab50dee0",
"assets/assets/icons/minus.png": "f6d32b78b354e2992a7d0fd425303997",
"assets/assets/icons/iconHomeLoan.png": "282aed244647d02432c31c62b6d79026",
"assets/assets/icons/instaIcon.png": "e7912c00334ddbe6cc3ef0d6633dcb62",
"assets/assets/icons/iconHandMoney.png": "bd97a4912847fd7d33a0729886a5b8f7",
"assets/assets/icons/twitterIcon.png": "98eb4d41edc5512ca2c4c66ba408bfb7",
"assets/assets/icons/iconHandSafety.png": "c8188c0aff516fc5ea80ffae31a2c4a3",
"assets/assets/icons/iconHandHome.png": "9150323f4452dce9580b51a3d61606a5",
"assets/assets/icons/iconHandshake.png": "f7fbcb71ac1998064a9cb3c817b53fe3",
"assets/assets/icons/iconCar4.png": "7a6d5ceb6c8100fbb7ee31c843a619c0",
"assets/assets/icons/iconMoneyPlant.png": "1e14f69556e57eb66f4fe7910964a37b",
"assets/assets/icons/iconSuitcase.png": "7d14f31181e945019963ad05b4fb58bc",
"assets/assets/icons/iconProgress.png": "7ce1957a5952c75695342c461d2bc48b",
"assets/assets/icons/logo.png": "ad2bda2f73d58611cbbbe3602266fe66",
"assets/assets/icons/iconHandHealth.png": "baa8e00da55155e8db6588a2017b6d32",
"assets/assets/icons/fbIcon.png": "f1222b4293541e227d0fbdcd727bce8b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "0185241bb827ec8564dcf5bf3a26890f",
"assets/fonts/MaterialIcons-Regular.otf": "93eed15af040c566710f4deee0ebf74b",
"assets/AssetManifest.bin": "053f540b6a90397cab5c80d40ef17178",
"index.html": "b0de3d91eab757a18cc87b92e165a733",
"/": "b0de3d91eab757a18cc87b92e165a733",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "8070025aff2c227c12857058d2d06881",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"manifest.json": "355ec371a708b39cde5ce18f836fc3b6",
"main.dart.js": "7d440284576e53d7b72e39e790c0494e",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea"};
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
