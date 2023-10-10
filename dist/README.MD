WELCOME

1. For Installation npm i image-previewer

2. Import it on your module
   ex. import {imagePreviewer} from './imagePreviewer'

3. For Using this you must have container for you image/img tag and also id in that container that you are going to pass in the function parameter
   ex.
   <div id="image-1">
    <img src="./abc.jpg">
   </div>

4. now when you want to show a previewer of your image is up to you

5. Syntax to Write/Pass parameter
   ex.
   function onImageClick(elemId){
   imagePreviewer(elemId,{
   elements:[
   label:{
   labelName:'',
   background:'',
   textColor:''
   },
   position:{
   top:''
   left:''
   right:''
   bottom:''
   },
   arrow:{
   direction:''
   length:''
   }
   ]
   })
   }
