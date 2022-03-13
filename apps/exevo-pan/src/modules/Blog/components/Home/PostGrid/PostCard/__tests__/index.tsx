import { screen } from '@testing-library/react'
import { renderWithProviders, generateBlogPosts } from 'utils/test'
import { routes } from 'Constants'
import PostCard from '..'

const mockedPosts = generateBlogPosts().slice(0, 10)

describe('<PostCard />', () => {
  test.each(mockedPosts)(
    'should render all post data correctly',
    (blogPost) => {
      renderWithProviders(<PostCard postData={blogPost} />)

      const { slug, title, description, tags, thumbnail } = blogPost

      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
      expect(screen.getByText(description)).toBeInTheDocument()
      tags.forEach((tagName) => {
        expect(screen.getByText(tagName)).toBeInTheDocument()
      })

      expect(screen.getByAltText(title)).toHaveAttribute('src', thumbnail)

      expect(screen.getByRole('link')).toHaveAttribute(
        'href',
        `${routes.BLOG}/${slug}`,
      )
    },
  )
})
