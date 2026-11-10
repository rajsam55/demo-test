"use server"


import Image from "next/image";

import Header from "@/components/web/Header"

import {TextFeed} from "@/components/web/TextForm"

import {ImageFeed} from "@/components/web/imageCard"

import {getHomePosts} from "@/lib/docs"




export default async function Home() {

  const  {textDocs, imageDocs}     =  await getHomePosts()


  return (

    <div>

    <div>

    <Header/>

        
    </div>

    <div className="w-full max-w-7xl">



    <ImageFeed posts = {imageDocs} />


      </div>


      

      <div>

    <TextFeed posts = {textDocs} />


      </div>


      

      </div>
    
  );
}
