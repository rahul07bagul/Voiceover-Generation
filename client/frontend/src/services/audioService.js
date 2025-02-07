async function generateAudio(data) {
    const response = await fetch('http://127.0.0.1:5000/generate_audio', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.blob();
}

export default generateAudio;