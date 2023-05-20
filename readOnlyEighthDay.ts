// readonly

let Name: string = "Ali";
interface IBlog {
  title: string;
  text: string;
}

interface IBlogReadOnly {
  readonly title: string;
  readonly text: string;
}

function newBlog(blog: IBlog): IBlog {
  return blog;
}
function newBlogReadOnly(blog: IBlogReadOnly): IBlogReadOnly {
    return blog;
  }
const blog = newBlog({ title: "blog title", text: "blog text" });
blog.title = "changed blog title";
console.log(blog);


const blogReadOnly = newBlogReadOnly({ title: "blog title", text: "blog text" });
// blogReadOnly.title = "changed blog title"; => error 
console.log(blogReadOnly);
