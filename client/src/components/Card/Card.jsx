import React from 'react';
import { Link } from 'react-router-dom';
// class Node{
//     constructor(data, next = null){
//         this.data = data;
//         this.next = next;
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }
//     insertFirst(data){
//         this.head = new Node(data, this.head);
//     }
//     insertLast(){ 

//     }
// }
export default function Card(){
        
        return(
            <>
            <div className="w-80 mb-4">
                <img className="rounded-lg w-80" src="https://site.nyit.edu/files/box/article_images/Box_20210426_SOURCE_Hero.jpg" loading='lazy'/>
                <div className="flex flex-row justify-between items-start mt-4 mb-4 pl-2 pr-2">
                    <div>
                        <Link 
                            className="text-sm text-red-600 font-bold block text-left"
                            to={`room/${room_id}`}
                            >{room_name}
                        </Link>
                        <p className="text-sm text-gray-800 text-left">Location: {location}</p>
                        <p className="text-sm text-gray-800 mt-2 text-left"> <strong></strong></p>
                        <p><span className='underline font-bold'>đ</span><span className='font-bold'>{cost}</span> night</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <p className="text-sm font-bold">4,92</p>
                        
                    </div>
                </div>
            </div>
            </>
        );

}