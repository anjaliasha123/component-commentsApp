import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          dateTime="Today 6:15pm"
          comment="Its a wonderfull pic!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          dateTime="Today 7:05pm"
          comment="Keep Rocking"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jonas"
          dateTime="Today 10:15pm"
          comment="Kudosss"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
