import { Profile } from "@/components/Profile";
import { posts } from "@/data/posts";
import { notFound } from "next/navigation";

export default async function Page({params}){
  const {slug} = await params
  const post = posts.find(item => item.slug == slug)

  if (!post) return notFound()  

    
  return (
    <div className="res">
      <Profile/>
      <div className="mt-4">
        <div className="w-full">
          <img src={post.image} className="w-full h-[500px] max-lg:h-[400px] max-md:h-fit object-cover" alt="" />
        </div>
        <div className="py-4 px-2 flex flex-col gap-3">
          <span className="text-3xl dark:text-gray-200 font-semibold max-md:text-xl max-md:font-medium">{post.title}</span>
          <p className="text-gray-800 leading-[30px] dark:text-gray-200 text-justify max-md:text-sm">{post.content}</p>
        </div>
      </div>
    </div>
  )
} 