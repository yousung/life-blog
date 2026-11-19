import type { CollectionEntry } from 'astro:content';

type Post = CollectionEntry<'posts'>;

export function getPublishedPosts(posts: Post[]) {
  return posts
    .filter((post) => post.data.status === 'published')
    .sort((a, b) => getPostDisplayDate(b).date.getTime() - getPostDisplayDate(a).date.getTime());
}

export function getPostDisplayDate(post: Post) {
  // 목록에는 방송일을 보여준다(수정일 updatedDate는 글 본문 메타에만 표시).
  const date = post.data.broadcastDate ?? post.data.date;
  return {
    date,
    label: '방송',
    text: new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' }).format(date)
  };
}

export function uniqueSorted(values: Array<string | undefined>) {
  return [...new Set(values.filter(Boolean) as string[])].sort((a, b) => a.localeCompare(b, 'ko'));
}
