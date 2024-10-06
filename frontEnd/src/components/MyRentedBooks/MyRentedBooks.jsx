import React from "react";
import ReturnBookModal from "./ReturnBookModal.jsx";

function MyRentedBooks({
  title,
  director,
  category,
  rentedUntil,
  rentedDate,
  owner,
  classes,
  id,
  isAvailableForRenting,
  triggerRefresh,
  setTriggerRefresh,
}) {
  const [returnModalOpen, setReturnModalOpen] = React.useState(false);
  const handleReturnOpen = () => setReturnModalOpen(true);
  const handleReturnClose = () => setReturnModalOpen(false);

  return (
    <tr key={title}>
      <td className={classes}>
        <div
          color="blue-gray"
          className="font-normal max-w-[100px] break-words"
        >
          {title}
        </div>
      </td>
      <td className={classes}>
        <div
          color="blue-gray"
          className="font-normal max-w-[100px] break-words"
        >
          {director}
        </div>
      </td>
      <td className={classes}>
        <div
          color="blue-gray"
          className="font-normal max-w-[100px] break-words"
        >
          {category}
        </div>
      </td>
      <td className={classes}>
        <div
          color="blue-gray"
          className="font-normal max-w-[100px] break-words"
        >
          {!rentedDate ? "N/A" : rentedDate}
        </div>
      </td>
      <td className={classes}>
        <div
          color="blue-gray"
          className="font-normal max-w-[100px] break-words"
        >
          {!rentedUntil ? "N/A" : rentedUntil}
        </div>
      </td>
      <td className={classes}>
        <div
          color="blue-gray"
          className="font-normal max-w-[200px] break-words"
        >
          {owner}
        </div>
      </td>
      <td className={classes}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            className="rent-button"
            disabled={isAvailableForRenting}
            onClick={handleReturnOpen}
          >
            Return book
          </button>
        </div>

        <ReturnBookModal
          isModalOpen={returnModalOpen}
          closeModal={handleReturnClose}
          title={title}
          triggerRefresh={triggerRefresh}
          setTriggerRefresh={setTriggerRefresh}
          id={id}
          owner={owner}
        />
      </td>
    </tr>
  );
}

export default MyRentedBooks;
