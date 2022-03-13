import { memo, useState, useMemo, Children, useEffect, useRef } from 'react'
import { useIsDesktop } from 'hooks'
import { clampValue, throttle } from 'utils'
import FillElement from './FillElement'
import { ListViewProps } from './types'
import * as S from './styles'

const DEFAULT_MIN_INDEX = 0
const DEFAULT_MAX_INDEX = 1
const HEADER_OFFSET = 60 + 134
const VIRTUALIZED_MAX_WIDTH = 768
const THROTTLE_DELAY = 150

const VirtualizedListView = ({
  estimatedHeight,
  overScan = 0,
  children,
  ...props
}: ListViewProps) => {
  const isDesktop = useIsDesktop(true)

  const flattenChildren = useMemo(() => Children.toArray(children), [children])
  const childrenCount = Children.count(flattenChildren)

  const countRef = useRef(childrenCount)

  const [minIndex, setMinIndex] = useState(DEFAULT_MIN_INDEX)
  const [maxIndex, setMaxIndex] = useState(DEFAULT_MAX_INDEX)

  useEffect(() => {
    const scrollHandler = throttle((event) => {
      if (!event.currentTarget && window.innerWidth < VIRTUALIZED_MAX_WIDTH) {
        const scrollTop = window.scrollY - HEADER_OFFSET

        const newMinIndex = Math.floor(scrollTop / estimatedHeight)

        const firstItemOffset = estimatedHeight - (scrollTop % estimatedHeight)
        const viewportOverflow = Math.ceil(firstItemOffset / estimatedHeight)

        const newMaxIndex = newMinIndex + viewportOverflow

        const indexRange: [number, number] = [0, countRef.current - 1]
        setMinIndex(clampValue(newMinIndex - overScan, indexRange))
        setMaxIndex(clampValue(newMaxIndex + overScan, indexRange))
      }
    }, THROTTLE_DELAY)
    document.addEventListener('scroll', scrollHandler, { passive: true })

    return () => document.removeEventListener('scroll', scrollHandler)
  }, [])

  useEffect(() => {
    setMinIndex(DEFAULT_MIN_INDEX)
    setMaxIndex(DEFAULT_MAX_INDEX)
    countRef.current = childrenCount
  }, [childrenCount])

  const renderedChildren = useMemo(
    () => flattenChildren.slice(minIndex, maxIndex + 1),
    [flattenChildren, minIndex, maxIndex],
  )

  const gridHeadOffset = useRef(0)
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout

    if (gridHeadOffset.current) {
      const newScrollY =
        window.scrollY >= gridHeadOffset.current ? gridHeadOffset.current : 0
      scrollTimer = setTimeout(
        () => window.scrollTo({ top: newScrollY, behavior: 'smooth' }),
        THROTTLE_DELAY,
      )
    } else {
      const gridHeader = document.getElementById('grid-header')
      gridHeadOffset.current = gridHeader?.offsetTop ?? -1
    }

    return () => clearTimeout(scrollTimer)
  }, [children])

  const fillTopElements = minIndex
  const fillBottomElements = childrenCount - (maxIndex + 1)

  return (
    <S.Grid id="virtualized-view" data-item-count={childrenCount} {...props}>
      {isDesktop
        ? children
        : !!childrenCount && (
            <>
              <FillElement
                elementSize={estimatedHeight}
                elementsCount={fillTopElements}
              />

              {renderedChildren}

              <FillElement
                elementSize={estimatedHeight}
                elementsCount={fillBottomElements}
              />
            </>
          )}
    </S.Grid>
  )
}

export default memo(VirtualizedListView)
