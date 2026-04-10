# MAPSITI - Vercel Final Deploy Pack

## Included
- Multi-page Vite config (`vite.config.js`)
- Vercel config (`vercel.json`)
- Static HTML/CSS/JS structure ready for GitHub + Vercel
- Placeholder assets for images/fonts where originals were unavailable

## Before deploy
Update the API base URL in both files:
- `survey.html`
- `result.html`

Replace:
```html
window.MapsiUtils.setApiBaseUrl('https://your-fastapi-domain.com');
```
with your real FastAPI domain.

## Deploy steps
1. Upload this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Leave Root Directory as `/`.
4. Vercel should detect Vite automatically.
5. Deploy.

## Notes
- This is a multi-page app with `index.html`, `survey.html`, and `result.html`.
- The frontend calls these backend routes:
  - `/profile`
  - `/recommendations`
  - `/crawl/musinsa`
  - `/crawl/zigzag`
- Make sure your backend allows CORS from your Vercel domain.


Fix applied: static assets are served from /public so Vite copies js/css/assets into dist during build.


이미지 캐릭터/성별 선택 이미지는 Imgur 원격 URL을 사용하도록 설정되어 있습니다. retro_m은 HTTPS로 정규화했습니다.
