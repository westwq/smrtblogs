"use client";

import { Suspense, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

const BlogPostPage = ({ params }:{params:any}) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = params;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blog?id=${id}`);
        if (!res.ok) {
          throw new Error(`Error: ${res.statusText}`);
        }
        const data = await res.json();

        if(data.response)
          throw new Error(`Error: ${res.statusText}`);
        
        setBlog(data.blog_by_pk);
      } catch (error) {
        console.error('Failed to fetch blog:', error);
      }
      setLoading(false);
    };

    const logView = async () => {
      try {
        await fetch('/api/logView', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id }),
        });
      } catch (error) {
        console.error('Error logging view:', error);
      }
    };

    fetchBlog();
    logView();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>No blog found</p>;
  if (blog == null) return <p>No blog found</p>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1 className="mb-3 text-2xl font-bold">{blog['title']}</h1>
      <div>
      <p className="m-0 h-auto max-w-[30ch] text-sm opacity-50">
        {blog['author']}<br/>
        <small>Created on {new Date(blog['created_at']).toLocaleDateString()}</small><br/>
        <small>Updated on {new Date(blog['updated_at']).toLocaleDateString()}</small><br/>
        <small>{blog['view_count']} visited</small>
      </p></div>
      <div className='flex-grow'>
      <p className="m-10">{blog['content']}</p>
      </div>
    </main>
  );
};

export default BlogPostPage;
