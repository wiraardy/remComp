# instalation

Use the stable version:
```shell
npm install rem_comp
```
Or via yarn
```shell
yarn add rem_comp
```

# List Scraper
* [Anime](#anime)
* [Downloader](#downloader)
* [Convert](#convert)
* [Information](#information)
* [Search](#search)
* [Stalk](#stalk)
* [Image](#image)
* [Hentai](#hentai)
* [PornHub](#pornhub)
* [News](#news)
* [Text Pro](#textpro)

* [New Feature](#newfeature)

Usage
```js
var scraper = require('rem_comp')

```
### NewFeature 

<details><summary><b>Zerochan</b></summary><br>

> Required parameters
> - (query) *type **String***

```js
scraper.other.zerochan('elaina')
.then(response => {
  console.log(response)
})
```
#### output
```json
[
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3538159.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.2115259.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.2425190.png',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3096894.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3101347.png',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3383306.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3137157.png',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3096893.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3137033.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3170296.png',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3096896.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3174535.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3560448.png',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3096883.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3166912.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3096874.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3175209.png',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3195666.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3575331.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3096457.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3096869.jpg',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3096888.png',
  'https://static.zerochan.net/Elaina.%28Majo.no.Tabitabi%29.full.3096895.jpg'
   ]
```
</details>

<details><summary><b>Rexdl</b></summary><br>

> Required parameters
> - (query) *type **String***

```js
scraper.other.rexdl('whatsapp')
.then(response => {
  console.log(response)
})
```
#### output
```json
[
  {
    creator: 'rem',
    judul: undefined,
    kategori: 'Android / APP / Communication',
    upload_date: ' October 8, 2022',
    deskripsi: 'GBWhatsApp MOD APK 13.65?(Full) (Plus) for Android GBWhatsApp �C WhatsApp Mod [Dual WhatsApp in One Phone] GBWhatsApp Mod is built on the latest version of the WhatsApp and allows you to run two WhatsApp...',
    thumb: 'https://rexdl.com/wp-content/uploads/2020/02/gbwhatsapp-plus-android-thumb-200x200.jpg',
    link: 'https://rexdl.com/android/gbwhatsapp-plus-apk-mod.html/'
  },
  {
    creator: 'rem',
    judul: undefined,
    kategori: 'Android / APP / Communication / Social',
    upload_date: ' July 31, 2022',
    deskripsi: 'Download WhatsApp Plus (WhatsApp+)?JiMODs 9.35?Apk for Android Reborn Version +?Anti Ban WhatsApp Plus ?Anti Ban v3.0 WhatsApp JiMODs v9.30 WhatsApp+ v10.50 WhatsApp Jt JiMODs v9.30 [New] What if we tell you that our WhatsApp...',
    thumb: 'https://rexdl.com/wp-content/uploads/2015/10/WhatsApp-Plus-Android-thumb-320x320.png',
    link: 'https://rexdl.com/android/download-whatsapp-plus-apk.html/'
  },
  {
    creator: 'rem',
    judul: undefined,
    kategori: 'Android / APP / Communication',
    upload_date: ' June 30, 2022',
    deskripsi: 'YoWhatsApp Plus MOD APK 10.70?(Full) Android [Latest Version] YoWhatsApp is actually a WhatsApp mod which has some advanced and unique features which you can��t find in WhatsApp. There are some people who are searching...',
    thumb: 'https://rexdl.com/wp-content/uploads/2021/05/yowhatsapp-android-200x200.jpg',
    link: 'https://rexdl.com/android/yowhatsapp-apk.html/'
  },
  {
    creator: 'rem',
    judul: undefined,
    kategori: 'Android / APP / Communication / Messenger',
    upload_date: ' August 28, 2021',
    deskripsi: 'WhatsApp 2.21.18.5 GBWhatsApp + WhatsApp Plus Apk Android [Latest] X86 WhatsApp Messenger is a messaging app available for Android and other smartphones. WhatsApp uses your phone��s Internet connection (4G/3G/2G/EDGE or Wi-Fi, as available) to...',
    thumb: 'https://rexdl.com/wp-content/uploads/2016/04/WhatsApp-Messenger-android-thumb.jpg',
    link: 'https://rexdl.com/android/whatsapp-messenger-apk-download.html/'
  },
  {
    creator: 'rem',
    judul: undefined,
    kategori: 'Android / APP / Personalization',
    upload_date: ' May 23, 2021',
    deskripsi: 'GIF2Sticker �C Animated Sticker Maker for WhatsApp APK 0.5.1 Android GIF2Sticker �C Animated Sticker Maker for WhatsApp The best tool to create animated stickers for WhatsApp. With GIF2Sticker, you can convert your?videos?or?GIFs into animated...',
    thumb: 'https://rexdl.com/wp-content/uploads/2021/05/gif2sticker-android-200x200.jpg',
    link: 'https://rexdl.com/android/gif2sticker-apk.html/'
  },
  {
    creator: 'rem',
    judul: undefined,
    kategori: 'Android / APP / Communication',
    upload_date: ' May 4, 2021',
    deskripsi: 'WhatsApp Business 2.21.10.2 Apk for Android WhatsApp Business enables you to have a business presence on WhatsApp, communicate more efficiently with your customers, and help you grow your business. If you have separate business...',
    thumb: 'https://rexdl.com/wp-content/uploads/2018/02/whatsapp-business-android-thumb.jpg',
    link: 'https://rexdl.com/android/whatsapp-business-apk.html/'
  },
  {
    creator: 'rem',
    judul: undefined,
    kategori: 'Android / APP / Photography',
    upload_date: ' October 27, 2022',
    deskripsi: 'Adobe Photoshop Express Premium 8.6.1008?Apk + Mod Full Unlocked PHOTO FUN FOR EVERYONE Tap into your creativity on the go with Photoshop Express�Ca fun, fast, and easy picture editor for one-touch transformations and photo...',
    thumb: 'https://rexdl.com/wp-content/uploads/2016/12/adobe-photoshop-express-premium-android-thumb.jpg',
    link: 'https://rexdl.com/android/adobe-photoshop-express-premium-apk.html/'
  },
  {
    creator: 'rem',
    judul: undefined,
    kategori: 'Android / APP / Video Players & Editors',
    upload_date: ' October 26, 2022',
    deskripsi: 'FilmoraGo Video Editor & Maker Pro 7.2.0?Apk Unlocked for Android Removed DMCA A pretty powerful video editor application, which will not stamp a watermark or place a time limit on your clip. With FilmoraGo,...',
    thumb: 'https://rexdl.com/wp-content/uploads/2017/01/filmorago-free-video-editor-pro-android-thumb.jpg',
    link: 'https://rexdl.com/android/filmorago-free-video-editor-pro-unlocked-apk.html/'
  },
  {
    creator: 'rem',
    judul: undefined,
    kategori: 'Android / APP / Photography',
    upload_date: ' October 21, 2022',
    deskripsi: 'InShot Pro Mod Apk 1.869.1383?(Full Unlocked) Android InShot �C Best FREE HD?Video Editor?and?Video Maker?with all features,?trim & cut video/movie,?blur background, add?music,?transition effects,?text and emoji?and?filters! Powerful video editing features, record your precious moments of your...',
    thumb: 'https://rexdl.com/wp-content/uploads/2020/08/inshot-video-editor-video-maker-android-thumb-200x200.jpg',
    link: 'https://rexdl.com/android/inshot-video-editor-video-maker-apk.html/'
  },
  {
    creator: 'rem',
    judul: undefined,
    kategori: 'Android / APP',
    upload_date: ' October 17, 2022',
    deskripsi: 'PhotoRoom Studio Photo Editor?MOD APK 3.9.1-715?(PRO Unlocked) Android PhotoRoom is the all-in-one app that edits, designs and optimizes great visual content that helps you run your business from your phone. Remove or erase the...',
    thumb: 'https://rexdl.com/wp-content/uploads/2022/01/photoroom-android-200x200.jpg',
    link: 'https://rexdl.com/android/photoroom-apk.html/'
  }
]
```
</details>

<details><summary><b>Sticker Search</b></summary><br>

> Required parameters
> - (query) *type **String***

```js
scraper.other.stickerSearch('anime')
.then(response => {
  console.log(response)
})
```
#### output
```json
sticker: [
    'https://s3.getstickerpack.com/storage/uploads/sticker-pack/anime-naruto-i-drugie-anime-naruto-memy/tray_large.png?7fea30be83aa33f83d5a8262623f8c5f',
    'https://s3.getstickerpack.com/storage/uploads/sticker-pack/anime-prikoly-anime/tray_large.png?528cda698eb6755170af26850b201dba',
    'https://s3.getstickerpack.com/storage/uploads/sticker-pack/anime-emocii/tray_large.png?15bf5367c0790dbde6dc66c333927fa0',
    'https://s3.getstickerpack.com/storage/uploads/sticker-pack/random-anime-pack-4/tray_large.png?c78c6a736ea9a3675e7804f2ff79406f',
    'https://s3.getstickerpack.com/storage/uploads/sticker-pack/random-anime-pack-3/tray_large.png?66bf381a7405c897f415246d14da05b6',
    'https://s3.getstickerpack.com/storage/uploads/sticker-pack/random-anime-pack-2/tray_large.png?9268e2aac5912ab7332e717b63bd155c',
    'https://s3.getstickerpack.com/storage/uploads/sticker-pack/anime-27/tray_large.png?c468e67141859eef2ea0398996fc135d',
    'https://s3.getstickerpack.com/storage/uploads/sticker-pack/random-anime-pack-1/tray_large.png?dd132e2029c18e12716f225f865f4958',
    'https://s3.getstickerpack.com/storage/uploads/sticker-pack/stickers-apm-anime-peliculas-y-mas/tray_large.png?4c201226580df977c6030d2ae0506ace',
    'https://s3.getstickerpack.com/storage/uploads/sticker-pack/anime-1-2/tray_large.png?648855d9156f4d07d775cde4a73d03d6',
    'https://s3.getstickerpack.com/storage/uploads/sticker-pack/anime-2-4/tray_large.png?10c0ab5bba8d0860e3f5fa9fb0f2b3f1',
    'https://s3.getstickerpack.com/storage/uploads/sticker-pack/anger-and-anime/tray_large.png?67bc0c8e751cd16feb30c106109e8127'
  ],
  sticker1: {
    sticker: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/anime-naruto-i-drugie-anime-naruto-memy/tray_large.png?7fea30be83aa33f83d5a8262623f8c5f',
    nama: 'Anime Naruto и другие #аниме #наруто #Мемы',
    creator: 'ЦветокДжулия'
  },
  sticker2: {
    sticker: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/anime-prikoly-anime/tray_large.png?528cda698eb6755170af26850b201dba',
    nama: 'Аниме приколы )) #anime',
    creator: 'ЦветокДжулия'
  },
  sticker3: {
    sticker: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/anime-emocii/tray_large.png?15bf5367c0790dbde6dc66c333927fa0',
    nama: 'Аниме эмоции �?',
    creator: 'ЦветокДжулия'
  },
  sticker4: {
    sticker: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/random-anime-pack-4/tray_large.png?c78c6a736ea9a3675e7804f2ff79406f',
    nama: 'Random Anime Pack #4',
    creator: 'Matteiru'
  },
  sticker5: {
    sticker: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/random-anime-pack-3/tray_large.png?66bf381a7405c897f415246d14da05b6',
    nama: 'Random Anime Pack #3',
    creator: 'Matteiru'
  },
  sticker6: {
    sticker: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/random-anime-pack-2/tray_large.png?9268e2aac5912ab7332e717b63bd155c',
    nama: 'Random Anime Pack #2',
    creator: 'Matteiru'
  },
  sticker7: {
    sticker: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/anime-27/tray_large.png?c468e67141859eef2ea0398996fc135d',
    nama: 'Anime ! ❤️‍�?',
    creator: 'ЦветокДжулия'
  },
  sticker8: {
    sticker: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/random-anime-pack-1/tray_large.png?dd132e2029c18e12716f225f865f4958',
    nama: 'Random Anime Pack #1',
    creator: 'Matteiru'
  },
  sticker9: {
    sticker: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/stickers-apm-anime-peliculas-y-mas/tray_large.png?4c201226580df977c6030d2ae0506ace',
    nama: 'STICKERS_APM_Anime, Peliculas y mas!',
    creator: 'jg_yulioos'
  },
  sticker10: {
    sticker: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/anime-1-2/tray_large.png?648855d9156f4d07d775cde4a73d03d6',
    nama: 'Anime #1',
    creator: 'Simpfruit'
  },
  sticker11: {
    sticker: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/anime-2-4/tray_large.png?10c0ab5bba8d0860e3f5fa9fb0f2b3f1',
    nama: 'Anime #2',
    creator: 'Simpfruit'
  },
  sticker12: {
    sticker: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/anger-and-anime/tray_large.png?67bc0c8e751cd16feb30c106109e8127',
    nama: 'Anger and anime',
    creator: 'CEOofYo'
  }
}
```
</details>

<details><summary><b>mangatoon</b></summary><br>

> Required parameters
> - (query) *type **String***

```js
scraper.other.mangatoon('solo')
.then(response => {
  console.log(response)
})
```

#### output
```json
[
  {
    status: 200,
    creator: 'rem',
    comic_name: 'Solo Leveling',
    comic_type: 'Action/Mystery/Adventure/Contributor',
    comic_url: 'https://mangatoon.mobi/en/solo-leveling?content_id=1152130',
    comic_thumb: '/images/content_cover_default.webp'
  },
  {
    status: 200,
    creator: 'rem',
    comic_name: 'Solo Leveling [LN]',
    comic_type: 'ction/Fantasy/Adventure/Game',
    comic_url: 'https://mangatoon.mobihttps://noveltoon.mobi/en/detail/1866871/comments',
    comic_thumb: '/images/content_cover_default.webp'
  },
  {
    status: 200,
    creator: 'rem',
    comic_name: 'Solo Leveling (Chat Story)',
    comic_type: 'ction/Adventure/Supernatural',
    comic_url: 'https://mangatoon.mobihttps://noveltoon.mobi/en/detail/720837/comments',
    comic_thumb: '/images/content_cover_default.webp'
  },
  {
    status: 200,
    creator: 'rem',
    comic_name: 'Solo Leveling',
    comic_type: 'ction/Fantasy/Adventure',
    comic_url: 'https://mangatoon.mobihttps://noveltoon.mobi/en/detail/1050248/comments',
    comic_thumb: '/images/content_cover_default.webp'
  },
  {
    status: 200,
    creator: 'rem',
    comic_name: 'Solo Leveling (LN)',
    comic_type: 'ction/Fantasy/Adventure/Supernatural',
    comic_url: 'https://mangatoon.mobihttps://noveltoon.mobi/en/detail/1283599/comments',
    comic_thumb: '/images/content_cover_default.webp'
  },
  {
    status: 200,
    creator: 'rem',
    comic_name: '"A Slime In A World Of Monarchs" ? Tensura X Solo Leveling',
    comic_type: 'ame/System/Magic',
    comic_url: 'https://mangatoon.mobihttps://noveltoon.mobi/en/detail/2441860/comments',
    comic_thumb: '/images/content_cover_default.webp'
  },
  {
    status: 200,
    creator: 'rem',
    comic_name: 'Solo Leveling [LN]',
    comic_type: 'ragic/System/Magic',
    comic_url: 'https://mangatoon.mobihttps://noveltoon.mobi/en/detail/2397785/comments',
    comic_thumb: '/images/content_cover_default.webp'
  },
  {
    status: 200,
    creator: 'rem',
    comic_name: 'Die And Get A Body Solo Leveling',
    comic_type: 'ction/Fantasy/Adventure/Supernatural',
    comic_url: 'https://mangatoon.mobihttps://noveltoon.mobi/en/detail/854864/comments',
    comic_thumb: '/images/content_cover_default.webp'
  },
  {
    status: 200,
    creator: 'rem',
    comic_name: 'Solo Leveling',
    comic_type: 'ction/Fantasy/Game',
    comic_url: 'https://mangatoon.mobihttps://noveltoon.mobi/en/detail/1557040/comments',
    comic_thumb: '/images/content_cover_default.webp'
  },
  {
    status: 200,
    creator: 'rem',
    comic_name: 'Solo Leveling',
    comic_type: 'orror/Action/Comedy/Adventure',
    comic_url: 'https://mangatoon.mobihttps://noveltoon.mobi/en/detail/1666268/comments',
    comic_thumb: '/images/content_cover_default.webp'
  },
  {
    status: 200,
    creator: 'rem',
    comic_name: 'Solo Leveling',
    comic_type: 'ction/Fantasy/Adventure/Game',
    comic_url: 'https://mangatoon.mobihttps://noveltoon.mobi/en/detail/1708765/comments',
    comic_thumb: '/images/content_cover_default.webp'
  },
  {
    status: 200,
    creator: 'rem',
    comic_name: 'Solo Leveling',
    comic_type: 'ction/Fantasy/Adventure/System',
    comic_url: 'https://mangatoon.mobihttps://noveltoon.mobi/en/detail/2058350/comments',
    comic_thumb: '/images/content_cover_default.webp'
  },
  {
    status: 200,
    creator: 'rem',
    comic_name: 'Shadow Monarch Hero Deku [ Bnha X Solo Leveling ]',
    comic_type: 'choollife/Action/Fantasy',
    comic_url: 'https://mangatoon.mobihttps://noveltoon.mobi/en/detail/845924/comments',
    comic_thumb: '/images/content_cover_default.webp'
  },
  {
    status: 200,
    creator: 'rem',
    comic_name: 'Solo Leveling Novel',
    comic_type: 'ction/Adventure/Supernatural',
    comic_url: 'https://mangatoon.mobihttps://noveltoon.mobi/en/detail/517885/comments',
    comic_thumb: '/images/content_cover_default.webp'
  }
]
```
</details>
<details><summary><b>GSMArena</b></summary><br>

> Required parameters
> - (query) *type **String***
```js
scraper.other.GSMArena('iphone')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  judul: 'Apple iPhone 14 Pro Max',
  rilis: 'Released 2022, September 16',
  thumb: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg',
  ukuran: '240g, 7.9mm thickness',
  type: 'iOS 16, up to iOS 16.1',
  storage: '128GB/256GB/1TB storage, no card slot',
  display: '1290x2796 pixels',
  inchi: '6.7"',
  pixel: '48MP',
  videoPixel: '2160p',
  ram: '6GB RAM',
  chipset: 'Apple A16 Bionic',
  batrai: '4323mAh',
  merek_batre: 'Li-Ion',
  detail: '.tr-toggle {  display:none; }  \n' +
    'Versions: A2894 (International); A2651 (USA); A2893 (Canada, Japan); A2896 (China, Hong Kong); A2895 (Russia)\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    'Network\n' +
    'Technology\n' +
    'GSM / CDMA / HSPA / EVDO / LTE / 5G\n' +
    '\n' +
    '\n' +
    '2G bands\n' +
    'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM)\n' +
    '\n' +
    '?\n' +
    'CDMA 800 / 1900 \n' +
    '\n' +
    '\n' +
    '3G bands\n' +
    'HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100 \n' +
    '\n' +
    '\n' +
    '?\n' +
    'CDMA2000 1xEV-DO \n' +
    '\n' +
    '\n' +
    '4G bands\n' +
    '1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 30, 32, 34, 38, 39, 40, 41, 42, 46, 48, 66 - A2894, A2896\n' +
    '\n' +
    '\n' +
    '?\n' +
    '1, 2, 3, 4, 5, 7, 8, 11, 12, 13, 14, 17, 18, 19, 20, 21, 25, 26, 28, 29, 30, 32, 34, 38, 39, 40, 41, 42, 46, 48, 53, 66, 71 - A2651, A2893\n' +
    '\n' +
    '\n' +
    '?\n' +
    '1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 30, 32, 34, 38, 39, 40, 41, 42, 46, 48, 66 - A2895\n' +
    '\n' +
    '\n' +
    '5G bands\n' +
    '1, 2, 3, 5, 7, 8, 12, 20, 25, 26, 28, 30, 38, 40, 41, 48, 66, 70, 77, 78, 79 SA/NSA/Sub6 - A2894, A2896\n' +
    '\n' +
    '\n' +
    '?\n' +
    '1, 2, 3, 5, 7, 8, 12, 14, 20, 25, 26, 28, 29, 30, 38, 40, 41, 48, 53, 66, 70, 71, 77, 78, 79, 258, 260, 261 SA/NSA/Sub6/mmWave - A2651\n' +
    '\n' +
    '\n' +
    '?\n' +
    '1, 2, 3, 5, 7, 8, 12, 14, 20, 25, 26, 28, 29, 30, 38, 40, 41, 48, 53, 66, 70, 71, 77, 78, 79 SA/NSA/Sub6 - A2893\n' +
    '\n' +
    '\n' +
    '?\n' +
    '1, 2, 3, 5, 7, 8, 12, 20, 25, 26, 28, 30, 38, 40, 41, 48, 66, 70, 77, 78, 79 SA/NSA/Sub6 - A2895\n' +
    '\n' +
    '\n' +
    'Speed\n' +
    'HSPA, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps\n' +
    '\n' +
    '\t\n' +
    '\n' +
    '\t\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    'Launch\n' +
    'Announced\n' +
    '2022, September 07\n' +
    '\t\n' +
    '\n' +
    'Status\n' +
    'Available. Released 2022, September 16\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    'Body\n' +
    'Dimensions\n' +
    '160.7 x 77.6 x 7.9 mm (6.33 x 3.06 x 0.31 in)\n' +
    '\n' +
    'Weight\n' +
    '240 g (8.47 oz)\n' +
    '\n' +
    '\n' +
    'Build\n' +
    'Glass front (Corning-made glass), glass back (Corning-made glass), stainless steel frame\n' +
    '\n' +
    '\n' +
    'SIM\n' +
    'Dual SIM (Nano-SIM and eSIM) or Dual eSIM - International Dual eSIM with multiple numbers - USA Dual SIM (Nano-SIM, dual stand-by) - China\n' +
    '\n' +
    '?IP68 dust/water resistant (up to 6m for 30 mins)\n' +
    'Apple Pay (Visa, MasterCard, AMEX certified)\n' +
    '\t\t\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    'Display\n' +
    'Type\n' +
    'LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (typ), 2000 nits (HBM)\n' +
    '\n' +
    '\n' +
    'Size\n' +
    '6.7 inches, 110.2 cm2 (~88.3% screen-to-body ratio)\n' +
    '\n' +
    '\n' +
    'Resolution\n' +
    '1290 x 2796 pixels, 19.5:9 ratio (~460 ppi density)\n' +
    '\n' +
    '\n' +
    'Protection\n' +
    'Ceramic Shield glass\n' +
    '\n' +
    '?Always-On display\n' +
    '\t\t\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    'Platform\n' +
    'OS\n' +
    'iOS 16, upgradable to iOS 16.1\n' +
    '\n' +
    'Chipset\n' +
    'Apple A16 Bionic (4 nm)\n' +
    '\n' +
    'CPU\n' +
    'Hexa-core (2x3.46 GHz Everest + 4x2.02 GHz Sawtooth)\n' +
    '\n' +
    'GPU\n' +
    'Apple GPU (5-core graphics)\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    'Memory\n' +
    'Card slot\n' +
    '\n' +
    '\n' +
    'No\n' +
    '\n' +
    '\t\n' +
    '\n' +
    '\n' +
    'Internal\n' +
    '128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM, 1TB 6GB RAM\n' +
    '\n' +
    '\t\n' +
    '\n' +
    '?NVMe\n' +
    '\t\t\t\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\t\n' +
    '\t\n' +
    '\tMain Camera\n' +
    '\t\tTriple\n' +
    '\t48 MP, f/1.8, 24mm (wide), 1/1.28", 1.22?m, dual pixel PDAF, sensor-shift OIS\n' +
    '12 MP, f/2.8, 77mm (telephoto), 1/3.5", PDAF, OIS, 3x optical zoom\n' +
    '12 MP, f/2.2, 13mm, 120? (ultrawide), 1/2.55", 1.4?m, dual pixel PDAF\n' +
    'TOF 3D LiDAR scanner (depth)\n' +
    '\t\n' +
    '\t\t\n' +
    '\tFeatures\n' +
    '\tDual-LED dual-tone flash, HDR (photo/panorama)\n' +
    '\t\n' +
    '\t\t\n' +
    '\tVideo\n' +
    '\t4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, 10-bit HDR, Dolby Vision HDR (up to 60fps), ProRes, Cinematic mode (4K@24/30fps), stereo sound rec.\n' +
    '\t\n' +
    '\t\t\n' +
    '\n' +
    '\n' +
    '\t\n' +
    '\t\n' +
    '\tSelfie camera\n' +
    '\t\tSingle\n' +
    '\t12 MP, f/1.9, 23mm (wide), 1/3.6", PDAF, OIS (unconfirmed)\n' +
    'SL 3D, (depth/biometrics sensor)\n' +
    '\t\n' +
    '\t\t\n' +
    '\tFeatures\n' +
    '\tHDR, Cinematic mode (4K@24/30fps)\n' +
    '\t\n' +
    '\t\t\n' +
    '\tVideo\n' +
    '\t4K@24/25/30/60fps, 1080p@25/30/60/120fps, gyro-EIS\n' +
    '\t\n' +
    '\t\t\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    'Sound\n' +
    'Loudspeaker \n' +
    'Yes, with stereo speakers\n' +
    '\n' +
    '\n' +
    '\t\n' +
    '\n' +
    '\n' +
    '3.5mm jack \n' +
    'No\n' +
    '\n' +
    '\t\n' +
    '\n' +
    '\t\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    'Comms\n' +
    'WLAN\n' +
    'Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot\n' +
    '\n' +
    '\n' +
    'Bluetooth\n' +
    '5.3, A2DP, LE\n' +
    '\n' +
    '\n' +
    'Positioning\n' +
    'GPS (L1+L5), GLONASS, GALILEO, BDS, QZSS\n' +
    '  \n' +
    '\n' +
    'NFC\n' +
    'Yes\n' +
    '\n' +
    '\t\n' +
    '\t\n' +
    '\n' +
    'Radio\n' +
    'No\n' +
    '\n' +
    '   \n' +
    '\n' +
    'USB\n' +
    'Lightning, USB 2.0\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    'Features\n' +
    'Sensors\n' +
    'Face ID, accelerometer, gyro, proximity, compass, barometer\n' +
    '\n' +
    '\n' +
    '\n' +
    ' \t\n' +
    '\n' +
    ' \t\n' +
    ' \t\n' +
    '?Ultra Wideband (UWB) support\n' +
    'Emergency SOS via satellite (SMS sending/receiving)\n' +
    '\t\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    'Battery\n' +
    'Type\n' +
    'Li-Ion 4323 mAh, non-removable (16.68 Wh)\n' +
    '\n' +
    '\n' +
    'Charging\n' +
    'Fast charging, 50% in 30 min (advertised)\n' +
    'USB Power Delivery 2.0\n' +
    'MagSafe fast wireless charging 15W\n' +
    'Qi wireless charging 7.5W\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    'Misc\n' +
    'Colors\n' +
    'Space Black, Silver, Gold, Deep Purple\n' +
    '\n' +
    '\n' +
    '\n' +
    'Models\n' +
    'A2894, A2651, A2893, A2895, iphone15,3\n' +
    '\n' +
    '\n' +
    '\n' +
    'SAR\n' +
    '1.15 W/kg (head) ? ? 1.07 W/kg (body) ? ? \n' +
    '\n' +
    '\n' +
    'SAR EU\n' +
    '0.99 W/kg (head) ? ? 0.98 W/kg (body) ? ? \n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    'Price\n' +
    '$?1,099.99 / �?1,449.00 / ??1,199.00 / ??139,900\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    'Tests\n' +
    'Performance\n' +
    '\n' +
    'AnTuTu: 955884 (v9)\n' +
    'GeekBench: 5423 (v5.1)\n' +
    'GFXBench: 54fps (ES 3.1 onscreen)\n' +
    '\n' +
    '\n' +
    'Display\n' +
    '\n' +
    'Contrast ratio: Infinite (nominal)\n' +
    '\n' +
    '\n' +
    'Camera\n' +
    '\n' +
    'Photo / Video\n' +
    '\n' +
    '\n' +
    'Loudspeaker\n' +
    '\n' +
    '-24.3 LUFS (Very good)\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    'Battery life\n' +
    '\n' +
    '\n' +
    'Endurance rating 121h'
}
```
</details>
<details><summary><b>kiryuu search</b></summary><br>

> Required parameters
> - (query) *type **String***

```js
scraper.other.kiryu('re zero')
.then(response => {
  console.log(response)
})
```

#### output
```json
[
  {
    judul: 'Re Zero Alternative',
    rating: '7.6',
    thumb: 'https://kiryuu.id/wp-content/uploads/2021/03/re-zero-alternative-990039-q4MgeWHL-217x300.jpg',
    link: 'https://kiryuu.id/manga/re-zero-alternative/'
  },
  {
    judul: 'Keiken Zumi na Kimi to, Keikein Zero na Ore ga, Otsukiai Suru Hanashi',
    rating: '7.00',
    thumb: 'https://kiryuu.id/wp-content/uploads/2022/02/keiken-zumi-na-kimi-to-keikein-zero-na-ore-ga-otsukiai-suru-hanashi-371170-JgPjfmgF-194x300.jpg',
    link: 'https://kiryuu.id/manga/keiken-zumi-na-kimi-to-keikein-zero-na-ore-ga-otsukiai-suru-hanashi/'
  },
  {
    judul: 'Maryoku Zero de Saikyou no Daikenja: Sore wa Mahou de wa Nai, Butsuri da!',
    rating: '7.9',
    thumb: 'https://kiryuu.id/wp-content/uploads/2021/11/asdasfas-539444-6hGMeAB0.jpg',
    link: 'https://kiryuu.id/manga/maryoku-zero-de-saikyou-no-daikenja-sore-wa-mahou-de-wa-nai-butsuri-da/'
  },
  {
    judul: 'The Greatest Philosoper With Zero Magic',
    rating: '8.5',
    thumb: 'https://kiryuu.id/wp-content/uploads/2021/05/the-greatest-philosoper-with-zero-magic-473189-287Zej0W.jpg',
    link: 'https://kiryuu.id/manga/the-greatest-philosoper-with-zero-magic/'
  },
  {
    judul: 'Re: Zero Kara Hajimeru Isekai Seikatsu �C Kenki Koiuta',
    rating: '4.8',
    thumb: 'https://kiryuu.id/wp-content/uploads/2021/03/re-zero-kara-hajimeru-isekai-seikatsu-kenki-koiuta-004752-t9tGr6hA-211x300.jpg',
    link: 'https://kiryuu.id/manga/re-zero-kara-hajimeru-isekai-seikatsu-kenki-koiuta/'
  },
  {
    judul: 'Re:Zero kara Hajimeru Isekai Seikatsu',
    rating: '8.4',
    thumb: 'https://kiryuu.id/wp-content/uploads/2021/03/rezero-kara-hajimeru-isekai-seikatsu-994427-NQW3yFub-211x300.jpg',
    link: 'https://kiryuu.id/manga/rezero-kara-hajimeru-isekai-seikatsu/'
  },
  {
    judul: 'Saikyou Jiko Bukken to Reikan Zero Otoko no Hanashi.',
    rating: '6',
    thumb: 'https://kiryuu.id/wp-content/uploads/2021/03/saikyou-jiko-bukken-to-reikan-zero-otoko-no-hanashi-130022-FzNiFjVF.jpg',
    link: 'https://kiryuu.id/manga/saikyou-jiko-bukken-to-reikan-zero-otoko-no-hanashi/'
  },
  {
    judul: 'Arifureta Shokugyou de Sekai Saikyou Zero',
    rating: '9',
    thumb: 'https://kiryuu.id/wp-content/uploads/2021/03/arifureta-shokugyou-de-sekai-saikyou-zero-768892-4rm24uko-211x300.jpg',
    link: 'https://kiryuu.id/manga/arifureta-shokugyou-de-sekai-saikyou-zero/'
  },
  {
    judul: 'Circle Zero��s Otherworldly Hero Business: Reboot',
    rating: '7',
    thumb: 'https://kiryuu.id/wp-content/uploads/2021/03/circle-zeros-otherworldly-hero-business-reboot-821007-17QQxV7J-207x300.jpg',
    link: 'https://kiryuu.id/manga/circle-zeros-otherworldly-hero-business-reboot/'
  },
  {
    judul: 'Isekai Shihai no Skill Taker: Zero kara Hajimeru Dorei Harem',
    rating: '8',
    thumb: 'https://kiryuu.id/wp-content/uploads/2021/03/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem-819891-fQ4gzfwx-209x300.jpg',
    link: 'https://kiryuu.id/manga/isekai-shihai-no-skill-taker-zero-kara-hajimeru-dorei-harem/'
  }
]
```
</details>
<details><summary><b>merdeka news</b></summary><br>

> No Required parameters

```js
scraper.other.merdekanews()
.then(response => {
  console.log(response)
})
```

#### output
```json
[
  {
    judul: 'Isu PKS Dapat Tawaran Jatah 2 Menteri di Kabinet Jokowi, Ini Respons PDIP',
    upload_date: ' Sekitar 28 Menit yang lalu',
    link: 'https://www.merdeka.com/politik/isu-pks-dapat-tawaran-jatah-2-menteri-di-kabinet-jokowi-ini-respons-pdip.html',
    thumb: 'https://cdns.klimg.com/merdeka.com/resized/473x238/i/w/news/2022/10/28/1486712/250x125/isu-pks-dapat-tawaran-jatah-2-menteri-di-kabinet-jokowi-ini-respons-pdip.png'
  },
  {
    judul: 'Komnas HAM Bantu Polisi Usut Kasus Tewasnya ASN Saksi Korupsi di Semarang',
    upload_date: ' Sekitar 29 Menit yang lalu',
    link: 'https://www.merdeka.com/peristiwa/komnas-ham-bantu-polisi-usut-kasus-tewasnya-asn-saksi-korupsi-di-semarang.html',
    thumb: 'https://cdns.klimg.com/merdeka.com/i/w/news/2022/10/28/1486711/140x70/komnas-ham-bantu-polisi-usut-kasus-tewasnya-asn-saksi-korupsi-di-semarang.jpg'
  },
  {
    judul: 'Warga Pakansari Resah, Tiga Hari Diteror Anak Ular Kobra',
    upload_date: ' Sekitar 31 Menit yang lalu',
    link: 'https://www.merdeka.com/peristiwa/warga-pakansari-resah-tiga-hari-diteror-anak-ular-kobra.html',
    thumb: 'https://cdns.klimg.com/merdeka.com/i/w/news/2022/10/28/1486710/140x70/warga-pakansari-resah-tiga-hari-diteror-anak-ular-kobra.jpg'
  },
  {
    judul: 'Polri Bakal Periksa Perusahaan Farmasi Lainnya Terkait Kasus Gagal Ginjal Anak',
    upload_date: ' Sekitar 36 Menit yang lalu',
    link: 'https://www.merdeka.com/peristiwa/polri-bakal-periksa-perusahaan-farmasi-lainnya-terkait-kasus-gagal-ginjal-anak.html',
    thumb: 'https://cdns.klimg.com/merdeka.com/i/w/news/2022/10/28/1486708/140x70/polri-bakal-periksa-perusahaan-farmasi-lainnya-terkait-kasus-gagal-ginjal-anak.jpg'
  },
  {
    judul: "Ma'ruf Amin Minta Parpol Tak Gunakan Politik Identitas: Bisa Memicu Konflik di Bawah",
    upload_date: ' Sekitar 43 Menit yang lalu',
    link: 'https://www.merdeka.com/peristiwa/maruf-amin-minta-parpol-tak-gunakan-politik-identitas-bisa-memicu-konflik-di-bawah.html',
    thumb: 'https://cdns.klimg.com/merdeka.com/i/w/news/2022/10/28/1486705/140x70/maruf-amin-minta-parpol-tak-gunakan-politik-identitas-bisa-memicu-konflik-di-bawah.jpg'
  },
  {
    judul: 'Polisi Limpahkan Tahap II Kasus Penipuan PT Asli Rancangan Indonesia ke Kejari Jaksel',
    upload_date: ' Sekitar 45 Menit yang lalu',
    link: 'https://www.merdeka.com/peristiwa/polisi-limpahkan-tahap-ii-kasus-penipuan-pt-asli-rancangan-indonesia-ke-kejari-jaksel.html',
    thumb: 'https://cdns.klimg.com/merdeka.com/i/w/news/2022/10/28/1486702/140x70/polisi-limpahkan-tahap-ii-kasus-penipuan-pt-asli-rancangan-indonesia-ke-kejari-jaksel.jpg'
  },
  {
    judul: 'Kunjungan Menhan Prabowo ke Pentagon Dinilai Upaya Modernisasi Alutsista',
    upload_date: ' Sekitar 48 Menit yang lalu',
    link: 'https://www.merdeka.com/peristiwa/kunjungan-menhan-prabowo-ke-pentagon-dinilai-upaya-modernisasi-alutsista.html',
    thumb: 'https://cdns.klimg.com/merdeka.com/i/w/news/2022/10/28/1486699/140x70/kunjungan-menhan-prabowo-ke-pentagon-dinilai-upaya-modernisasi-alutsista.jpg'
  },
  {
    judul: 'Peringati Sumpah Pemuda, Wamendagri Kibarkan Merah Putih di Dasar Laut Papua',
    upload_date: ' Sekitar 59 Menit yang lalu',
    link: 'https://www.merdeka.com/peristiwa/peringati-sumpah-pemuda-wamendagri-kibarkan-merah-putih-di-dasar-laut-papua.html',
    thumb: 'https://cdns.klimg.com/merdeka.com/i/w/news/2022/10/28/1486694/140x70/peringati-sumpah-pemuda-wamendagri-kibarkan-merah-putih-di-dasar-laut-papua.jpg'
  },
  {
    judul: 'PKS Minta Deklarasi Koalisi Tak Dipaksakan Sebelum Masalah Cawapres untuk Anies Beres',
    upload_date: ' Sekitar 1 Jam yang lalu',
    link: 'https://www.merdeka.com/politik/pks-minta-deklarasi-koalisi-tak-dipaksakan-sebelum-masalah-cawapres-untuk-anies-beres.html',
    thumb: 'https://cdns.klimg.com/merdeka.com/i/w/news/2022/10/28/1486692/140x70/pks-minta-deklarasi-koalisi-tak-dipaksakan-sebelum-masalah-cawapres-untuk-anies-beres.jpg'
  },
  {
    judul: 'Wapres: Jangan Sampai Kelompok Radikal Gunakan Politik Identitas Pada Pemilu 2024',
    upload_date: ' Sekitar 1 Jam yang lalu',
    link: 'https://www.merdeka.com/peristiwa/wapres-jangan-sampai-kelompok-radikal-gunakan-politik-identitas-pada-pemilu-2024.html',
    thumb: 'https://cdns.klimg.com/merdeka.com/i/w/news/2022/10/28/1486689/140x70/wapres-jangan-sampai-kelompok-radikal-gunakan-politik-identitas-pada-pemilu-2024.jpg'
  },
  {
    judul: 'Sowan ke Habib Novel bin Muhammad Alaydrus, Anies Dihadiahi Tongkat Tanduk Rusa',
    upload_date: ' Sekitar 1 Jam yang lalu',
    link: 'https://www.merdeka.com/peristiwa/sowan-ke-habib-novel-bin-muhammad-alaydrus-anies-dihadiahi-tongkat-tanduk-rusa.html',
    thumb: 'https://cdns.klimg.com/merdeka.com/i/w/news/2022/10/28/1486684/140x70/sowan-ke-habib-novel-bin-muhammad-alaydrus-anies-dihadiahi-tongkat-tanduk-rusa.jpg'
  },
  {
    judul: 'Densus 88 Ungkap Gelagat Aneh Siti Elina: Ingin Melukai Diri Sendiri & Teriak-Teriak',
    upload_date: ' Sekitar 1 Jam yang lalu',
    link: 'https://www.merdeka.com/peristiwa/densus-88-ungkap-gelagat-aneh-siti-elina-melukai-diri-sendiri-dan-teriak-teriak.html',
    thumb: 'https://cdns.klimg.com/merdeka.com/i/w/news/2022/10/28/1486681/140x70/densus-88-ungkap-gelagat-aneh-siti-elina-melukai-diri-sendiri-dan-teriak-teriak.jpg'
  },
  {
    judul: 'PDIP Ogah lagi Bahas Dewan Kolonel dan Manuver Relawan: Semua Dengar Aspirasi Rakyat',
    upload_date: ' Sekitar 1 Jam yang lalu',
    link: 'https://www.merdeka.com/politik/pdip-ogah-lagi-bahas-dewan-kolonel-dan-manuver-relawan-semua-dengar-aspirasi-rakyat.html',
    thumb: 'https://cdns.klimg.com/merdeka.com/i/w/news/2022/10/28/1486678/140x70/pdip-ogah-lagi-bahas-dewan-kolonel-dan-manuver-relawan-semua-dengar-aspirasi-rakyat.jpg'
  },
  {
    judul: 'Mensos Serahkan Santunan Presiden untuk 135 Korban Tragedi Kanjuruhan',
    upload_date: ' Sekitar 1 Jam yang lalu',
    link: 'https://www.merdeka.com/peristiwa/mensos-serahkan-santunan-presiden-untuk-135-korban-tragedi-kanjuruhan.html',
    thumb: 'https://cdns.klimg.com/merdeka.com/i/w/news/2022/10/28/1486677/140x70/mensos-serahkan-santunan-presiden-untuk-135-korban-tragedi-kanjuruhan.jpg'
  },
  {
    judul: 'Mahfud MD sebut Indonesia Butuh Pejuang Hukum Berakhlak Mulia dan Berotak Cerdas',
    upload_date: ' Sekitar 1 Jam yang lalu',
    link: 'https://www.merdeka.com/peristiwa/mahfud-md-sebut-indonesia-butuh-pejuang-hukum-berakhlak-mulia-dan-berotak-cerdas.html',
    thumb: 'https://cdns.klimg.com/merdeka.com/i/w/news/2022/10/28/1486673/140x70/mahfud-md-sebut-indonesia-butuh-pejuang-hukum-berakhlak-mulia-dan-berotak-cerdas.jpg'
  },
  {
    judul: 'Cara AKBP Arif Rachman Lepas Jeratan Penjara 5 Tahun Lebih',
    upload_date: ' Sekitar 1 Jam yang lalu',
    link: 'https://www.merdeka.com/peristiwa/cara-akbp-arif-rachman-lepas-jeratan-penjara-5-tahun-lebih.html',
    thumb: 'https://cdns.klimg.com/merdeka.com/i/w/news/2022/10/28/1486671/140x70/cara-akbp-arif-rachman-lepas-jeratan-penjara-5-tahun-lebih.jpg'
  },
  {
    judul: '4 Anak di Kabupaten Bogor Alami Gagal Ginjal Akut, 3 Meninggal dan 1 Dirawat',
    upload_date: ' Sekitar 1 Jam yang lalu',
    link: 'https://www.merdeka.com/peristiwa/4-anak-di-kabupaten-bogor-alami-gagal-ginjal-akut-3-meninggal-dan-1-dirawat.html',
    thumb: 'https://cdns.klimg.com/merdeka.com/i/w/news/2022/10/28/1486669/140x70/4-anak-di-kabupaten-bogor-alami-gagal-ginjal-akut-3-meninggal-dan-1-dirawat.jpg'
  },
  {
    judul: 'Kebakaran di Terminal 2E Bandara Soekarno-Hatta Padam, Ini Penyebabnya',
    upload_date: ' Sekitar 2 Jam yang lalu',
    link: 'https://www.merdeka.com/peristiwa/kebakaran-di-terminal-2e-bandara-soekarno-hatta-padam-ini-penyebabnya.html',
    thumb: 'https://cdns.klimg.com/merdeka.com/i/w/news/2022/10/28/1486663/140x70/kebakaran-di-terminal-2e-bandara-soekarno-hatta-padam-ini-penyebabnya.jpg'
  },
  {
    judul: 'Cari Kecocokan, PKS Gelar Pertemuan Anies dan Aher Pekan Depan',
    upload_date: ' Sekitar 2 Jam yang lalu',
    link: 'https://www.merdeka.com/politik/cari-kecocokan-pks-gelar-pertemuan-anies-dan-aher-pekan-depan.html',
    thumb: 'https://cdns.klimg.com/merdeka.com/i/w/news/2022/10/28/1486662/140x70/cari-kecocokan-pks-gelar-pertemuan-anies-dan-aher-pekan-depan.jpg'
  },
  {
    judul: 'Ini Isi Pertemuan Jenderal Sigit dengan Tujuh Mantan Kapolri',
    upload_date: ' Sekitar 2 Jam yang lalu',
    link: 'https://www.merdeka.com/peristiwa/ini-isi-pertemuan-jenderal-sigit-dengan-tujuh-mantan-kapolri.html',
    thumb: 'https://cdns.klimg.com/merdeka.com/i/w/news/2022/10/28/1486660/140x70/ini-isi-pertemuan-jenderal-sigit-dengan-tujuh-mantan-kapolri.jpeg'
  }
]
```
</details>
<details><summary><b>emoji</b></summary><br>

> Required parameters
> - (emoji) *type **String***

```js
scraper.other.emoji('?')
.then(response => {
  console.log(response)
})
```
#### output
```json
1{
  apple: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/grinning-face-with-big-eyes_1f603.png',
  google: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/350/grinning-face-with-big-eyes_1f603.png',
  samsung: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/samsung/349/grinning-face-with-big-eyes_1f603.png',
  microsoft: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/microsoft/319/grinning-face-with-big-eyes_1f603.png',
  whatsapp: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/whatsapp/326/grinning-face-with-big-eyes_1f603.png',
  twitter: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/322/grinning-face-with-big-eyes_1f603.png',
  facebook: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/327/grinning-face-with-big-eyes_1f603.png',
  jooxPixel: 'https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/grinning-face-with-big-eyes_1f603.png',
  openemoji: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/grinning-face-with-big-eyes_1f603.png',
  emojidex: 'https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/grinning-face-with-big-eyes_1f603.gif',
  messanger: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/joypixels/340/grinning-face-with-big-eyes_1f603.png',
  LG: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/toss-face/342/grinning-face-with-big-eyes_1f603.png',
  HTC: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/openmoji/338/grinning-face-with-big-eyes_1f603.png',
  mozilla: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/noto-emoji/343/grinning-face-with-big-eyes_1f603.jpg',
  softbank: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/sony/336/grinning-face-with-big-eyes_1f603.png',
  docomo: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/emojidex/112/smiling-face-with-open-mouth_1f603.png',
  KDDI: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/65/smiling-face-with-open-mouth_1f603.png'
}
```
</details>
<details><summary><b>apkmirror</b></summary><br>

> Required parameters
> - (query) *type **String***

```js
scraper.other.apkmirror('whatsapp')
.then(response => {
  console.log(response)
})
```

#### output
```json
{
  creator: 'rem',
  data: [
    {
      judul: 'WhatsApp Business 2.22.23.17 beta',
      dev: 'by WhatsApp LLC',
      size: undefined,
      version: undefined,
      uploaded_on: undefined,
      download_count: undefined,
      link: 'https://www.apkmirror.com/apk/whatsapp-inc/whatsapp-business/whatsapp-business-2-22-23-17-release/'
    },
    {
      judul: 'WhatsApp Messenger 2.22.23.17 beta',
      dev: 'by WhatsApp LLC',
      size: undefined,
      version: undefined,
      uploaded_on: undefined,
      download_count: undefined,
      link: 'https://www.apkmirror.com/apk/whatsapp-inc/whatsapp/whatsapp-2-22-23-17-release/'
    },
    {
      judul: 'Do It Later: Auto WhatsApp SMS 4.8.8',
      dev: 'by Kant.',
      size: undefined,
      version: undefined,
      uploaded_on: undefined,
      download_count: undefined,
      link: 'https://www.apkmirror.com/apk/kant/do-it-later-schedule-sms-auto-reply-text-whats/do-it-later-schedule-sms-auto-reply-text-whats-4-8-8-release/'
    },
    {
      judul: 'WhatsApp Messenger 2.22.23.16 beta',
      dev: 'by WhatsApp LLC',
      size: undefined,
      version: undefined,
      uploaded_on: undefined,
      download_count: undefined,
      link: 'https://www.apkmirror.com/apk/whatsapp-inc/whatsapp/whatsapp-2-22-23-16-release/'
    },
    {
      judul: 'WhatsApp Business 2.22.23.16 beta',
      dev: 'by WhatsApp LLC',
      size: undefined,
      version: undefined,
      uploaded_on: undefined,
      download_count: undefined,
      link: 'https://www.apkmirror.com/apk/whatsapp-inc/whatsapp-business/whatsapp-business-2-22-23-16-release/'
    },
    {
      judul: 'AutoResponder for WhatsApp 2.9.5',
      dev: 'by AutoResponder.ai',
      size: undefined,
      version: undefined,
      uploaded_on: undefined,
      download_count: undefined,
      link: 'https://www.apkmirror.com/apk/autoresponder-ai/autoresponder-for-whatsapp/autoresponder-for-whatsapp-2-9-5-release/'
    },
    {
      judul: 'Do It Later: Auto WhatsApp SMS 4.8.9',
      dev: 'by Kant.',
      size: undefined,
      version: undefined,
      uploaded_on: undefined,
      download_count: undefined,
      link: 'https://www.apkmirror.com/apk/kant/do-it-later-schedule-sms-auto-reply-text-whats/do-it-later-schedule-sms-auto-reply-text-whats-4-8-9-release/'
    },
    {
      judul: 'WhatsApp Messenger 2.22.23.15 beta',
      dev: 'by WhatsApp LLC',
      size: undefined,
      version: undefined,
      uploaded_on: undefined,
      download_count: undefined,
      link: 'https://www.apkmirror.com/apk/whatsapp-inc/whatsapp/whatsapp-2-22-23-15-release/'
    },
    {
      judul: 'WhatsApp Business 2.22.22.80',
      dev: 'by WhatsApp LLC',
      size: undefined,
      version: undefined,
      uploaded_on: undefined,
      download_count: undefined,
      link: 'https://www.apkmirror.com/apk/whatsapp-inc/whatsapp-business/whatsapp-business-2-22-22-80-release/'
    },
    {
      judul: 'WhatsApp Business 2.22.23.15 beta',
      dev: 'by WhatsApp LLC',
      size: undefined,
      version: undefined,
      uploaded_on: undefined,
      download_count: undefined,
      link: 'https://www.apkmirror.com/apk/whatsapp-inc/whatsapp-business/whatsapp-business-2-22-23-15-release/'
    }
  ]
}
```
</details>
<details><summary><b>anoboy download link</b></summary><br>

> Required parameters
> - (url) *type **String***

```js
scraper.other.anoboydl('https://anoboy.lol/2021/12/tokyo-revengers-live-action-2021/') 
.then(response => {
  console.log(response)
})
```

#### output
```json
{
  judul: 'Tokyo Revengers Live Action (2021) Subtitle Indonesia',                                                                                                                  uptime: 'Selasa, 04:25 Wib',                                                                                                                                                     direct_link: undefined,
  mforu: {
    SD: 'https://mega.nz/file/YRFHBSIB#sJm1qIF7CoAen3_WtAqZFjkjXu2a7Ph9qKtLnisJYFM',
    HD: 'https://mega.nz/file/0IdhDY4R#Tc1zqeAmm-1auR9pd5SR2fU6Qj_l7jYUTds-AtgY5iM'
  },
  zippy: {
     SD: 'https://www.mp4upload.com/fsewuqd3vckp',
     HD: 'https://www.mp4upload.com/ae3224c67czw'
      },
 mirror: {
      SD: 'https://www70.zippyshare.com/v/YnMvvGMg/file.html',
      HD: 'none'
      }
}
```
</details>
<details><summary><b>film search</b></summary><br>

> Required parameters
> - (query) *type **String***

```js
scraper.other.film('love')
.then(response => {
  console.log(response)
})
```

#### output
```json
[
  {
    judul: 'FOX LOVE (2022)',
    genre: 'Drama, China',
    thumb: 'http://167.99.71.200/wp-content/uploads/2022/10/twaD0dgcp027VgJ90csvNMDt9pw-152x228.jpg',
    link_nonton: 'http://167.99.71.200/fox-love-2022/'
  },
  {
    judul: 'Thor: Love and Thunder (2022)',
    genre: 'Action, Comedy, Fantasy, USA',
    thumb: 'http://167.99.71.200/wp-content/uploads/2022/09/pIkRyD18kl4FhoCNQuWxWu5cBLM-152x228.jpg',
    link_nonton: 'http://167.99.71.200/thor-love-and-thunder-2022/'
  },
  {
    judul: 'Love Like the Falling Petals (2022)',
    genre: 'Drama, Romance, Japan',
    thumb: 'http://167.99.71.200/wp-content/uploads/2022/03/8m2xnZAnMuydc87KCLS2gnUmidh-152x228.jpg',
    link_nonton: 'http://167.99.71.200/love-like-the-falling-petals-2022/'
  },
  {
    judul: 'Redeeming Love (2022)',
    genre: 'Drama, History, Romance, South Africa, USA',
    thumb: 'http://167.99.71.200/wp-content/uploads/2022/02/z8VpsTdIjBhdeGeNEsHFwz6MJXp-152x228.jpg',
    link_nonton: 'http://167.99.71.200/redeeming-love-2022/'
  },
  {
    judul: 'LOVERS (2019)',
    genre: 'Romance, Germany',
    thumb: 'http://167.99.71.200/wp-content/uploads/2021/12/soWgUZ6aqj8f6E2AuEiUKU0sXIU-152x228.jpg',
    link_nonton: 'http://167.99.71.200/lovers-2019/'
  },
  {
    judul: 'If Anything Happens I Love You (2020)',
    genre: 'Animation, Drama, USA',
    thumb: 'http://167.99.71.200/wp-content/uploads/2021/03/85tDhACvKDQxQoJhBYLvDU0ik1n-3-152x228.jpg',
    link_nonton: 'http://167.99.71.200/if-anything-happens-i-love-you-2020/'
  },
  {
    judul: 'Story of Yan Chixia: Love in Lan Ruo Temple (2020)',
    genre: 'Tak Berkategori, China',
    thumb: 'http://167.99.71.200/wp-content/uploads/2021/03/ebvYsTvxy5VsoByanojbB32ES8N-152x228.jpg',
    link_nonton: 'http://167.99.71.200/story-of-yan-chixia-love-in-lan-ruo-temple-2020/'
  },
  {
    judul: 'Squared Love (2020)',
    genre: 'Comedy, Romance, Poland',
    thumb: 'http://167.99.71.200/wp-content/uploads/2021/02/qeRCXsOitUdtDXc5sSVgwYGTZyg-2-152x228.jpg',
    link_nonton: 'http://167.99.71.200/squared-love-2020/'
  },
  {
    judul: 'ariana grande: excuse me, i love you (2020)',
    genre: 'Documentary, Music, USA',
    thumb: 'http://167.99.71.200/wp-content/uploads/2021/01/nm10ajNVkKwwyf8VFPkZnr93GbC-152x228.jpg',
    link_nonton: 'http://167.99.71.200/ariana-grande-excuse-me-i-love-you-2020/'
  },
  {
    judul: 'Divine Love',
    genre: 'Drama, Science Fiction, Brazil, Chile, Denmark, Norway, Sweden, Uruguay',
    thumb: 'http://167.99.71.200/wp-content/uploads/2020/11/2vFlT0g66zZeqnrAFeNPsHNrKZW-152x228.jpg',
    link_nonton: 'http://167.99.71.200/divine-love/'
  },
  {
    judul: 'Love, Guaranteed (2020)',
    genre: 'Comedy, Romance, USA',
    thumb: 'http://167.99.71.200/wp-content/uploads/2020/09/6K22JB6fZZLBuM0knfl8rs9Zoxg-3-152x228.jpg',
    link_nonton: 'http://167.99.71.200/love-guaranteed-2020/'
  },
  {
    judul: 'World Famous Lover (2020)',
    genre: 'Drama, Romance, India',
    thumb: 'http://167.99.71.200/wp-content/uploads/2020/08/tUiMt0ftDjSUvXwJDkkVZH6lY6g-3-152x228.jpg',
    link_nonton: 'http://167.99.71.200/world-famous-lover-2020/'
  },
  {
    judul: 'Almost Love (2020)',
    genre: 'Drama, Romance, USA',
    thumb: 'http://167.99.71.200/wp-content/uploads/2020/07/fZcZvNHAjB3eLzkFtwFwoCYGpjn-2-152x228.jpg',
    link_nonton: 'http://167.99.71.200/almost-love-2020/'
  },
  {
    judul: 'Love and Run (2019)',
    genre: 'Comedy, Romance, Thailand',
    thumb: 'http://167.99.71.200/wp-content/uploads/2020/06/1QChEoltWCxCqCMiuC6YA9wI5fo-152x228.jpg',
    link_nonton: 'http://167.99.71.200/love-and-run-2019/'
  },
  {
    judul: 'Are We In Love? (2020)',
    genre: 'Fantasy, Romance, Korea',
    thumb: 'http://167.99.71.200/wp-content/uploads/2020/05/Af07K0TATzeEbG1YmwChULduP3S-152x228.jpg',
    link_nonton: 'http://167.99.71.200/are-we-in-love-2020/'
  }
]
```
</details>
<details><summary><b>mediafire link download</b></summary><br>

> Required parameters
> - (url) *type **String***

```js
scraper.other.mediafire('https://www.mediafire.com/file/vg5udti5rim2wd6/HappyMod-2-8-0.apk/file')
.then(response => {
  console.log(response)
})
```

#### output
```json
{
  judul: 'https://download2392.mediafire.com/vtbgqsyxvvrg/vg5udti5rim2wd6/HappyMod-2-8-0.apk',
  upload_date: '',
  size: '',
  mime: '',
  link: 'https://download2392.mediafire.com/vtbgqsyxvvrg/vg5udti5rim2wd6/HappyMod-2-8-0.apk'
}
```
</details>
<details><summary><b>character in animeplanet</b></summary><br>

> Required parameters
> - (query) *type **String***
```js
scraper.other.chara('elaina')
.then(response => {
  console.log(response)
})
```

#### output
```json
{                                                                                                                                                                                  
  nama: 'Elaina',
  gender: 'Female ',
  warna_rambut: 'Grey ', 
  warna_mata: undefined,
  gol_darah: undefined,
  birthday: undefined,
  description: ''
}
```
</details>
<details><summary><b>Instagram download media</b></summary><br>

> Required parameters
> - (url) *type **String***

```js
scraper.other.igdl('https://www.instagram.com/reel/CkN-Iz9pI4j/?utm_source=ig_web_copy_link')
.then(response => {
  console.log(response)
})
```

#### output
```json
[
  {
    audioAvailable: true,
    cached: false,
    chunked: false,
    extension: 'mp4',
    formattedSize: '20M',
    quality: 'HD',
    videoAvailable: true,
    url: 'https://downloader.twdown.online/en0961/free-video-converter?url=aeHGRl01ceHGMl6hLbym9RtvZdWeRWpTYpSg5O0O0OzO0O0Oc3lvdXR1YmUuY29tL2dldD9fX3NpZz1XMW53aU9ZVS1oMnZ1WTJjRXJyLUlRJl9fZXhwaXJlcz0xNjY2OTU3OTk2JnVyaT1odHRwcyUzQSUyRiUyRnNjb250ZW50LmNkbmluc3RhZ3JhbS5jb20lMkZ2JTJGdDUwLjI4ODYtMTYlMkYzMTI4MTI3ODZfMTE4Mzg0MDA4NTY3NzQ2NV8xMTUwNjYwMTAzNTM2ODA4MjYyX24ubXA0JTNGX25jX2h0JTNEc2NvbnRlbnQuY2RuaW5zdGFncmFtLmNvbSUyNl9uY19jYXQlM0QxMDElMjZfbmNfb2hjJTNESHpvb044RW5XWkVBWDlDRjl1MCUyNmVkbSUzREFKQmdacllCQUFBQSUyNmNjYiUzRDctNSUyNm9oJTNEMDBfQWZBYW5OVUNnaERxM3J0RzMwRXJibVlFSVJSMURZVy1qMlVLZW9iS2xyYjNZdyUyNm9lJTNENjM1RDNCMDklMjZfbmNfc2lkJTNENzhjNjYyJTI2ZGwlM0QxJmZpbGVuYW1lPVNpYXBhJTIweWFuZyUyMG1hdSUyMGp1Z2ElRTIlODElQTMlMjBTdW1iZXItJTIwSW5zdGFncmFtLWx1c2hmYWRlZCVFMiU4MSVBMyVFMiU4MSVBMyUyM090YWt1X0FuaW1lX0luZG9uZXNpYSUyMCUyM090YWt1X0Nvcm5lciUyMCUyM3lvcmZvcmdlciUyMCUyM3lvciUyMCUyM2Nvc3BsYXklMjAlMjNjb3NwbGF5ZXIlMjAlMjNzcHl4ZmFtaWx5JTIwJTIzb3Rha3UlMjAlMjNhbmltZWluZG8ubXA0JnVhPS0mcmVmZXJlcj1odHRwcyUzQSUyRiUyRnd3dy5pbnN0YWdyYW0uY29tJTJG#video_show'
  }
]
```
</details>
<details><summary><b>soundcloud download</b></summary><br>

> Required parameters
> - (url) *type **String***

```js
scraper.other.soundcloud('https://on.soundcloud.com/L9K2C')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
    judul: 'Keisya Levronka - Tak Ingin Usai (Slowed + Reverb)',
   download_count: '6.49 M',
   thumb: 'https://i1.sndcdn.com/artworks-tkgMX6xzd2YyWAoL-ncuaGg-original.jpg',
   link: 'https://cf-media.sndcdn.com/OZUmFqgD12OI.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vT1pVbUZxZ0QxMk9JLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjY2OTU1MDg4fX19XX0_&Signature=fvpaCy6trQs4QBJC8u8tOsywnOQDsD92qic4zsNSX~FUwt~A8EnCrzQ1rUnF-db4oRAteWyaU0v~YIzmtqPKhm72IxBpYBvEKuHWSl2edv-fyiNAy4kg6T1qrdndSUSXAB7xsR4kQUnB0FuAKZpgJ00P5mRlnxLW8gofksstPq47REh1A1wQI4xFRpN4h~wewznupVFzUY6O0CMpY5c~xHUT1ZbtHjldkNhbz72wTmGWH8zRyhw3IO-USGjAt4v~1oYwgdFKJwpDyOQ4s7h5q1HA8Wtut6YLSKvH8ahjlkmDwhylAnIJqWrMyG4rPIL44ocq8pHP55j7ROfjomM6dw__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'
}
```
</details>

### Anime

<details><summary><b>Anoboy Search</b></summary><br>

> Required parameters
> - (query) *type **String***

```js
scraper.anime.anoboy_search('one piece')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: {
    download_sd: {
      m4u: 'https://www.mp4upload.com/q5q1acqejda5',
      zippy: 'https://www60.zippyshare.com/v/WfIWaAgk/file.html',
      mirror: 'https://www.mirrored.to/files/E1U1O24L/One_Piece_-_1032.360.mp4_links'
    },
    thumbnail: 'https://4.bp.blogspot.com/--vECG2T4EDs/XavTXQdeo8I/AAAAAAAABWg/m5JcbW9hosgX_yU8t2I3XEYQaheB5LxiQCLcBGAsYHQ/s240/04-onepiece.jpeg',
    title: 'One Piece Subtitle Indonesia',
    synopsis: 'Gol D. Roger dikenal sebagai “Raja Bajak Laut,�? terkuat dan paling terkenal yang telah berlayar di Grand Line. Penangkapan dan kematian Roger oleh Pemerintah Dunia membawa perubahan di seluruh dunia. Kata-kata terakhirnya sebelum kematiannya mengungkapkan keberadaan harta terbesar di dunia, yaitu One Piece. kata2 tersebut membawa dan menjadi Era bajak laut, siapapun pria yang bermimpi untuk menemukan One Piece-yang menjanjikan jumlah yang tidak terbatas dari kekayaan dan ketenaran-dan sangat mungkin puncak kemuliaan dan gelar Raja Bajak Laut.'
  }
}
```
</details>
<details><summary><b>Otakudesu Search</b></summary><br>

> Required parameters
> - (query) *type **String***

```js
scraper.anime.otakudesu_search('one piece')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: [
    {
      thumbnail: 'https://otakudesu.video/wp-content/uploads/2021/05/One-Piece-Sub-Indo.jpg'
    },
    {
      title: 'One Piece',
      japan: 'ONE PIECE',
      rate: '8.54',
      producer: 'Fuji TV, TAP, Shueisha',
      type: 'TV',
      status: 'Ongoing',
      episode: '?',
      duration: '24 Menit',
      release: 'Oct 20, 1999',
      studio: 'Toei Animation',
      genre: 'Action, Adventure, Comedy, Drama, Fantasy, Shounen, Super Power',
      desc: 'Dulu, ada seorang bajak laut terkenal di seluruh lautan bernama Gol D\n' +
        ' Roger. Ia merupakan seorang raja bajak laut yang telah berlayar mengarungi seluruh Grand Line, sayangnya ia ditangkap pemerintah dan telah dieksekusi mati. Sesaat sebelum kematiannya, Ia mengumumkan kepada dunia bahwa dirinya menyimpan sebuah harta karun bernama One Piece, sebuah harta karun yang kini menjadi incaran seluruh bajak laut yang ada di dunia.Di Era Bajak Laut saat ini, ada seorang remaja bernama Monkey D. Luffy yang memiliki cita-cita untuk menjadi seorang Raja Bajak Laut. Namun Luffy sadar bahwa ia tidak bisa melakukannya sendiri, sembari dalam perjalanan ia juga mencari kru dan bertemu dengan teman-temannya yang baru. Berbeda dengan bajak laut lain yang ganas dan jahat, Luffy bersama teman-temannya berlayar murni atas dasar petualangan serta mencari tempat tempat baru yang akan muncul di hadapan mereka.Di perjalanan inilah cerita mereka dimulai, mampukan Luffy bersama teman-temannya mencapai impian mereka?(Info: Episode sebelumnya akan ditambahkan secara berkala)',
      batch: 'https://otakudesu.video/lengkap/wpoiec-sub-indo-p35/'
    }
  ]
}
```
</details>
<details><summary><b>My Anime List Top Airing</b></summary><br>

```js
scraper.anime.mal_top_airing()
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: [
    {
      rank: '1',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1566/122794.jpg?s=1dd290c4b0bc3df1083c456064109e2f',
      title: 'Kingdom 4th Season',
      score: '8.81',
      link: 'https://myanimelist.net/anime/50160/Kingdom_4th_Season'
    },
    {
      rank: '2',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1864/122519.jpg?s=17612a9ecb307994db4ced0a85774a37',
      title: 'Made in Abyss: Retsujitsu no Ougonkyou',
      score: '8.80',
      link: 'https://myanimelist.net/anime/41084/Made_in_Abyss__Retsujitsu_no_Ougonkyou'
    },
    {
      rank: '3',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/6/73245.jpg?s=f792b8c9e28534ae455d06b15e686a14',
      title: 'One Piece',
      score: '8.66',
      link: 'https://myanimelist.net/anime/21/One_Piece'
    },
    {
      rank: '4',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1120/120796.jpg?s=a52ff27a36d2c027953221d2627c898e',
      title: 'Summertime Render',
      score: '8.49',
      link: 'https://myanimelist.net/anime/47194/Summertime_Render'
    },
    {
      rank: '5',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1530/120110.jpg?s=9b3fb5bfd6e183b3482cd6e245e9270a',
      title: 'Overlord IV',
      score: '8.33',
      link: 'https://myanimelist.net/anime/48895/Overlord_IV'
    },
    {
      rank: '6',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1259/110227.jpg?s=08c77f58ab974a8fc36af5e2eac9040a',
      title: 'Holo no Graffiti',
      score: '8.32',
      link: 'https://myanimelist.net/anime/44042/Holo_no_Graffiti'
    },
    {
      rank: '7',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1392/124401.jpg?s=e85f33c9c344cfcfb5e3618fbe849240',
      title: 'Lycoris Recoil',
      score: '8.28',
      link: 'https://myanimelist.net/anime/50709/Lycoris_Recoil'
    }
  ]
}
```
</details>
<details><summary><b>My Anime List Top Anime</b></summary><br>

```js
scraper.anime.mal_top_anime()
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: [
    {
      rank: '1',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f',
      title: 'Fullmetal Alchemist: Brotherhood',
      score: '9.13',
      link: 'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood'
    },
    {
      rank: '2',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1160/122627.jpg?s=9b41450e9598d10c97fb4eeb7cca3737',
      title: 'Kaguya-sama wa Kokurasetai: Ultra Romantic',
      score: '9.12',
      link: 'https://myanimelist.net/anime/43608/Kaguya-sama_wa_Kokurasetai__Ultra_Romantic'
    },
    {
      rank: '3',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/3/72078.jpg?s=e9537ac90c08758594c787ede117f209',
      title: 'Gintama°',
      score: '9.08',
      link: 'https://myanimelist.net/anime/28977/Gintama°'
    },
    {
      rank: '4',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/5/73199.jpg?s=97b97d568f25a02cf5a22dda13b5371f',
      title: 'Steins;Gate',
      score: '9.08',
      link: 'https://myanimelist.net/anime/9253/Steins_Gate'
    },
    {
      rank: '5',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1517/100633.jpg?s=4540a01b5883647ade494cd28392f100',
      title: 'Shingeki no Kyojin Season 3 Part 2',
      score: '9.07',
      link: 'https://myanimelist.net/anime/38524/Shingeki_no_Kyojin_Season_3_Part_2'
    },
    {
      rank: '6',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/4/50361.jpg?s=b3a061db8c3d42a055d58f9df1f3dac7',
      title: "Gintama'",
      score: '9.05',
      link: 'https://myanimelist.net/anime/9969/Gintama'
    },
    {
      rank: '7',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1988/113791.jpg?s=e12ba155fe4a7beff571a5010d8214b2',
      title: 'Gintama: The Final',
      score: '9.05',
      link: 'https://myanimelist.net/anime/39486/Gintama__The_Final'
    }
  ]
}
```
</details>
<details><summary><b>My Anime List Search</b></summary><br>

> Required parameters
> - (query) *type **String***

```js
scraper.anime.mal_search_anime('one piece')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: [
    {
      title: 'One Piece Film: Gold',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/12/81081.jpg?s=4372756d851a7e1807a572817ac16574',
      url: 'https://myanimelist.net/anime/31490/One_Piece_Film__Gold',
      type: 'Movie',
      episode: '1',
      score: '7.09'
    },
    {
      title: 'One Piece Film: Z',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/6/44297.jpg?s=ab00c4fc2882d3bb72c1985ada0af886',
      url: 'https://myanimelist.net/anime/12859/One_Piece_Film__Z',
      type: 'Movie',
      episode: '1',
      score: '7.91'
    },
    {
      title: 'One Piece',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/6/73245.jpg?s=f792b8c9e28534ae455d06b15e686a14',
      url: 'https://myanimelist.net/anime/21/One_Piece',
      type: 'Movie',
      episode: '1',
      score: '8.15'
    },
    {
      title: 'One Piece Movie 14: Stampede',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1221/100550.jpg?s=0a8df0aea5d9091e628bab80b0dfae26',
      url: 'https://myanimelist.net/anime/38234/One_Piece_Movie_14__Stampede',
      type: 'TV',
      episode: '-',
      score: '8.66'
    },
    {
      title: 'One Piece 3D: Mugiwara Chase',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/4/32455.jpg?s=991795b9931d468dd5e49ab8249ba9a8',
      url: 'https://myanimelist.net/anime/9999/One_Piece_3D__Mugiwara_Chase',
      type: 'Movie',
      episode: '1',
      score: '8.24'
    },
    {
      title: 'One Piece Film: Strong World',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1192/116784.jpg?s=ab8dc5d03ecadd39b7b9ddff4cfbfb82',
      url: 'https://myanimelist.net/anime/4155/One_Piece_Film__Strong_World',
      type: 'Movie',
      episode: '1',
      score: '6.97'
    },
    {
      title: 'One Piece Movie 04: Dead End no Bouken',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/1100/116767.jpg?s=a5923a15c9ba56da9bb272f8440543c1',
      url: 'https://myanimelist.net/anime/462/One_Piece_Movie_04__Dead_End_no_Bouken',
      type: 'Movie',
      episode: '1',
      score: '8.10'
    },
    {
      title: 'One Piece: Adventure of Nebulandia',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/5/77050.jpg?s=8018a90371f9663e8a39ffc283fb5adc',
      url: 'https://myanimelist.net/anime/32051/One_Piece__Adventure_of_Nebulandia',
      type: 'Movie',
      episode: '1',
      score: '7.54'
    },
    {
      title: 'One Piece Movie 09: Episode of Chopper Plus - Fuyu ni Saku, Kiseki no Sakura',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/anime/12/25414.jpg?s=b6f41293d9baad9499b085e1abaca011',
      url: 'https://myanimelist.net/anime/3848/One_Piece_Movie_09__Episode_of_Chopper_Plus_-_Fuyu_ni_Saku_Kiseki_no_Sakura',
      type: 'Special',
      episode: '1',
      score: '7.26'
    }
  ]
}
```
</details>
<details><summary><b>My Anime List Search Manga</b></summary><br>

> Required parameters
> - (query) *type **String***

```js
scraper.anime.mal_search_manga('one piece')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: [
    {
      title: 'One Piece',
      type: 'Manga',
      vol: '-',
      score: '9.20',
      link: 'https://myanimelist.net/manga/13/One_Piece',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/manga/2/253146.jpg?s=e5286481ed2b4c11ab39d1420110dc43'
    },
    {
      title: 'One Piece Party',
      type: 'Manga',
      vol: '7',
      score: '7.26',
      link: 'https://myanimelist.net/manga/86972/One_Piece_Party',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/manga/2/165199.jpg?s=3681113d712618dfe56c120656894a46'
    },
    {
      title: 'One Piece: Strong World',
      type: 'One-shot',
      vol: '-',
      score: '8.11',
      link: 'https://myanimelist.net/manga/17152/One_Piece__Strong_World',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/manga/1/25743.jpg?s=6d9e0a31fd6e1d0f4c136ea0ff0294fa'
    },
    {
      title: 'One Piece: Episode A',
      type: 'Manga',
      vol: '2',
      score: '8.16',
      link: 'https://myanimelist.net/manga/128594/One_Piece__Episode_A',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/manga/2/266074.jpg?s=c24cf1aacdc51dcad5af27fcf2637050'
    },
    {
      title: 'One Piece: Vivi no Bouken',
      type: 'One-shot',
      vol: '-',
      score: '7.39',
      link: 'https://myanimelist.net/manga/139972/One_Piece__Vivi_no_Bouken',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/manga/2/249763.jpg?s=204680ec1e989fc8bfd44afdbb9c1350'
    },
    {
      title: 'One Piece Novel: A',
      type: 'Light Novel',
      vol: '2',
      score: '7.93',
      link: 'https://myanimelist.net/manga/127114/One_Piece_Novel__A',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/manga/2/232216.jpg?s=77c7ab1089d3adb310bf8a3d694d829b'
    },
    {
      title: 'One Piece: Loguetown-hen',
      type: 'Light Novel',
      vol: '1',
      score: '7.03',
      link: 'https://myanimelist.net/manga/94534/One_Piece__Loguetown-hen',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/manga/1/167765.jpg?s=08ead37a0df1f906cdfe94106aa6478c'
    },
    {
      title: 'One Piece: Roronoa Zoro, Umi ni Chiru',
      type: 'One-shot',
      vol: '-',
      score: '7.63',
      link: 'https://myanimelist.net/manga/120865/One_Piece__Roronoa_Zoro_Umi_ni_Chiru',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/manga/3/265729.jpg?s=c3b7a9ecd32291f9d775d17c3c55f82a'
    },
    {
      title: 'Gekijouban One Piece: Stampede',
      type: 'Light Novel',
      vol: '1',
      score: '8.01',
      link: 'https://myanimelist.net/manga/120656/Gekijouban_One_Piece__Stampede',
      thumbnail: 'https://cdn.myanimelist.net/r/50x70/images/manga/1/230439.jpg?s=964b077dd0feb25b8b8407caf8ec08e3'
    }
  ],
}
```
</details>
<details><summary><b>My Anime List Search Character</b></summary><br>

> Required parameters
> - (query) *type **String***

```js
scraper.anime.mal_search_character('luffy')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: [
    {
      name: 'Monkey D., Luffy',
      alias_name: '(Mugiwara, Straw Hat, Lucy, Luffytaro)',
      url: 'https://myanimelist.net/character/40/Luffy_Monkey_D',
      thumbnail: 'https://cdn.myanimelist.net/r/42x62/images/characters/9/310307.jpg?s=3a27ab33bee665febfba970f24f203ba',
      anime: 'Nissan Serena x One Piece 3D: Mugiwara Chase - Sennyuu!! Sauzando Sanii-gou',
      manga: 'One Piece: Episode of Merry - Mou Hitori no Nakama no Monogatari'
    },
    {
      name: 'Yamamoto, Luffy',
      alias_name: '',
      url: 'https://myanimelist.net/character/207833/Luffy_Yamamoto',
      thumbnail: 'https://cdn.myanimelist.net/images/questionmark_23.gif',
      anime: '',
      manga: ''
    },
    {
      name: 'Shishido, Jouichirou',
      alias_name: '(Fluffy)',
      url: 'https://myanimelist.net/character/208064/Jouichirou_Shishido',
      thumbnail: 'https://cdn.myanimelist.net/r/42x62/images/characters/13/469123.jpg?s=ae43b5040d133c9d7b5d01cbd3f59cec',
      anime: '',
      manga: ''
    },
    {
      name: 'Piwi',
      alias_name: '(The Green Bird of Happiness, Fluffy)',
      url: 'https://myanimelist.net/character/155084/Piwi',
      thumbnail: 'https://cdn.myanimelist.net/r/42x62/images/characters/3/441386.jpg?s=d69f5a01aa1cca37680ada6848f64240',
      anime: 'Helck',
      manga: ''
    },
    {
      name: 'Wada, Akinori',
      alias_name: '(Sweet Pretty Lonely Heart Fluffybro)',
      url: 'https://myanimelist.net/character/152561/Akinori_Wada',
      thumbnail: 'https://cdn.myanimelist.net/r/42x62/images/characters/11/333941.jpg?s=ef6ccd0fbeac8670adecf9c50a16614a',
      anime: '',
      manga: ''
    },
    {
      name: 'Koyama, Nami',
      alias_name: '',
      url: 'https://myanimelist.net/character/207834/Nami_Koyama',
      thumbnail: 'https://cdn.myanimelist.net/images/questionmark_23.gif',
      anime: '',
      manga: ''
    },
    {
      name: 'Helmeppo',
      alias_name: '',
      url: 'https://myanimelist.net/character/12362/Helmeppo',
      thumbnail: 'https://cdn.myanimelist.net/r/42x62/images/characters/14/48661.jpg?s=ea8c21d6e7b875553a5b547f7d231a5d',
      anime: 'One Piece: Yume no Soccer Ou!',
      manga: 'One Piece Film: Z'
    },
    {
      name: 'Gina',
      alias_name: '',
      url: 'https://myanimelist.net/character/22414/Gina',
      thumbnail: 'https://cdn.myanimelist.net/r/42x62/images/characters/6/53322.jpg?s=21e974e1d4a04aaac7a92ae4984e8376',
      anime: 'One Piece',
      manga: ''
    },
    {
      name: 'Makino',
      alias_name: '',
      url: 'https://myanimelist.net/character/21210/Makino',
      thumbnail: 'https://cdn.myanimelist.net/r/42x62/images/characters/6/49465.jpg?s=359c7644512a10d7cefef3f03bda327f',
      anime: 'One Piece',
      manga: 'One Piece: Episode of Luffy - Hand Island no Bouken'
    },
    {
      name: 'Daigin',
      alias_name: '',
      url: 'https://myanimelist.net/character/161873/Daigin',
      thumbnail: 'https://cdn.myanimelist.net/r/42x62/images/characters/13/369186.jpg?s=ac234c957c96c9aa52c6464acca318c0',
      anime: 'One Piece',
      manga: ''
    }
  ]
}
```
</details>

### Downloader

<details><summary><b>TikTok</b></summary><br>

> Required parameters
> - (url) *type **String***

```js
scraper.download.tiktok('https://vt.tiktok.com/ZSR2vqUFY/?k=1')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  title: 'yg nonton moga cpt punya hedon😀#vario #teamvario #vario125 #variomodifikasi',
  thumbnail: 'https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/4af6989af1c44fa39971b775adeb3fc7_1659318526?x-expires=1663077600&x-signature=T79X4yfbWp%2FytYpw%2BuCAgb5DPjQ%3D&s=AWEME_DETAIL&se=false&sh=&sc=dynamic_cover&l=202209130816120101901760190404BCB2',
  duration: null,
  result: [
    {
      url: 'https://v16m-default.akamaized.net/9c6febad707af8b9fc63b00a68177c9c/632090bb/video/tos/useast2a/tos-useast2a-pve-0037-aiso/b7a3dec31bea40ba903e6a9f0d2a9f85/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1646&bt=823&cs=0&ds=3&ft=ArCXsBnZqi2mo0PeqzGBkVQnNk6bHKJ&mime_type=video_mp4&qs=0&rc=ZmVoNWloZ2VmOjQ0ZWY0aEBpM3A1dTY6ZnJtZTMzZjgzM0A0LWNfYjZhXl8xYmM1XmIyYSNlbi1mcjRvLWdgLS1kL2Nzcw%3D%3D&l=202209130816120101901760190404BCB2&btag=80000',
      quality: 'watermark',
      extension: 'mp4',
      size: 177,
      formattedSize: '177 B',
      videoAvailable: true,
      audioAvailable: true,
      chunked: false,
      cached: false
    },
    {
      url: 'https://v16m-default.akamaized.net/d70e4379f504b2762651c45b60721907/632090bb/video/tos/useast2a/tos-useast2a-pve-0037-aiso/dc6cdc20329a4c7ea9c237c3e3fe93ff/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1672&bt=836&cs=0&ds=6&ft=ArCXsBnZqi2mo0PeqzGBkVQnNk6bHKJ&mime_type=video_mp4&qs=0&rc=ZTpkaTU0ZjlpNWQ0NmY3Z0BpM3A1dTY6ZnJtZTMzZjgzM0BgYTIzLmExX2MxYDYyYzQtYSNlbi1mcjRvLWdgLS1kL2Nzcw%3D%3D&l=202209130816120101901760190404BCB2&btag=80000',
      quality: 'hd',
      extension: 'mp4',
      size: 1638710,
      formattedSize: '1.56 MB',
      videoAvailable: true,
      audioAvailable: true,
      chunked: false,
      cached: false
    },
    {
      url: 'https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7119956979585485595.mp3',
      quality: '128kbps',
      extension: 'mp3',
      size: 370356,
      formattedSize: '361.68 KB',
      videoAvailable: false,
      audioAvailable: true,
      chunked: false,
      cached: false
    }
  ],
}
```
</details>
<details><summary><b>YouTube DL Audio/Mp3</b></summary><br>

> Required parameters
> - (url) *type **String***

```js
scraper.download.youtube_dl_mp3('https://youtu.be/xCoSWXD8s_U')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: {
    title: 'Pargoy Joko Kentir - Terate Garaga Jandhut Feat BG audio __Live Munggur Sabtu 3 Sept 2022',
    description: 'Terimakasih sudah mampir ke chanel kami aditjaya pictures\n' +
      'dukung chanel kami dengan subcribe like koment agar admin semangat upload\n' +
      'sehat selalu buat kalian semua.\n' +
      '\n' +
      'Garaga jandut Sragen Pimp . Bams 0813-9249-2929\n' +
      'Selorejo, kedawung, Sragen \n' +
      'Jambangan, Celep, Kedawung, Sragen\n' +
      '\n' +
      'Audio Sound \n' +
      'BG Audio Abah Windhi 0856-4226-2595\n' +
      'Mojo, Sragen\n' +
      '\n' +
      ' "AditjayA pictures" photography& videography\n' +
      'mastering video dan audio 0853 2717 2730\n' +
      '\n' +
      '#garaga_music \n' +
      '#garaga_jandhut \n' +
      '#garagasragen\n' +
      '#bendronggeni \n' +
      '#reogbendronggeni \n' +
      '#bgaudio  \n' +
      '#tataganosa \n' +
      '#veronikadantik \n' +
      '#chefiramdhani \n' +
      '#victoriaangel\n' +
      '#victoria \n' +
      '#aditjaya_pictures \n' +
      '#reog_ganas',
    length_econds: '372',
    owner_rofile_url: 'http://www.youtube.com/channel/UCzFHpkN9Y_yqEiWCXGowmrA',
    external_channel_id: 'UCzFHpkN9Y_yqEiWCXGowmrA',
    thumb: 'https://i.ytimg.com/vi/xCoSWXD8s_U/maxresdefault.jpg',
    channel: 'aditjaya pictures',
    published: '2022-09-09',
    views: '30152',
    category: 'Entertainment',
    url: 'https://rr1---sn-poqvn5u-n0cz.googlevideo.com/videoplayback?expire=1663078814&ei=Pj0gY-_lIdyK4-EP7Pmo0AM&ip=114.4.223.3&id=o-APjiCPtlOqJ2Puqt74IqleXq-dcGF3gVd_wVpjuOzOj-&itag=250&source=youtube&requiressl=yes&mh=wc&mm=31%2C29&mn=sn-poqvn5u-n0cz%2Csn-poqvn5u-jb36&ms=au%2Crdu&mv=m&mvi=1&pl=22&initcwndbps=272500&vprv=1&mime=audio%2Fwebm&ns=NQwfYoHO-PiHqFh5fx0SppkH&gir=yes&clen=3008992&dur=371.821&lmt=1662886555913040&mt=1663056783&fvip=3&keepalive=yes&fexp=24001373%2C24007246&c=WEB&rbqsm=fr&txp=5432434&n=7Jx3VQIz9Qi_jQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgWUzWL_HOh9hIV2Y25r8VyI-7p55tgPlgxC5JrsAjLAwCIQDNgeah0A5SHTayFNJDTDK8BQxrmA6FHen4EXw0gmd_PA%3D%3D&sig=AOq0QJ8wRgIhAKgDbiv6z2VeQWWzqRX4nRcACcSm0Z_i0Gw13Z1ovXbeAiEA1exKqLHYPtUVQ7h8u3-11NUC5vd7L2E8YjSL9QiSwTI%3D'
  },
}
```
</details>
<details><summary><b>YouTube DL Video/Mp4</b></summary><br>

> Required parameters
> - (url) *type **String***

```js
scraper.download.youtube_dl_mp4('https://youtu.be/xCoSWXD8s_U')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: {
    title: 'Pargoy Joko Kentir - Terate Garaga Jandhut Feat BG audio __Live Munggur Sabtu 3 Sept 2022',
    description: 'Terimakasih sudah mampir ke chanel kami aditjaya pictures\n' +
      'dukung chanel kami dengan subcribe like koment agar admin semangat upload\n' +
      'sehat selalu buat kalian semua.\n' +
      '\n' +
      'Garaga jandut Sragen Pimp . Bams 0813-9249-2929\n' +
      'Selorejo, kedawung, Sragen \n' +
      'Jambangan, Celep, Kedawung, Sragen\n' +
      '\n' +
      'Audio Sound \n' +
      'BG Audio Abah Windhi 0856-4226-2595\n' +
      'Mojo, Sragen\n' +
      '\n' +
      ' "AditjayA pictures" photography& videography\n' +
      'mastering video dan audio 0853 2717 2730\n' +
      '\n' +
      '#garaga_music \n' +
      '#garaga_jandhut \n' +
      '#garagasragen\n' +
      '#bendronggeni \n' +
      '#reogbendronggeni \n' +
      '#bgaudio  \n' +
      '#tataganosa \n' +
      '#veronikadantik \n' +
      '#chefiramdhani \n' +
      '#victoriaangel\n' +
      '#victoria \n' +
      '#aditjaya_pictures \n' +
      '#reog_ganas',
    length_seconds: '372',
    owner_rofile_url: 'http://www.youtube.com/channel/UCzFHpkN9Y_yqEiWCXGowmrA',
    external_channel_id: 'UCzFHpkN9Y_yqEiWCXGowmrA',
    thumb: 'https://i.ytimg.com/vi/xCoSWXD8s_U/maxresdefault.jpg',
    channel: 'aditjaya pictures',
    published: '2022-09-09',
    views: '30195',
    category: 'Entertainment',
    url: 'https://rr1---sn-poqvn5u-n0cz.googlevideo.com/videoplayback?expire=1663079066&ei=Oj4gY53BDrSHz7sPn7qsuA4&ip=114.4.223.3&id=o-ACL0MX-ymSIzfL_KgSXkZKCZg0cBfrQqjA6XxVkl5SQ9&itag=18&source=youtube&requiressl=yes&mh=wc&mm=31%2C29&mn=sn-poqvn5u-n0cz%2Csn-poqvn5u-jb36&ms=au%2Crdu&mv=m&mvi=1&pl=22&initcwndbps=272500&vprv=1&mime=video%2Fmp4&ns=bAXUm_zkk7WRUWcT_yS9dAEH&gir=yes&clen=36351912&ratebypass=yes&dur=371.867&lmt=1662888534086014&mt=1663057023&fvip=3&fexp=24001373%2C24007246&c=WEB&rbqsm=fr&txp=5438434&n=HKDcJ7vgJyMtzA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAP1N4P5HSgvlKvyKxMef8f-RXHcfoSZycLtihJbhweGnAiEAjm7abM0V-UsgBz861_tSU5nxgLO82qQH36eRUA_fZgI%3D&sig=AOq0QJ8wRQIgTDcjDb4kkEt_609pHEpBK2L169sxU4dxrkEHboAD9VkCIQDcBAtbSns2hlXqW2YGr5e3NdzColXuWZLxkiobSrT6jw%3D%3D'
  },
}
```
</details>
<details><summary><b>YouTube Play Audio/Mp3</b></summary><br>

> Required parameters
> - (query) *type **String***

```js
scraper.download.youtube_play_mp3('fungi look alive')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: {
    title: 'Fungi - Look Alive',
    description: '🔥 Blocboy Jr x Drake - Alive (Fungi Remix)🔥\n' +
      '↪︎ https://soundcloud.com/beatsbyfungi/look-alive\n' +
      "Bass Nation's Spotify playlist: http://spoti.fi/2kzinP8\n" +
      '\n' +
      '🔊 Bass Nation 🔊\n' +
      '●http://nations.io\n' +
      '●http://twitter.com/all808nation\n' +
      '●http://instagram.com/bassnation\n' +
      '●http://facebook.com/allbassnation\n' +
      '●http://soundcloud.com/allbassnation\n' +
      '●https://snapchat.com/add/allbassnation\n' +
      '\n' +
      '🎵 fungi 🎵\n' +
      '●https://soundcloud.com/beatsbyfungi\n' +
      '●https://traktrain.com/beatsbyfungi#168114\n' +
      '●https://www.instagram.com/beatsbyfungi/\n' +
      '●https://beatsbyfungi.bandcamp.com/\n' +
      '\n' +
      '⚠️ These videos may cause people with photosensitive epilepsy to convulse in seizures. Viewer discretion is advised. ⚠️\n' +
      '\n' +
      'Moving Backgrounds: https://www.instagram.com/officialgoestee/\n' +
      '\n' +
      '#fungi\n' +
      '#lookalive\n' +
      '#bassnation',
    length_seconds: '188',
    owner_rofile_url: 'http://www.youtube.com/channel/UCCvVpbYRgYjMN7mG7qQN0Pg',
    external_channel_id: 'UCCvVpbYRgYjMN7mG7qQN0Pg',
    youtube_url: 'https://youtube.com/watch?v=E7uWBOT7BYY',
    thumb: 'https://i.ytimg.com/vi/E7uWBOT7BYY/maxresdefault.jpg',
    channel: 'Bass Nation',
    published: '2019-05-16',
    views: '354059',
    category: 'Music',
    url: 'https://rr2---sn-poqvn5u-n0cz.googlevideo.com/videoplayback?expire=1663079220&ei=1D4gY7rjD9GE8QP5waDICQ&ip=114.4.223.3&id=o-AFQG4pJRqEDx5xx4i2_OWzlpNuz4N47VxucXIduXHJ2h&itag=18&source=youtube&requiressl=yes&mh=nS&mm=31%2C29&mn=sn-poqvn5u-n0cz%2Csn-poqvn5u-jb3y&ms=au%2Crdu&mv=m&mvi=2&pl=22&initcwndbps=281250&vprv=1&mime=video%2Fmp4&ns=K4CDA5TDJEvLUqlZ7COI7zsH&gir=yes&clen=15368963&ratebypass=yes&dur=187.663&lmt=1558045885390001&mt=1663057259&fvip=2&fexp=24001373%2C24007246&c=WEB&rbqsm=fr&d_tmro=no&txp=5531432&n=OeBULA8jWopB9Q&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgJbj21X4l1IK98PNPT6f9QSvnOOwpsO4Ifs7CqC-qzdMCIFksprsFop_m71YLSXuowsu1J6Ko3VOWWVwxQpoNC8Ja&sig=AOq0QJ8wRAIgZwJRgTcuuCPwX1CFxsnpuoOj9XHkcPRIj7cFxQpHwnkCIDhwkSDI6eyoIXmKiVGv0YjKzech4bA-GOyirWiqvLOL'
  },
}
```
</details>
<details><summary><b>YouTube Play Video/Mp4</b></summary><br>

> Required parameters
> - (query) *type **String***

```js
scraper.download.youtube_play_mp4('fungi look alive')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: {
    title: 'Fungi - Look Alive',
    description: '🔥 Blocboy Jr x Drake - Alive (Fungi Remix)🔥\n' +
      '↪︎ https://soundcloud.com/beatsbyfungi/look-alive\n' +
      "Bass Nation's Spotify playlist: http://spoti.fi/2kzinP8\n" +
      '\n' +
      '🔊 Bass Nation 🔊\n' +
      '●http://nations.io\n' +
      '●http://twitter.com/all808nation\n' +
      '●http://instagram.com/bassnation\n' +
      '●http://facebook.com/allbassnation\n' +
      '●http://soundcloud.com/allbassnation\n' +
      '●https://snapchat.com/add/allbassnation\n' +
      '\n' +
      '🎵 fungi 🎵\n' +
      '●https://soundcloud.com/beatsbyfungi\n' +
      '●https://traktrain.com/beatsbyfungi#168114\n' +
      '●https://www.instagram.com/beatsbyfungi/\n' +
      '●https://beatsbyfungi.bandcamp.com/\n' +
      '\n' +
      '⚠️ These videos may cause people with photosensitive epilepsy to convulse in seizures. Viewer discretion is advised. ⚠️\n' +
      '\n' +
      'Moving Backgrounds: https://www.instagram.com/officialgoestee/\n' +
      '\n' +
      '#fungi\n' +
      '#lookalive\n' +
      '#bassnation',
    length_seconds: '188',
    owner_rofile_url: 'http://www.youtube.com/channel/UCCvVpbYRgYjMN7mG7qQN0Pg',
    external_channel_id: 'UCCvVpbYRgYjMN7mG7qQN0Pg',
    youtube_url: 'https://youtube.com/watch?v=E7uWBOT7BYY',
    thumb: 'https://i.ytimg.com/vi/E7uWBOT7BYY/maxresdefault.jpg',
    channel: 'Bass Nation',
    published: '2019-05-16',
    views: '354059',
    category: 'Music',
    url: 'https://rr2---sn-poqvn5u-n0cz.googlevideo.com/videoplayback?expire=1663079220&ei=1D4gY7rjD9GE8QP5waDICQ&ip=114.4.223.3&id=o-AFQG4pJRqEDx5xx4i2_OWzlpNuz4N47VxucXIduXHJ2h&itag=18&source=youtube&requiressl=yes&mh=nS&mm=31%2C29&mn=sn-poqvn5u-n0cz%2Csn-poqvn5u-jb3y&ms=au%2Crdu&mv=m&mvi=2&pl=22&initcwndbps=281250&vprv=1&mime=video%2Fmp4&ns=K4CDA5TDJEvLUqlZ7COI7zsH&gir=yes&clen=15368963&ratebypass=yes&dur=187.663&lmt=1558045885390001&mt=1663057259&fvip=2&fexp=24001373%2C24007246&c=WEB&rbqsm=fr&d_tmro=no&txp=5531432&n=OeBULA8jWopB9Q&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgJbj21X4l1IK98PNPT6f9QSvnOOwpsO4Ifs7CqC-qzdMCIFksprsFop_m71YLSXuowsu1J6Ko3VOWWVwxQpoNC8Ja&sig=AOq0QJ8wRAIgZwJRgTcuuCPwX1CFxsnpuoOj9XHkcPRIj7cFxQpHwnkCIDhwkSDI6eyoIXmKiVGv0YjKzech4bA-GOyirWiqvLOL'
  },
}
```
</details>

### Convert

<details><summary><b>Emoji To Image/Png</b></summary><br>

> Required parameters
> - (emoji) *type **String***

```js
scraper.convert.emoji_to_png('🔥')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: {
    apple: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/fire_1f525.png',
    google: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/313/fire_1f525.png',
    samsung: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/samsung/320/fire_1f525.png',
    microsoft: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/microsoft/310/fire_1f525.png',
    whatsapp: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/whatsapp/326/fire_1f525.png',
    twitter: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/322/fire_1f525.png',
    facebook: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/327/fire_1f525.png',
    jooxPixel: 'https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/fire_1f525.png',
    openemoji: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/fire_1f525.png',
    emojidex: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/joypixels/340/fire_1f525.png',
    messanger: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/toss-face/342/fire_1f525.png',
    LG: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/openmoji/338/fire_1f525.png',
    HTC: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/noto-emoji/341/fire_1f525.jpg',
    mozilla: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/sony/336/fire_1f525.png',
    softbank: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/emojidex/112/fire_1f525.png',
    docomo: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/65/fire_1f525.png',
    KDDI: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/lg/307/fire_1f525.png'
  },
}
```
</details>
<details><summary><b>Google Text To Speech</b></summary><br>

> Required parameters
> - (text) *type **String***
> - (language) *type **String***

```js
var text = 'hello world' //the text you want to convert into sound
var language = 'id' //language code, you can check at https://github.com/wiraardy/scraper/blob/master/lib/defaults/country-code/country-codes.txt

scraper.convert.gtts(text, language)
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: {
    audio: 'https://translate.google.com/translate_tts?ie=UTF-8&q=hellp%20world&tl=id&total=1&idx=0&textlen=11&client=tw-ob&prev=input&ttsspeed=1'
  },
}
```
</details>

### Information

<details><summary><b>Earthquake Info</b></summary><br>

```js
scraper.info.gempa_terkini()
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: {
    waktu: '13/09/202208:09:18 WIB',
    lintang: '1.7',
    bujur: '139.06',
    magnitudo: '4.5',
    kedalaman: '10 Km',
    wilayah: 'Pusat gempa berada di laut 38km timur laut Sarmi',
    google_maps: 'https://maps.google.com/maps?ll=1.7,139.06,&amp;z=16&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=apiv3'
  },
}
```
</details>

### Search

<details><summary><b>Github Repository</b></summary><br>

> Required Parameters 
> - (query) *type **String***

```js
scraper.search.github_repo('rem_comp')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  count: 1,
  result: [
    {
      id: private,
      node_d: 'private',
      name_repo: 'scraper',
      full_name_repo: 'wiraardy/scraper',
      url_repo: 'https://github.com/wiraardy/scraper',
      description: null,
      git_url: 'git://github.com/wiraardy/scraper.git',
      ssh_url: 'git@github.com:wiraardy/scraper.git',
      clone_url: 'https://github.com/wiraardy/scraper.git',
      svn_url: 'https://github.com/wiraardy/scraper',
      homepage: null,
      stargazers: 6,
      watchers: 6,
      forks: 0,
      default_branch: 'master',
      language: 'JavaScript',
      is_private: false,
      is_fork: false,
      created_at: '2021-10-15T01:21:13Z',
      updated_at: '2022-09-04T13:39:38Z',
      pushed_at: '2022-09-13T03:39:41Z'
    }
  ],
}
```
</details>
<details><summary><b>Film</b></summary><br>

> Required Parameters 
> - (query) *type **String***

```js
scraper.search.film('the conjuring')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: [
    {
      title: 'The Conjuring: The Devil Made Me Do It (2021) Subtitle Indonesia',
      quality: 'HMAX WEB-DL2021',
      type: 'Movie',
      upload: '2021',
      link: 'http://167.99.31.48/the-conjuring-3-2021/',
      thumbnail: 'http://167.99.31.48/wp-content/uploads/2021/06/WcL9ZWI8n1hTp6IoKPwM7dpkYJ-200x300.jpg'
    },
    {
      title: 'The Conjuring 2 (2016) Subtitle Indonesia',
      quality: 'Bluray2016',
      type: 'Movie',
      upload: '2016',
      link: 'http://167.99.31.48/the-conjuring-2-2016/',
      thumbnail: 'https://m.media-amazon.com/images/M/MV5BZTlhZWY0YzAtMDA2Zi00NGVlLThhNzQtYjFjMWI0YjU0Yzg0XkEyXkFqcGdeQXVyNjIzNzM4NzA@._V1_SY1000_CR0,0,745,1000_AL_.jpg'
    },
    {
      title: 'The Conjuring (2013) Subtitle Indonesia',
      quality: 'Bluray2013',
      type: 'Movie',
      upload: '2013',
      link: 'http://167.99.31.48/the-conjuring-2013/',
      thumbnail: 'https://image.tmdb.org/t/p/w300/ejrD1lkCIQX26TO8k4gePsFpcyX.jpg'
    }
  ],
}
```
</details>
<details><summary><b>Postal Code</b></summary><br>

> Required Parameters
> - (query) *type **String***

```js
scraper.search.kodepos('ponorogo')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: [
    {
      province: 'Sumatera Selatan',
      city: 'Lubuk Linggau',
      subdistrict: 'Lubuk Linggau Utara Dua (II)',
      urban: 'Ponorogo',
      postalcode: '31619'
    },
    {
      province: 'Jawa Timur',
      city: 'Ponorogo',
      subdistrict: 'Ngebel',
      urban: 'Wagir Lor',
      postalcode: '63493'
    },
    {
      province: 'Jawa Timur',
      city: 'Ponorogo',
      subdistrict: 'Ngebel',
      urban: 'Sempu',
      postalcode: '63493'
    },
    {
      province: 'Jawa Timur',
      city: 'Ponorogo',
      subdistrict: 'Ngebel',
      urban: 'Talun',
      postalcode: '63493'
    }
  ]
}
```
</details>

### Stalk

<details><summary><b>GitHub</b></summary><br>

> Required Parameters
> - (query) *type **String***

```js
scraper.stalk.github('wiraardy')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: {
    login: 'wiraardy',
    id: private,
    node_id: 'private',
    avatar_url: 'https://avatars.githubusercontent.com/u/90832242?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/wiraardy',
    html_url: 'https://github.com/wiraardy',
    followers_url: 'https://api.github.com/users/wiraardy/followers',
    following_url: 'https://api.github.com/users/wiraardy/following{/other_user}',
    gists_url: 'https://api.github.com/users/wiraardy/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/wiraardy/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/wiraardy/subscriptions',
    organizations_url: 'https://api.github.com/users/wiraardy/orgs',
    repos_url: 'https://api.github.com/users/wiraardy/repos',
    events_url: 'https://api.github.com/users/wiraardy/events{/privacy}',
    received_events_url: 'https://api.github.com/users/wiraardy/received_events',
    type: 'User',
    site_admin: false,
    name: 'wiraardy',
    company: 'null',
    blog: 'https://rem-api.dwiqi.my.id',
    location: 'Tokyo',
    email: null,
    hireable: null,
    bio: 'bruh',
    twitter_username: null,
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: '2020-05-12T11:42:43Z',
    updated_at: '2022-01-10T15:38:59Z'
  },
  headers: {
    server: 'GitHub.com',
    vary: 'Accept, Accept-Encoding, Accept, X-Requested-With',
    etag: 'W/"605e0a1d5bfff1179c74f5d481f0fc3bbb951b076b251b60cbedd8cd7435f249"',
    connection: 'close'
  },
}
```
</details>

### Image

<details><summary><b>Pinterest</b></summary><br>

> Required Parameters
> - (query) *type **String***

```js
scraper.image.pinterest('rem')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: {
    img: 'https://i.pinimg.com/736x/97/5c/dd/975cdd87fe34a5832f07b8e17d5edd1d.jpg'
  }
}
```
</details>
<details><summary><b>Wallpaperflare</b></summary><br>

> Required Parameters
> - (query) *type **String***

```js
scraper.image.wallpaperflare('loli')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: {
    img: 'https://c4.wallpaperflare.com/wallpaper/618/686/459/soul-worker-stella-anime-style-games-loli-wallpaper-preview.jpg'
  }
}
```
</details>

### Hentai

<details><summary><b>Search</b></summary><br>

> Required Parameters
> - (query) *type **String***

```js
scraper.hentai.search('loli')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: [
    {
      thumbnail: 'https://hentai.tv/wp-content/uploads/2022/04/6073873e248fa110420211618183998.png',
      title: 'Bishoujo Comic Lolicon Angel: Mitsu No Aji Episode 1',
      views: '863,590',
      url: 'https://hentai.tv/hentai/bishoujo-comic-lolicon-angel-mitsu-no-aji-episode-1/'
    },
    {
      thumbnail: 'https://hentai.tv/wp-content/uploads/2020/07/lolita-anime-1-cv1.png',
      title: 'Lolita Anime Episode 1',
      views: '1,825,447',
      url: 'https://hentai.tv/hentai/lolita-anime-episode-1/'
    },
    {
      thumbnail: 'https://hentai.tv/wp-content/uploads/2022/04/6073877ff308b110420211618184063.png',
      title: 'Hajimete No Orusuban Episode 2',
      views: '1,277,306',
      url: 'https://hentai.tv/hentai/hajimete-no-orusuban-episode-2/'
    }
  ]
}
```
</details>
<details><summary><b>Random</b></summary><br>

```js
scraper.hentai.random()
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: {
    image: 'https://hentai.tv/wp-content/uploads/2022/04/6073811fea320110420211618182431-204x300.jpg',
    title: 'Shinsei Futanari Idol: Dekatama Kei! Episode 1',
    publised: '2016-02-25',
    views: '2,217,295',
    url: 'https://hentai.tv/hentai/shinsei-futanari-idol-dekatama-kei-episode-1/'
  }
}
```
</details>

### PornHub

<details><summary><b>Download</b></summary><br>

> Required Parameters
> - (url) *type **String***
> Additional Parameters
> - (key) *type **Array***

```js
var url = 'https://www.pornhub.com/view_video.php?viewkey=ph5e3d6b6065a1a'
//var key = ['TITLE', 'VIEWS', 'UP_VOTES', 'DOWN_VOTES', 'PERCENT', 'AUTHOR', 'AUTHOR_SUBSCRIBER', 'CATEGORIES', 'TAGS', 'PRODUCTION', 'DESCRIPTION', 'DURATION', 'UPLOAD_DATE', 'PORNSTARS', 'THUMBNAIL_URL', 'NUMBER_OF_COMMENT', 'COMMENTS', 'RELATED_VIDEOS', 'DOWNLOAD_URLS'];

scraper.pornhub.download(url) //scraper.pornhub.download(url, key)
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  title: 'girl japan big',
  download_urls: {
    '240P': 'https://dv-h.phncdn.com/hls/videos/202002/07/282679722/201221_0034_240P_1000K_282679722.mp4/master.m3u8?ttl=1663067213&l=0&ipa=114.4.223.3&hash=03cae8273ebb5327be9aba1ba26e2ca4',
    '480P': 'https://dv-h.phncdn.com/hls/videos/202002/07/282679722/,201221_0034_480P_2000K,201221_0034_240P_1000K,_282679722.mp4.urlset/master.m3u8?ttl=1663067213&l=0&ipa=114.4.223.3&hash=6dc6f1b2b596e1d6b47678fecda21a31'
  }
}
```
</details>
<details><summary><b>Search</b></summary><br>

> Required Parameters
> - (query) *type **String***
> Additional Parameters
> - (key) *type **Array***
> - (page) *type **Number***

```js
var query = 'japan'
//var key = ['TITLE', 'VIEWS', 'UP_VOTES', 'DOWN_VOTES', 'PERCENT', 'AUTHOR', 'AUTHOR_SUBSCRIBER', 'CATEGORIES', 'TAGS', 'PRODUCTION', 'DESCRIPTION', 'DURATION', 'UPLOAD_DATE', 'PORNSTARS', 'THUMBNAIL_URL', 'NUMBER_OF_COMMENT', 'COMMENTS', 'RELATED_VIDEOS', 'DOWNLOAD_URLS'];
//var page = 2

scraper.pornhub.search(query) //scraper.pornhub.search(query, key, page)
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  results: [
    {
      title: 'Pies to a fully trained busty pet!',
      views: 575000,
      author: 'iketeruyuji',
      duration: NaN,
      link: 'https://www.pornhub.com/view_video.php?viewkey=ph5f3bb9fbb2acf',
      hd: false,
      premium: false
    },
    {
      title: '篠田ゆき 性欲に飢えたアラサー熟女をと�? とんヤリまく�?',
      views: 809000,
      author: 'Paco Paco',
      duration: NaN,
      link: 'https://www.pornhub.com/view_video.php?viewkey=ph60a1a29ed8f85',
      hd: false,
      premium: false
    },
    {
      title: 'Japanese school girl gets her pussy licked, feels orgasm silently, and squirts by fingering.[3/6]',
      views: 2500000,
      author: 'okaikosama',
      duration: NaN,
      link: 'https://www.pornhub.com/view_video.php?viewkey=ph60bd08c30bf17',
      hd: false,
      premium: false
    }
  ]
}
```
</details>
<details><summary><b>Model/Artist</b></summary><br>

> Required Parameters
> - (name) *type **String***
> Additional Parameters
> - (key) *type **Array***

```js
var query = 'Eva Elfie'
//var key = ['TITLE','DESCRIPTION','RANK_MODEL','RANK_WEEK_MODEL','RANK_MONTH_MODEL','RANK_LAST_MONTH_MODEL','RANK_YEAR_MODEL','VIDEO_NUMBER','RELATIONSHIP_STATUS','INTERESTED_IN','INTERESTED_IN','GENDER','HEIGHT','WEIGHT','ETHNICITY','PROFILE_VIEWS','VIDEOS_WATCHED']

scraper.pornhub.model(query) //scraper.pornhub.model(query, key)
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  title: 'Eva Elfie',
  description: "Hey! I'm a young Siberian girl and I want to play a game with you) Rules are simple: you cum, I win ^_^Stop wasting your time - my tiny pussy is waiting for your sweet hot cum."
}
```
</details>
<details><summary><b>Video/Random</b></summary><br>

> Additional Parameters
> - (key) *type **Array***
> - (page) *type **Number***


```js
//var key = ['TITLE', 'VIEWS', 'UP_VOTES', 'DOWN_VOTES', 'PERCENT', 'AUTHOR', 'AUTHOR_SUBSCRIBER', 'CATEGORIES', 'TAGS', 'PRODUCTION', 'DESCRIPTION', 'DURATION', 'UPLOAD_DATE', 'PORNSTARS', 'THUMBNAIL_URL', 'NUMBER_OF_COMMENT', 'COMMENTS', 'RELATED_VIDEOS', 'DOWNLOAD_URLS'];
//var page = 2

scraper.pornhub.video() //scraper.pornhub.video(key, page)
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  results: [
    {
      title: 'NAUGHTY persian GIRL FUCK BY HER NERD classmate!دختر شیطون حشری از خرخون کلاسشون میخواد بهش درس بده',
      views: 274000,
      author: 'persianpeach',
      duration: NaN,
      link: 'https://www.pornhub.com/view_video.php?viewkey=ph62af640c78a05',
      hd: false,
      premium: false
    },
    {
      title: 'Girl brings the guy to a powerful fountain cum - Hot pov pussy job & Huge Cumshot',
      views: 378000,
      author: 'Sunny Jessica',
      duration: NaN,
      link: 'https://www.pornhub.com/view_video.php?viewkey=ph6140a56004645',
      hd: false,
      premium: false
    },
    {
      title: "Aidra Fox's Passionate And Intense Fuck Scene - Wicked",
      views: 744000,
      author: 'Wicked Pictures',
      duration: NaN,
      link: 'https://www.pornhub.com/view_video.php?viewkey=ph606e08b396917',
      hd: false,
      premium: false
    }
  ]
}
```
</details>

### News

<details><summary><b>Kompas News</b></summary><br>

> Required Parameters
> - (kategory) *type **String***
>
> *list kategori (terkini, terpopuler, global)*

```js
scraper.news.kompas_news('terkini')
.then(response => {
  console.log(response)
})
```
#### output
```json
{
  result: [
    {
      judul: 'Kepala Negara Hanya Boleh Pakai Bus Saat Melayat Ratu Elizabeth II, Ada yang Protes',
      tanggal: '13/09/2022, 16:29 WIB',
      tautan: 'https://www.kompas.com/global/read/2022/09/13/162900770/kepala-negara-hanya-boleh-pakai-bus-saat-melayat-ratu-elizabeth-ii-ada',
      thumbnail: 'https://asset.kompas.com/crops/73FlJVscJ2oXyHRtFe77T1lTyt8=/0x69:1024x752/355x237/data/photo/2022/09/12/631e9bd0a6299.jpg'
    },
    {
      judul: 'Setelah 2,5 tahun, Diaspora Indonesia di Singapura Bisa Kopdar Lagi Tanpa Masker',
      tanggal: '13/09/2022, 16:00 WIB',
      tautan: 'https://www.kompas.com/global/read/2022/09/13/160000770/setelah-2-5-tahun-diaspora-indonesia-di-singapura-bisa-kopdar-lagi-tanpa',
      thumbnail: 'https://asset.kompas.com/crops/wwGrWNTjjgAfYuWN3SYLcX049lE=/0x0:0x0/355x237/data/photo/2022/09/13/63202911e8219.jpg'
    },
    {
      judul: 'PM Armenia Sebut 49 Tentaranya Tewas dalam Baku Tembak dengan Azerbaijan',
      tanggal: '13/09/2022, 15:31 WIB',
      tautan: 'https://www.kompas.com/global/read/2022/09/13/153100270/pm-armenia-sebut-49-tentaranya-tewas-dalam-baku-tembak-dengan-azerbaijan',
      thumbnail: 'https://asset.kompas.com/crops/Yqh09Y2Rl2r6T0ePvugGDRaweiA=/0x23:1895x1286/355x237/data/photo/2020/11/16/5fb1ca68e4acf.jpg'
    }
  ]
}
```
</details>

#### Text Pro

<details><summary><b>Light Style</b></summary><br>

> Required Parameters
> - (type) *type **String***

<details><summary><b>list type</b></summary><br>

```json
{
 neon_text_effect,
 holographic_3d,
 galaxy_style,
 technology_neon_light,
 neon_devil_wings,
 glitch_text_effect,
 impressive_glitch,
 neon_light_text_3d,
 thunder_text_effect,
 neon_light_on_brick_wall,
 neon_light_glitch,
 light_glow_sliced,
 summer_neon_light,
 neon_light_blackpink_logo,
 gradient_neon_light
}
```
 </details>
 
> - (text) *type **String***

```js
var type = 'holographic_3d'
var text = 'wiraardy'

scraper.textpro.light_style(type, text)
.then(response => {
  console.log(response)
})
```
### output
```json
{
  result: {
    img: 'https://textpro.me/images/user_image/2022/09/63227636c9b4b.jpg'
  }
}
```
</details>

# NOTE

I will continue to update this package, so wait for my next update
For feature requests/report bugs/want to ask questions, please contact me at
* [Github](https://github.com/wiraardy)
* [Email](wiraardy112@gmail.com)