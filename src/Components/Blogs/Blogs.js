import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-2 mb-4' title='This is false.'>Our Blogs</h2>
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col">
                    <h4>1. What is Context api ?</h4>
                    <p>Context api is a  react structure. Using Context api we can effectively produce global veriables in react app that can be apssed around. Context api is the altermative to  prop drilling from grandarent to child to parent. we can pass data child of child without prop drilling .Context api very easy way to shear data. we can pass unlimited data using contaxt api. if want to pass object or array and others it's posible. </p>
                </div>
                <div className="col">
                    <h4>2. What is semantic tag?</h4>
                    <p>Semantic tags clearly define the purpose of the HTML element. if we write our all text in p tag browser won"t be able to Understand whats we are writen . if we write Header in header tag .browser will be understand that this is header. And if we write the main part of our website in main tag browser will understnd that it is main contain of web site.Html describes the type of content that the element should contain.
                    <span>
                    Some Example of semantic tags: <br /> 
                        &lt;nav&gt;  &lt;/nav&gt; ,
                        &lt;header&gt;  &lt;/header&gt; ,
                        &lt;Section&gt;  &lt;/Section&gt; ,
                        &lt;article&gt;  &lt;/article&gt;
                    </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;