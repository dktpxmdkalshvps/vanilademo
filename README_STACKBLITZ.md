# MapsiTI StackBlitz Pack

이 압축파일은 StackBlitz에 바로 업로드할 수 있게 정리된 프론트 프로젝트입니다.

## 사용 방법
1. StackBlitz에서 새 프로젝트를 만들거나 zip 업로드 후 엽니다.
2. 터미널이 열리면 `npm install` 후 `npm run dev`를 실행합니다.
3. `survey.html`과 `result.html` 안의 아래 주소를 실제 FastAPI 주소로 바꿉니다.
   - `https://your-fastapi-domain.com`
4. 백엔드 CORS에서 StackBlitz 도메인을 허용합니다.

## 포함 사항
- `css/`, `js/` 폴더로 재배치 완료
- `package.json` 추가 완료
- `survey.html`, `result.html`에 API Base URL 설정 코드 추가 완료
- 업로드되지 않은 이미지/폰트는 placeholder 파일로 대체

## 참고
- 현재 코드 흐름상 설문 완료 후 `/profile`, `/recommendations` 호출
- 결과 페이지 상품 버튼에서 `/crawl/musinsa`, `/crawl/zigzag` 호출
