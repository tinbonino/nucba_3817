document.addEventListener("DOMContentLoaded",() => {

    //seleccionamos los elementos que necesitamos del DOM
  const postForm=document.querySelector("#postForm");
  const fetchPostsButton=document.querySelector("#fetchPosts");
  const postsContainer=document.querySelector("#posts");
  const createdPostContainer=document.querySelector("#createdPost");

    postForm.addEventListener("submit",(e) => {
      e.preventDefault();
      const title=document.getElementById("title").value; 
      const body=document.getElementById("body").value;
      
      fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({title,body,userId:999})
        }
      )
      .then(response=>response.json())
      .then(data=>{
        postForm.reset();
        displayCreatedPost(data);
      })
      .catch(error=>console.error("Error: ",error))
        

    });

    fetchPostsButton.addEventListener("click", () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response=>response.json())
      .then(data=>{
        // postsContainer.innerHTML="";
        data.forEach(post=>{
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerHTML =`
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            `;
            postsContainer.appendChild(postElement)
        });
      })
      .catch(error=>console.error("Error:",error))
    })


    function displayCreatedPost(post){
        createdPostContainer.innerHTML=`
        <h2> Post Creado Exitosamente</h2>
        <div class= "post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <h4><strong>${post.id}</strong></h4>
            <h4>${post.userId}</h4>
        </div>
        `
    }

})