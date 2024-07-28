"use client";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate,lenke,url } = blog;
  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link 
          href={lenke}
          className="relative block aspect-[37/22] w-full"
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Image 
            src={image} 
            alt="image" 
            width={800} 
            height={600} 
            style={{ objectFit: 'cover' }} 
          />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <p>
            <Link 
              href={lenke}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
            
          </p>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image 
                    src={author.image} 
                    alt="author" 
                    width={40} 
                    height={40} 
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }} 
                  />
                </div>
              </div>
              <div className="w-full">
                <p className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {author.name}
                </p>
                <p className="text-xs text-body-color">{author.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <p className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </p>
              <p className="text-xs text-body-color">{publishDate}</p>
            </div>
          </div>
        </div>
      </div>
    <div>
      <FacebookShareButton url={url} title={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
    </>
  );
};

export default SingleBlog;
