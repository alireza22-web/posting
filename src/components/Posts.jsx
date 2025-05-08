import { posts } from "@/data/posts"
import { SummaryPosts } from "@/data/summary-posts"
import Link from "next/link"

export const Posts = ()=>{
  return (
    <div className="grid grid-cols-10 max-xl:grid-cols-1 gap-5 mt-6">
      <div className="col-span-7 bg-gray-100 dark:bg-gray-900 rounded-md dark:text-gray-50 text-gray-900 p-4">
        <div className="flex flex-col gap-5">
          {
            posts.map((item=>{
              return (
                <Link key={item.slug} href={`/post/${item.slug}`}>
                  <div  className="w-full hover:bg-gray-200 transition-colors duration-150 dark:hover:bg-gray-950 grid grid-cols-2 max-md:grid-cols-1 place-items-center gap-3 items-center py-4 border-gray-300 dark:border-gray-700  border-b">
                    <div className="w-full h-[200px] rounded-md overflow-hidden shadow-md dark:shadow-gray-700">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col items-start gap-2">
                      <span className="text-xl font-semibold line-clamp-1">{item.title}</span>
                      <p className="line-clamp-2 w-fit text-gray-600 dark:text-gray-400">
                        {item.content} ...
                      </p>
                      <div className="text-gray-500 flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                          <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                          <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{item.date}</span>
                      </div>
                    </div>
                </div>
                </Link>
              )
            }))
          }
        </div>
      </div>
      <div className="col-span-3 bg-gray-100 sticky h-fit top-4 max-xl:hidden dark:bg-gray-900 rounded-md dark:text-gray-50 text-gray-900 p-4">
        {
          SummaryPosts.map((item=>{
            return (
             <Link key={item.slug} href={`/post/${item.slug}`}>
                <div> 
                  <div>
                    <img src={item.image} alt="" />
                  </div>
                  <div className="flex flex-col p-2 items-center justify-center">
                    <span className="text-xl font-semibold">{item.title}</span>
                    <p className="text-justify leading-[30px] line-clamp-4 dark:text-gray-400 text-gray-600">{item.content}</p>
                  </div>
                </div>
             </Link>
            )
          }))
        }
      </div>
    </div>
  )
}