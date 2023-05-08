interface InterfaceNewBlog {
    title: string;
    text: string;
    image: string;
    likes: number;
    createdAt?: Date
  }

  let blog : InterfaceNewBlog ={
    title:"",
    text:"",
    image:"",
    likes:4,
    createdAt:new Date(1683540000000) 

  }
  
  //nulish operator
  console.log(0??true)
  console.log(false??true)
  console.log(""??true)
  console.log(null??true)
  console.log(undefined??true)
  
  function createNewBlog(blog: InterfaceNewBlog):InterfaceNewBlog{
    blog.createdAt = blog.createdAt ?? new Date()
    return blog
  }

  console.log(createNewBlog(blog))