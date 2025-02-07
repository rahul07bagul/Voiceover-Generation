from flask import Flask, request, send_file
from flask_cors import CORS
from kokoro import KPipeline
import soundfile as sf
import numpy as np
import io

app = Flask(__name__)
CORS(app)
pipeline = KPipeline(lang_code='a')

@app.route('/generate_audio', methods=['POST'])
def generate_audio():
    data = request.json
    text = data.get('text', '')
    voice = data.get('voice', 'af_bella')
    speed = data.get('speed', 1)
    
    combined_audio = []
    generator = pipeline(
        text, voice=voice, 
        speed=speed, split_pattern=r'\n+'
    )
    for i, (gs, ps, audio) in enumerate(generator):
        combined_audio.append(audio)
    
    combined_audio = np.concatenate(combined_audio)
    audio_buffer = io.BytesIO()
    sf.write(audio_buffer, combined_audio, 24000, format='WAV')
    audio_buffer.seek(0)
    
    return send_file(audio_buffer, mimetype='audio/wav', as_attachment=True, download_name='generated_audio.wav')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
