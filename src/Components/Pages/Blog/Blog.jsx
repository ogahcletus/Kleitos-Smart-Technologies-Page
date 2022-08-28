import React from 'react';
import './blog.css';

const Blog = () => {
  return (
    <div className='blog'>
      <img src="https://scontent.fabv2-2.fna.fbcdn.net/v/t1.18169-9/1374938_10151988936207628_1895386230_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeExJDnkX7VezHTmKomedouiEjFFKXxlRtUSMUUpfGVG1V6a0_FCtXhN015cdZq_Jce8ZokdcyWfYX2mvHC_xTwo&_nc_ohc=Pea5xfaOjAwAX9n6N-y&tn=gMsKuWrS5zW6CLhJ&_nc_ht=scontent.fabv2-2.fna&oh=00_AT-22GUKvDHeeBXx6ATiteWmPn3O6I5DdneykbJJeW3ztQ&oe=63323A8B" alt="" className="blog-img" />
       <form className="blog-form">
          <div className="blogForm-group">
            <label htmlFor='File-input'>
            <i className="blogForm-icons fa-solid fa-plus"></i>
            </label>
            <input type="file" id="File-input" style={{display:'none'}}/>
            <input 
            type="text" 
            className="blog-input" 
            placeholder='Title'  
            autoFocus={true} />

          </div>
           <div className="blogForm-group">
               <textarea 
                className='blog-input blogInput-text' 
                type='text' 
                 placeholder='Write your story....'>

               </textarea>
           </div>
           <button className="submitBlog"><h3>Publish</h3></button>

       </form>
    
    </div>
  )
}

export default Blog