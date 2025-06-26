import { BookOpen, Github, Image, Link, Twitter,  Youtube } from "lucide-react"

export const BACKEND_URL="http://localhost:3000"

export const ContentItems=[
    {  
        icon:Twitter,content:"Amazing insight about AI trends...",
        type:"Tweet",color:"bg-blue-500"
     }, 
     { 
        icon:Youtube,content:"How to build a LLM from scratch", 
        type:"Video",color:"bg-red-500"
     },
     { 
        icon:Github,content:"Vitess Source Code", 
        type:"Repository",color:"bg-gray-800"
     },{ 
        icon:Image,content:"Inspiring workspace setup", 
        type:"Photo",color:"bg-green-500"
     },{ 
        icon:Link,content:"The Ultimate Guide to AI", 
        type:"Article",color:"bg-purple-500"
     },{ 
        icon:BookOpen,content:"Digital OS notes", 
        tyep:"Note",color:"bg-indigo-500"
     }
]