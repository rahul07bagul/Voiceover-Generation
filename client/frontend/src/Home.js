import React from 'react';
import SoundWave from './SoundWave';
import './Home.css';
import { Select, MenuItem, Button, TextField, CircularProgress } from '@mui/material';
import generateAudio from './services/audioService';

const Home = () => {
  const [voice, setVoice] = React.useState('af_bella');
  const [text, setText] = React.useState('Hello, how are you?');
  const [audioUrl, setAudioUrl] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleVoiceChange = (event) => {
    setVoice(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleGenerateAudio = () => {
    setIsLoading(true);
    console.log('Generating audio with voice:', voice, 'and text:', text);
    generateAudio({ voice, text })
      .then((response) => {
        console.log('Audio generated:', response);
        const url = URL.createObjectURL(new Blob([response], { type: 'audio/wav' }));
        setAudioUrl(url);
      })
      .catch((error) => {
        console.error('Error generating audio:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const voiceColors = {
    af_bella: '#FF6B6B',
    af_nicole: '#4ECDC4',
    af_sarah: '#45B7D1',
    af_sky: '#96CEB4',
    am_adam: '#FFEEAD',
    am_michael: '#D4A5A5'
  };

  return (
    <div>
      <h2 className="header">Instant Voiceover Creation</h2>
      <h4 className='sub-header'>Generate Voiceovers Effortlessly with Text-to-Speech AI Tool</h4>
      <SoundWave />
      <div className="content">
        <div className="section-wrapper">
            <div className="input-box">
                <TextField
                    multiline
                    rows={8}
                    value={text}
                    onChange={handleTextChange}
                    className="text-input"
                    variant="outlined"
                    fullWidth
                />
                <div className="controls">
                    <Select
                        value={voice}
                        onChange={handleVoiceChange}
                        className="select-voice"
                        displayEmpty
                    >
                        {Object.entries(voiceColors).map(([voiceId, color]) => (
                          <MenuItem key={voiceId} value={voiceId}>
                            <span style={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '8px' 
                            }}>
                              <span style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                backgroundColor: color,
                                display: 'inline-block'
                              }}/>
                              {voiceId.split('_')[1].toUpperCase()}
                            </span>
                          </MenuItem>
                        ))}
                    </Select>
                    {audioUrl && (
                      <div className="audio-player">
                        <audio controls src={audioUrl}></audio>
                      </div>
                    )}
                    <Button 
                        variant="contained" 
                        className="generate-button"
                        onClick={handleGenerateAudio}
                        disabled={isLoading}
                        startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : null}
                    >
                        {isLoading ? 'Generating...' : 'Generate'}
                    </Button>
                </div>
            </div>
        </div>  
      </div>
    </div>
  );
};

export default Home;