'use client';

import { useEffect, useState } from 'react';
import Solutions from './Solutions';
import SolutionModal from './SolutionModal'; // Import your modal component

const SolutionPage = () => {
  const [solutions, setSolutions] = useState([]);
  const [error, setError] = useState('');
  const [selectedSolution, setSelectedSolution] = useState(null); // Track the selected solution
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal open/close state

  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        const res = await fetch('/api/postsSol'); // Adjust the URL if necessary
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setSolutions(data);
      } catch (error) {
        console.error('Error fetching solutions:', error);
        setError('Failed to load solutions.');
      }
    };
    fetchSolutions();
  }, []);

  // Function to open modal and set the selected solution data
  const handleCardClick = (solution) => {
    setSelectedSolution(solution);
    setIsModalOpen(true); // Open the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSolution(null); // Clear selected solution when modal is closed
  };

  return (
    <div>
      {error && <p>{error}</p>}
      {/* Pass the handleCardClick function to handle clicks on individual cards */}
      <Solutions solutionsVal={solutions} onCardClick={handleCardClick} />

      {/* Render the modal only when there's a selected solution */}
      {isModalOpen && selectedSolution && (
        <SolutionModal
          problemPreview={selectedSolution.problempreview}
          problem={selectedSolution.problem} // Assuming `problem` field exists
          solutionPreview={selectedSolution.solutionpreview}
          solution={selectedSolution.solution} // Assuming `solution` field exists
          upvote={selectedSolution.upvote}
          downvote={selectedSolution.downvote}
          closeModal={closeModal} // Pass the function to close the modal
        />
      )}
    </div>
  );
};

export default SolutionPage;
