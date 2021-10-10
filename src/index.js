import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
      author="Sam"
      dateTime="Today 6:15pm"
      comment="Its a wonderfull pic!"/>
      <CommentDetail 
      author="Alex"
      dateTime="Today 7:05pm"
      comment="Keep Rocking"/>
      <CommentDetail 
      author="Jonas"
      dateTime="Today 10:15pm"
      comment="Kudosss"/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
