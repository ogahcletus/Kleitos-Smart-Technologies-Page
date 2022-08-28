import React from 'react';
import './post.css';

const Post = () => {
  return (
    <div className='post'>
    <img className='post-img' 
        src='https://scontent.fabv2-1.fna.fbcdn.net/v/t1.18169-9/1378206_10151988934852628_647107531_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeEsrhYpKiDyHV7_I6DfFOay-yIs5UuqsDL7IizlS6qwMn4k-4H_vfACt-zrBPgMWMMF-WRkBE3at3wqnZAz4QbH&_nc_ohc=BWPlT_5LX8gAX_iBFnI&_nc_ht=scontent.fabv2-1.fna&oh=00_AT_JuaVJdclhoc7yYIikB_nEzPj8ahig2ETRvObZDwF8aw&oe=633135B4'
        alt=''
    />
    <div className="postInfo">
        <div className="post-categories">
            <span className="post-categories">Software Developments</span>
            <span className="post-categories">Project Management</span>
        </div>
        <span className="post-title">Lorem ipsum dolor sit amet deleniti?</span>
        <hr />
        <span className='postDate'> 1hr ago</span>
    </div>
         <p className='post-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate accusamus consequuntur ipsam dicta sequi cupiditate delectus ea, facere quibusdam vitae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod dolorem eius quisquam. Nesciunt, ullam! Mollitia dolores velit unde nemo voluptatem necessitatibus sequi itaque deserunt? Nostrum quibusdam repudiandae debitis repellat libero quam, saepe cupiditate quaerat consequuntur veritatis voluptatem sed! Alias architecto, odio labore debitis illo pariatur voluptatem assumenda nisi explicabo cum, rerum quos sit et autem, obcaecati eligendi in natus! Dolore laborum nisi incidunt sunt ab possimus, tempore alias eligendi saepe!</p>
    
    </div>
  )
}

export default Post