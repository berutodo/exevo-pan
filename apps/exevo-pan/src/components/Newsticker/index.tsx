import { useTranslations } from 'contexts/useTranslation'
import NextLink from 'next/link'
import { routes } from 'Constants'
import * as S from './styles'
import { NewstickerProps } from './types'

const Newsticker = ({ blogPosts, ...props }: NewstickerProps): JSX.Element => {
  const {
    translations: { common },
  } = useTranslations()

  return (
    <S.Wrapper {...props}>
      <S.SectionTitle>{common.Newsticker}</S.SectionTitle>

      <S.PostWrapper>
        {blogPosts.map(({ slug, title, tags, thumbnail }) => (
          <S.Card key={slug}>
            <S.Thumbnail>
              <S.FadeImage
                src={thumbnail}
                layout="fixed"
                width={48}
                height={48}
                alt={title}
                unoptimized
              />
            </S.Thumbnail>

            <S.Body>
              <S.Title>{title}</S.Title>

              <S.TagWrapper>
                {tags.map((tag) => (
                  <S.Tag key={tag} tagId={tag} />
                ))}
              </S.TagWrapper>
            </S.Body>

            <NextLink href={`${routes.BLOG}/${slug}`}>{title}</NextLink>
          </S.Card>
        ))}
      </S.PostWrapper>
    </S.Wrapper>
  )
}

export default Newsticker
