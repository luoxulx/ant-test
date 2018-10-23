/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const blogRouter = {
  path: '/blog',
  component: Layout,
  redirect: '/blog/index',
  name: 'Blog',
  meta: {
    title: 'Blog',
    icon: 'table'
  },
  children: [
    {
      path: 'article',
      component: () => import('@/views/blog/article/index'),
      name: 'Article',
      meta: { title: 'article' }
    },
    {
      path: 'category',
      component: () => import('@/views/blog/category/index'),
      name: 'Category',
      meta: { title: 'category' }
    },
    {
      path: 'tag',
      component: () => import('@/views/blog/tag/index'),
      name: 'Tag',
      meta: { title: 'tag' }
    },
    {
      path: 'comment',
      component: () => import('@/views/blog/comment/index'),
      name: 'Comment',
      meta: { title: 'comment' }
    }
  ]
}
export default blogRouter
