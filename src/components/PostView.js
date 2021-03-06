import React, {useState, useRef, useEffect} from 'react';
import {getPost} from '../utils/apiCalls';
import {connect} from 'react-redux';


function PostView(props) {
    const [userPost, setUserPost] = useState([]);
    const token = props.user.user.token
    useEffect(async() => {
       
        let post = await getPost(token);
       
        if (post){
            setUserPost(post);
        }
        
        return () => {
            
        }
    }, [])
    return (
        <div>
                 <div class="">

<div class="middle-sidebar-bottom" style={{paddingLeft: "20px"}}>
    <div class="middle-sidebar-left">
        
        <div class="row">
            <div class="col-12">
                <div class="card dash-card dash-card__records dash-card__posts">
                    <h3 class="card-title mb-3">POSTS</h3>

                {
                    userPost.map((item) => {
                        return (
                            <div class="single-record-row d-flex">
                            <a href="post_add.html" class="link-cover"></a>
                            <h4 class="post-single_title">{item.title} <span class="post-single_date">
                                Jun 10, 2021 at 02:12 PM</span></h4>
                            <a href="#" class="dropdown-menu-link ms-auto" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"><i class="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i></a>
                            <div class="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-md" aria-labelledby="dropdownMenu2">
                                <div class="card-body p-0">
                                    <a href="#" class="d-block font-xsss text-grey-600 mt-0">View Post</a>
                                </div>
                                <div class="card-body p-0 mt-2">
                                    <a href="#" class="d-block font-xsss text-grey-600 mt-0">Edit</a>
                                </div>
                                <div class="card-body p-0 mt-2">
                                    <a href="#" class="deleteBtn d-block font-xsss text-danger mt-0">Delete</a>
                                </div>
                            </div>
                    </div>
                    
                        )
                    })
                }
                    
                    
               
            
                </div>
            </div>
        </div>

        
    </div>

</div>
</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.auth,
        data: state.user
    }
  }
  
  export default connect(mapStateToProps)(PostView);