const SingleComment = ({ comment, rate }) => {
  return (
    <div className="bg-dark p-1 mb-1">
      <p className="m-1">Comment: {comment}</p>
      <p className="m-1">Rate: {rate}</p>
    </div>
  );
};

export default SingleComment;
