import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// function Greeting() {
//   return (
//     <div>
//       <Day />
//       <Person />
//       <h1>Hello you awesome being</h1>
//       <Person />
//       <p>Now you will start to get hooked and appreciate things</p>
//       <Person />
//       <Message />
//       <h2>Today is a great day </h2>
//       <Day />
//       <Person />
//     </div>
//   );
// }
const warband = "Claws of Khorne";
const description =
  "The Claws of Khorne are a warband of Blood Warriors and Flesh Hounds dedicated to Khorne, the Blood God. They are led by Karanak, the Hound of Vengeance, and are known for their ability to track down their prey.";
const image =
  "https://www.warhammer-community.com/wp-content/uploads/2023/02/Q49aNFtk8Dz2Lp5K.jpg";
const image2 = "https://m.media-amazon.com/images/I/71oG0OjIssL._SL1228_.jpg";
function BookList() {
  return (
    <div className="bookLists">
      <section>
        <Book />
        <br />
        <hr />
        <Book />
        <p>SLaves to Darkness</p>
        <Book />
        <p>Order:Kharadron Overlords</p>
        <Book />
        <p>Chaos:</p>
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </div>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>

      <h1>{warband}</h1>
      <Warbandimg />
      <h3 style={{ fontSize: "0.8rem" }}>{description}</h3>

      {/* <h4>{description}</h4> */}

      <br />
      <hr />
    </article>
  );
};
const Image = () => <img src={image} alt="warband" />;
const Warbandimg = () => {
  return <img src={image2} alt="warband" />;
};

const StrengthAndWeakness = () => {
  return <h4>Chaos</h4>;
};
// const Greeting = () => {
//   return React.createElement("h1", {}, "you are a winner,you are stronger than you think , braver than you fathom.");
// };

ReactDom.render(<BookList />, document.getElementById("root"));
