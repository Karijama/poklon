import React, { useEffect, useState } from "react";
import BookDataService from "../services/book.services";
import friends from "../static/friends.svg"

const BooksList = ({ getBookId }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const data = await BookDataService.getAllBooks();
    console.log(data.docs);
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

    
  return (
    <div className="container bg-white py-3 px-3 border rounded border-black">
      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
        {books.map((doc) => {
          return (
            <div>
              <div className="flex bg-white container">
                <img src={friends}/>
                <div className="pl-10 py-10">
                    <div><p>{doc.title}</p></div>
                    <div><p>{doc.comment}</p></div>
                </div>
                <div className="flex justify-between ml-96">
                  <div className="pl-10 py-10">
                    <p>3.6 тыс.</p>
                    <p>Обсуждений</p>
                  </div>
                  <div className="pl-10 py-10">
                    <p>11.4 тыс.</p>
                    <p>Комментариев</p>
                  </div>
                  <div className="pl-10 py-10">
                    <p>g/frorr</p>
                    <p>Сегодня был в <br/> 5:43</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default BooksList;