import React, { useState, useEffect } from "react";
import BookDataService from "../services/book.services.js";
import {Alert} from "react-bootstrap"
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../firebase.js";



const AddBook = ({ id, setBookId }) => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [file,setFile] =useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [comment, setComment] = useState("");
  const [hyper, setHyper] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const name = new Date().getTime()+file.name
    const imageRef = storage().ref(`folder/${file.url}`);
    uploadBytesResumable(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "") {
      setMessage({ error: true, msg: "Вы не всё заполнили" });
      return;
    }
    const newBook = {
      title,
      comment,
      date,
      hyper,  
      imageUrls
    };
    console.log(newBook);

    try {
      if (id !== undefined && id !== "") {
        await BookDataService.updateBook(id, newBook);
        setBookId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await BookDataService.addBooks(newBook);
        setMessage({ error: false, msg: "Блог добавлен" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await BookDataService.getBook(id);
      console.log("the record is :", docSnap.data());
      setTitle(docSnap.data().title);
      setHyper(docSnap.data().hyper);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);


  return (
    <div>
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
            <div><input className="border border-black rounded" type="text" placeholder="Загаловок (название мероприятия)" value={title} onChange={(e) => setTitle(e.target.value)} /></div>
            <div><input type="text" placeholder="Текст (опционально)" value={comment} onChange={(e) => setComment(e.target.value)} /></div>
            <div><input type="file" id="file" placeholder="Закиньте сюда фотку" onChange={(event) => {setImageUpload(event.target.files[0]);}}/></div>
            <div><input type="text" placeholder="URL ссылка" value={hyper} onChange={(e)=>{setHyper(e.target.value)}} /></div>
            <div><input type="date" placeholder="Дата проведения" value={date} onChange={(e) => setDate(e.target.value)}/></div>
            <div><button onClick={uploadFile} type="submit">Отправить мероприятие</button></div>
        </form>
    </div>
  );
};

export default AddBook;
