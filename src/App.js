import { useState } from "react";

// const gifts = ["con mèo", "con chó", "con vẹt"];

function App() {
  // const [gift, setGift] = useState();

  // const randomGift = () => {
  //   const index = Math.floor(Math.random() * gifts.length);
  //   setGift(gifts[index]);
  // };

  //two-way binding

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  // const handleSubmit = () => {
  //   console.log({
  //     name,
  //     email,
  //   });
  // };

  //radio
  const courses = [
    {
      id: 1,
      name: "HTML, CSS",
    },
    {
      id: 2,
      name: "Javascript",
    },
    {
      id: 3,
      name: "ReactJS",
    },
  ];

  //const [checked, setChecked] = useState(2);

  const [checked, setChecked] = useState([]);

  console.log(checked);

  const handleSubmit = () => {
    //call API
    console.log({ id: checked });
  };

  const handleCheck = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        //uncheck
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div className="App" style={{ padding: 32 }}>
      {/* <h1>{gift || "Chưa có phần thưởng"}</h1>
      <button onClick={randomGift}>Lấy thưởng</button> */}

      {/* <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} /> */}

      {/*      
      // radio
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            onChange={() => setChecked(course.id)}
            checked={checked === course.id}
          />
          {course.name}
        </div>
      ))} */}

      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
