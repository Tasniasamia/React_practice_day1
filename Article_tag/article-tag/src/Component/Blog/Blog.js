import React from 'react';
import './Blog.css'
const Blog = (props) => {
    return (
        <div className='contaner'>
            <h3>Heading:{props.head}</h3>
            <h4>Author:{props.author}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero reprehenderit itaque magni porro, tempora laboriosam molestiae quam quo non neque perspiciatis impedit incidunt enim, dolorum minima ut recusandae modi? Accusantium, sit! Recusandae dolor minima nam tenetur corporis eius molestiae eveniet asperiores, nesciunt placeat inventore accusamus explicabo natus atque voluptatem aliquam culpa expedita doloremque iusto. Eaque illo sequi aliquid obcaecati minus recusandae excepturi incidunt magni, ipsa in, facilis ad eveniet tempora consequatur tenetur fugit numquam vitae beatae eius. Consectetur iure sapiente nemo inventore, officia possimus magni harum illum corporis voluptas, quam accusantium esse ipsam delectus autem magnam error nulla. Nam!</p>
        </div>
    );
};

export default Blog;