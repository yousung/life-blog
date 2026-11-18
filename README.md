# 방송 건강노트

TV 건강 프로그램에서 다룬 내용을 50대 이후 독자가 읽기 쉽게 정리하는 정적 블로그입니다.

- 사이트: https://health.lovizu.com
- 스택: Astro (정적 빌드) → GitHub Pages (`.github/workflows/deploy-pages.yml`, master push 시 배포)
- 글 위치: `src/content/posts/<category>/<slug>.md` (스키마: `src/content.config.ts`)

```bash
npm ci
npm run dev    # 로컬 미리보기
npm run build  # astro check + 빌드
```

이 사이트의 정보는 방송 내용과 공개 자료를 정리한 것으로, 의사의 진료나 처방을 대신하지 않습니다.
