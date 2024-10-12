import { Collapse, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { showError, showSuccess } from "../../../service/ToastService";
import Review from "./Review";
function ReviewList({ reviews, showReviews, owner_email, setTriggerRefresh }) {
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");

  const handleReplyClick = (review) => {
    setReplyingTo(replyingTo === review.id ? null : review.id);
  };

  const submitReply = (parentCommentId, reviewId) => {
    const commentAddDTO = {
      review_id: reviewId,
      owner_email: owner_email,
      comment: replyText,
      parent_comment_id: parentCommentId,
    };

    axios
      .post("/comments", commentAddDTO)
      .then((response) => {
        showSuccess("Successfully replied to comment");
        setTriggerRefresh((prev) => !prev);
      })
      .catch((err) => {
        showError(err.message);
      });

    clearForm();
  };

  const handleDeleteReview = (reviewId) => {
    axios
      .delete(`/reviews/${reviewId}`)
      .then(() => {
        showSuccess("Successfully deleted review");
        setTriggerRefresh((prev) => !prev);
      })
      .catch((err) => {
        showError(err.message);
      });
    clearForm();
  };

  const clearForm = () => {
    setReplyText("");
    setReplyingTo(null);
  };

  return (
    <Collapse in={showReviews}>
      <div style={{ width: "100%" }}>
        {reviews && reviews.length > 0 ? (
          reviews.map((review) => (
            <Review
              key={review.id}
              review={review}
              submitReply={submitReply}
              handleReplyClick={handleReplyClick}
              setReplyText={setReplyText}
              replyText={replyText}
              replyingTo={replyingTo}
              owner_email={owner_email}
              handleDeleteReview={handleDeleteReview}
              setTriggerRefresh={setTriggerRefresh}
            />
          ))
        ) : (
          <Typography
            variant="body2"
            style={{ color: "#ccc", padding: "1rem", textAlign: "center" }}
          >
            No reviews available.
          </Typography>
        )}
      </div>
    </Collapse>
  );
}

export default ReviewList;
