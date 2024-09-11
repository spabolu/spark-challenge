import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function SolutionModal({
  problemPreview = '',
  problem = '',
  solutionPreview = '',
  solution = '',
  upvote = 0,
  downvote = 0,
  closeModal, // Function to close the modal
}) {
  const dialogRef = useRef(null);

  // Close modal when clicking outside the modal box
  useEffect(() => {
    const dialog = dialogRef.current;

    const handleClose = (e) => {
      if (e.target === dialog) {
        closeModal();
      }
    };

    dialog?.addEventListener('click', handleClose);

    return () => {
      dialog?.removeEventListener('click', handleClose);
    };
  }, [closeModal]);

  return (
    <dialog ref={dialogRef} open className="modal max-w-6xl mx-auto p-0">
      <div className="modal-box max-w-5xl w-full border-4 border-blue-700 shadow-lg bg-gray-200">
        <h3 className="font-bold text-lg">{problemPreview}</h3>
        <p className="py-2">{problem}</p>
        <h4 className="font-semibold">Solution:</h4>
        <p className="py-4">{solutionPreview}</p>
        <p className="py-4">{solution}</p>
        <div className="flex justify-between mt-3">
          <button className="btn btn-primary">
            <ThumbsUpIcon /> {upvote}
          </button>
          <button className="btn btn-ghost">
            <ThumbsDownIcon /> {downvote}
          </button>
        </div>
        <div className="modal-action">
          <button className="btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}
