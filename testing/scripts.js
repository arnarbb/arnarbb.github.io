document.addEventListener('DOMContentLoaded', () => {
    // Example: dynamically update winner's name
    const winnerElement = document.querySelector('.div6 .Sigurvegari');
    winnerElement.textContent = 'Winner: Arnar'; // Dynamically set based on logic or external data
  });
  const voteButtons = document.querySelectorAll('.voteWinner');

voteButtons.forEach(button => {
  button.addEventListener('click', function() {
    const winnerName = this.dataset.winner; // Set data-winner attribute on each button
    alert(`You voted for: ${winnerName}`);
    // Here you can add code to send this information to a server
  });
});
const gameDetails = document.querySelectorAll('.parent > div');

gameDetails.forEach(detail => {
  detail.addEventListener('click', function() {
    this.classList.toggle('active');
    // Toggle visibility of game details
    const content = this.querySelector('p:not(.date), a');
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});
