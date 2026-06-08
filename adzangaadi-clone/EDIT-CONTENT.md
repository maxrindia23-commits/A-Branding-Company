# How to edit content (no AI needed)

## Why Hero.jsx changes did not show

You are probably viewing the **wrong folder** or **wrong way to open the site**:

| You opened this | Editing Hero.jsx works? |
|-----------------|-------------------------|
| `website-ready` + OPEN-WEBSITE.bat | **NO** — old built copy until you rebuild |
| `website-ready\index.html` (double-click) | **NO** |
| `http://localhost:5173` with `npm run dev` running | **YES** — updates when you save |

## Correct workflow (recommended)

### 1. Start dev server (once per session)

Open **Command Prompt** or **PowerShell**:

```text
cd c:\Users\lenovo\Desktop\ABC\adzangaadi-clone
npm run dev
```

Leave that window open. Open in browser:

**http://localhost:5173**

### 2. Edit text in one file (easiest)

Open and edit:

`src\content\siteContent.js`

Example — change hero headline:

```js
export const hero = {
  line1: 'Your new headline here',
  ...
};
```

**Save the file** (Ctrl+S). The browser should refresh automatically within 1–2 seconds.

### 3. Or edit section files directly

| Section | File |
|---------|------|
| Hero | `src\components\sections\Hero.jsx` |
| About | `src\components\sections\About.jsx` |
| Why | `src\components\sections\WhySection.jsx` |
| Marketing cards | `src\components\sections\MarketingWild.jsx` |
| Why Choose ABC | `src\components\sections\WhyChooseABC.jsx` |
| Services | `src\components\sections\Services.jsx` |
| Contact | `src\components\sections\Contact.jsx` |

Always edit under **`adzangaadi-clone\src\`**, never under `website-ready\`.

### 4. If the page still looks old

- Hard refresh: **Ctrl + Shift + R**
- Confirm the URL is **localhost:5173**, not 8080 or a file path
- Confirm `npm run dev` is still running in the terminal

## After editing — update the “saved” copy (website-ready)

Only needed if you use `OPEN-WEBSITE.bat` / `website-ready` folder:

```text
cd c:\Users\lenovo\Desktop\ABC\adzangaadi-clone
npm run build
```

Then copy `dist` to `website-ready` again, or double-click **REBUILD-WEBSITE.bat** (if present).

## Quick checklist

- [ ] Terminal shows `VITE ... ready` and `localhost:5173`
- [ ] Browser tab URL is `http://localhost:5173`
- [ ] Saved the `.jsx` or `siteContent.js` file
- [ ] Not editing files inside `website-ready`
