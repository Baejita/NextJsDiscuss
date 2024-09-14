import { db } from '@/app/db'
import { Chip } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import paths from '@/app/paths'
async function TopicList() {
  const topics = await db.topic.findMany()
  const renderTopics = topics.map(topic => {
    return (
      <div key={topic.id}>
      <Link href={paths.topicShow(topic.slug)}>
        <Chip color='warning' variant='shadow'>
          {topic.slug}
      </Chip>
      </Link>
      </div>)
  })
  return (
    <div className='flex flex-row flex-wrap gap-2 mt-4'>
      {renderTopics}
    </div>
  )
}

export default TopicList
