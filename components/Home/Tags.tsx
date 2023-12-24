import { tags } from '@/data/Data'
import React from 'react'

const Tags:React.FC = () => {
  return (
    <>
      <ul className="flex items-center gap-3 flex-wrap">
          {tags &&
            tags?.map((elem,i) => (
              <li
                className="bg-[#D9D9D9] dark:bg-[#2a2a2a] text-[#000] dark:text-white text-[15px] lg:text-[13px] sm:text-[11px] capitalize px-3 py-1 rounded-[109.375px]"
                key={i}
              >
                {elem?.name}
              </li>
            ))}
        </ul>
    </>
  )
}

export default Tags
