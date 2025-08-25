document.getElementById('loveForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from submitting normally

    const replyMessage = document.getElementById('replyMessage').value;

    if (replyMessage) {
        document.getElementById('loveForm').style.display = 'none';
        document.getElementById('thankYouMessage').style.display = 'block';
        
        // Optional: you can add a little animation or special effect here
        // for a more romantic feel.
    }
});