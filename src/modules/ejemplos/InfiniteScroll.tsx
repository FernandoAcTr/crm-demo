import { sleep } from '@utils/helpers'
import { useState } from 'react'
import { Skeleton } from 'primereact/skeleton'
import InfiniteScroll from 'react-infinite-scroll-component'

const InfiniteScrollPage = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }))

  const fetchMoreData = async () => {
    await sleep(3000)
    setItems(items.concat(Array.from({ length: 20 })))
  }

  const style = {
    height: 30,
    border: '1px solid green',
    margin: 6,
    padding: 8,
  }

  const renderLoadingSkeleton = () => {
    return (
      <div className="field col-12 md:col-6 mb-5">
        <Skeleton className="mb-2"></Skeleton>
        <Skeleton width="10rem" className="mb-2"></Skeleton>
        <Skeleton width="5rem" className="mb-2"></Skeleton>
        <Skeleton height="2rem" className="mb-2"></Skeleton>
        <Skeleton width="10rem" height="4rem"></Skeleton>
      </div>
    )
  }

  return (
    <InfiniteScroll dataLength={items.length} next={fetchMoreData} hasMore={true} loader={renderLoadingSkeleton()}>
      {items.map((i, index) => (
        <div style={style} key={index}>
          div - #{index}
        </div>
      ))}
    </InfiniteScroll>
  )
}

export default InfiniteScrollPage
