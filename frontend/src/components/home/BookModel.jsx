import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModel = ({ book, onClose }) => {
  return (
    <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' onClick={onClose}>
      <div onClick={(event) => event.stopPropagation()} className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'>
        <AiOutlineClose className='absolute right-6 top-6 text-red-600 cursor-pointer' />
        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>{book.publishYear}</h2>
        <h4 className='my-2 text-gray-500'>{book.id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-read-3000 text-2xl' />
          <h2 className='my-1'>{book.title}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-read-3000 text-2xl' />
          <h2 className='my-1'>{book.author}</h2>
        </div>
        <p className='my-1'>This is a book about Elon Musk.</p>
        <p className='my-2'>
          Elon Musk is an entrepreneur who has achieved global fame as the chief executive officer (CEO) of electric automobile maker Tesla (TSLA) and the private space company SpaceX. Musk was an early investor in several tech companies, and in October 2022, he completed a deal to take X (formerly Twitter) private.
        </p>
      </div>
    </div>
  );
}

export default BookModel;
