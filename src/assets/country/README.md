Country assets — add or replace background images

This folder is used by the portfolio route to show background images for each country card.

Two supported approaches

1) Use the existing asset pipeline (.asset.json)

- Upload your image to the project's asset service (the one producing `*.asset.json`).
- Commit the generated `your-image.jpg.asset.json` into `src/assets/country/`.
- Import the `.asset.json` in `src/assets/country/index.ts` and use its `.url` in the `COUNTRY_IMAGE` mapping.

Example (current pattern):

```ts
import newCountry from "./new-country.jpg.asset.json";

export const COUNTRY_IMAGE: Record<string, string> = {
  "New Country": newCountry.url,
};
```

2) Add a raw image file (direct Vite asset import)

- Copy the raw image (e.g. `new-country.jpg`) into `src/assets/country/`.
- Import the image directly in `index.ts` (Vite will return a URL string) and add it to the map.
- Restart the dev server if necessary.

Example (raw image):

```ts
import newCountry from "./new-country.jpg";

export const COUNTRY_IMAGE: Record<string, string> = {
  "New Country": newCountry,
};
```

Notes

- The keys in `COUNTRY_IMAGE` must match the `country` string in your `VISA_CATALOG` entries (see `src/lib/site.ts`).
- If you add a raw image, ensure you commit it and restart Vite so the asset is available.
- If you add an `.asset.json`, use the `.url` property as shown.

Testing

1. Run the dev server:

```bash
npm run dev
```

2. Open the `Portfolio` page and filter to the category containing your country. The card should show the background image.

If you'd like, I can add a sample `index.ts` import example or add a placeholder entry for a new country — tell me which country name and whether you will provide the image file or an `.asset.json`.
