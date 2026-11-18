import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORY_KEYS } from './consts';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/posts' }),
  schema: z.object({
    title: z.string().min(1),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    description: z.string().min(1),
    /** 방송일 기준. 수정 시점은 updatedDate에만 기록 */
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    status: z.enum(['draft', 'published']).default('draft'),
    category: z.enum(CATEGORY_KEYS),
    program: z.string().min(1),
    broadcaster: z.string().optional(),
    episode: z.string().optional(),
    broadcastDate: z.coerce.date().optional(),
    /** 방송에 나온 전문가(이름·소속·전문 분야). 방송에서 확인된 것만 */
    experts: z.array(z.string()).default([]),
    /** 글 상단 '한눈에 보기' 3~5줄 */
    summary: z.array(z.string()).default([]),
    /** 자주 묻는 질문 — FAQPage 구조화 데이터로도 출력 */
    faq: z.array(z.object({ q: z.string().min(1), a: z.string().min(1) })).default([]),
    tags: z.array(z.string()).default([]),
    source: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    author: z.string().default('lovizu')
  })
});

export const collections = { posts };
