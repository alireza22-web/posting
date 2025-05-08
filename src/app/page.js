import { Posts } from "@/components/Posts";
import { Profile } from "@/components/Profile";
import { posts } from "@/data/posts";

export default function Home() {
  return (
    <div className="res">
      <Profile/>
      <Posts/>
    </div>
  );
}
