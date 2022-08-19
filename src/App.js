import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// const dummyList = [
//   {
//     id: 1,
//     author: "박신비",
//     content: "냥냥 1",
//     emotion: 1,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "김민성",
//     content: "냥냥 2",
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "르블랑",
//     content: "냥냥 3",
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onDelete = (targetId) => {
    setData(data.filter((it) => it.id !== targetId));
  };
  // App컴포넌트에서 직접 onDelete를 호출하는 것이 아니기 때문에 매개변수 targetId를 전달받는다.

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onDelete={onDelete} />
    </div>
  );
}

export default App;
