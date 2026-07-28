# Bow Yu-Gi-Oh! Collection Manager — GitHub Pages v1

A no-install Yu-Gi-Oh! collection manager that runs entirely in the browser.

## Features

- Browse Yu-Gi-Oh! sets through YGOPRODeck API v7
- View exact set printings, rarity, set code, and card images
- Track Unlimited, First Edition, and Limited Edition copies
- Track condition, language, purchase price, estimated value, favorites, trades, and notes
- Wishlist
- Owned and missing filters
- IndexedDB browser storage
- JSON backup export and import
- CSV export
- Browser caching for API data and card images
- Mobile-friendly design
- Scanner page marked Work in Progress
- Basic PWA support

## GitHub Pages

1. Create a public GitHub repository.
2. Upload all files from this folder.
3. Open Settings → Pages.
4. Choose Deploy from a branch.
5. Select `main` and `/ (root)`.
6. Save.

No PHP, XAMPP, Composer, database server, account, or download is required.

## Important YGOPRODeck usage note

YGOPRODeck asks developers to minimize repeated API calls and avoid continually hotlinking card images.

This project:

- Caches set and card API responses in IndexedDB.
- Caches loaded card images with the browser Cache API through the service worker.
- Uses lazy loading for card images.
- Loads set cards in pages instead of requesting all cards repeatedly.

Each visitor's browser still needs to fetch an image the first time they view it.

## Storage

Collection information stays in the visitor's browser. Users should export backups regularly.

This project is not affiliated with or endorsed by Konami or YGOPRODeck.


## Bow Collection Hub

This version includes direct links to:

https://collection.potterservice.com

Visitors can use the Bow Collection Hub to discover the other Bow collection managers and apps.
The link appears in the sidebar, top navigation area, and dashboard.
