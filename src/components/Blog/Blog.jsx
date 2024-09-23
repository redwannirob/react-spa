import PropTypes from 'prop-types';
import { MdBookmarkAdd } from "react-icons/md"

const Blog = ({blog,handleAddToBookmarks,handleMarkAsRead}) => {
    
    const{author,cover,author_img,posted_date,hashtags,reading_time} = blog;
    return (
        <div >
            <img style={{width:'70%'}} className='mt-6' src={cover} alt={`Cover of the picture of the title ${cover}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14 mt-6' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                
                <div >
                    <span>{reading_time}</span>
                    <button onClick={()=>handleAddToBookmarks(blog)} className='ml-2 text-red-600 text-2xl'><MdBookmarkAdd /></button>
                </div>

                
                    
                
            </div>
            <p>
                        {
                            hashtags.map(hashtag => <span> <a href="">#{hashtag}</a> </span>)
                        }
                    </p>
                <button onClick={()=>handleMarkAsRead(reading_time)}  className='mt-2'>Mark As Read</button>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;