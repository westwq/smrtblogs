"use client";

import Image from "next/image";
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';


const RenderBlogsBody = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [endCursor, setEndCursor] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const after = searchParams?.get('after');

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, [after]);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/blogs?first=12${(after)?"&after="+after:""}`);
      const data = await res.json();

      
      setBlogs(data.blog_connection.edges.map((edge: { node: any; }) => ({
        ...edge.node,
        "id": JSON.parse(atob(edge.node['id']))[3],
      })));
      setHasNextPage(data.blog_connection.pageInfo.hasNextPage);
      setEndCursor(data.blog_connection.pageInfo.endCursor);

    } catch (error) {
      console.error('Failed to fetch blogs:', error);
    }
    setLoading(false);
  };

  const loadMore = () => {
    if (hasNextPage) {
      router.push(`?first=12&after=${endCursor}`);
    }
  };

  const handleSearch = async () => {
    setLoading(true);
    if (searchTerm.length == 0)
      fetchBlogs();

    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ search_term: searchTerm }),
      });
      const data = await response.json();

      setBlogs(data.search_blogs);
    } catch (error) {
      console.error('Error performing search:', error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="items-center justify-between">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
         <p className="fixed left-0 top-0 flex w-full justify-center  pb-6 pt-8 backdrop-blur-2xl  lg:static lg:w-auto ">
          &nbsp;
         </p>
         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
            <input className="pointer-events-none flex justify-center border-b border-gray-300 place-items-center gap-2 p-8 lg:pointer-events-auto  from-zinc-200 pb-6 pt-8 backdrop-blur-2xl  dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border  lg:p-4 "
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search blogs..."
            />&nbsp;
           <button
             className="pointer-events-none flex justify-center border-b border-gray-300 bg-gradient-to-b place-items-center gap-2 p-8 lg:pointer-events-auto  from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
             onClick={handleSearch} disabled={loading}             
           >
             Search
           </button>
         </div>
       </div>
      {loading && <p>Loading...</p>}
      
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
      {blogs.map(blog => (
        <a
            key={blog['id']}
            href={`/blog/${blog['id']}`}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              {blog['title']}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              {blog['author']}<br/>
              <small>Created on {new Date(blog['created_at']).toLocaleDateString()}</small><br/>
              <small>{blog['view_count']} visited</small>
            </p>
          </a>
      ))}
      </div>

      {hasNextPage && !loading && (
        <button className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" onClick={loadMore}>Load More</button>
      )}

    </div>
  )
}

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="mb-3 text-2xl font-semibold">Blog Posts</h1>
      
      <Suspense>
        <RenderBlogsBody />
      </Suspense>
    </main>

    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">app/page.tsx</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold">
    //         Docs{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className="m-0 max-w-[30ch] text-sm opacity-50">
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold">
    //         Learn{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className="m-0 max-w-[30ch] text-sm opacity-50">
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold">
    //         Templates{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className="m-0 max-w-[30ch] text-sm opacity-50">
    //         Explore starter templates for Next.js.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold">
    //         Deploy{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  );
}
