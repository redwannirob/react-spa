import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({handleAddToBookmarks,handleMarkAsRead}) => {
    const[blogs,setBlogs] = useState([])
    useEffect(()=>{
        fetch('../../../public/blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h3>Blogs : {blogs.length}</h3>
            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                    blog={blog}
                handleMarkAsRead={handleMarkAsRead}
                    handleAddToBookmarks={handleAddToBookmarks}
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;