CREATE TABLE blog (
  id SERIAL PRIMARY KEY,
  title TEXT,
  content TEXT,
  author TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  view_count INTEGER DEFAULT 0
);

CREATE TABLE blog_views (
  id SERIAL PRIMARY KEY,
  blog_id INTEGER REFERENCES blog(id),
  ip_address TEXT,
  location TEXT,
);

CREATE OR REPLACE FUNCTION update_blog_view_count() RETURNS TRIGGER AS $$
BEGIN
  UPDATE blog
  SET view_count = view_count + 1
  WHERE id = NEW.blog_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_view_count
AFTER INSERT ON blog_views
FOR EACH ROW
EXECUTE FUNCTION update_blog_view_count();


-- fuzzy search
CREATE INDEX blog_fulltext_idx ON blog USING gin(to_tsvector('english', title || ' ' || content));

CREATE OR REPLACE FUNCTION search_blogs(search_term text)
RETURNS SETOF blog AS $$
    SELECT *
    FROM blog
    WHERE
      search_term <% (title || ' ' || content)
    ORDER BY
      similarity(search_term, (title || ' ' || content)) DESC;
$$ LANGUAGE sql STABLE;