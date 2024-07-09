import Link from "next/link";
import data from "../data/data.json";
import Card from "@/components/Card";
import AddCard from "@/components/AddCard";
export default function Home() {
  console.log(data);
  return (
    <div>
      <h1>Home Page</h1>
      <div className="flex justify-around gap-2">
        {data.blogs.map((blog) => (
          <Card
            key={blog.id}
            content={blog.content}
            name={blog.name}
            writter={blog.posted_by}
          />
        ))}
        <AddCard />
      </div>
    </div>
  );
}
