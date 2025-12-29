// src/pages/CountdownPage.js
import React, { useState, useEffect } from 'react';
import './CountdownPage.css';

const CountdownPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <div className="countdown-container">
      <div className="countdown-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="countdown-content">
        <div className="logo-section">
          <div className="logo-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="20" stroke="url(#gradient)" strokeWidth="3"/>
              <path d="M24 14V24L30 30" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#667eea" />
                  <stop offset="100%" stopColor="#764ba2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h1 className="app-title">AI Slidecast</h1>
          <p className="app-subtitle">by IQ Didactic</p>
        </div>

        <div className="status-card">
          <div className="status-icon">
            <div className="pulse-circle"></div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 4L20 12L28 14L22 20L24 28L16 24L8 28L10 20L4 14L12 12L16 4Z" 
                    fill="currentColor" opacity="0.8"/>
            </svg>
          </div>
          <h2 className="status-title">AI Technology Propagation in Progress</h2>
          <p className="status-message">
            Our advanced AI models are currently being deployed and optimized across our 
            distributed infrastructure. This enhanced propagation process ensures maximum 
            safety, accuracy, and performance for your presentation experience.
          </p>
        </div>

        <div className="countdown-timer">
          <div className="timer-card">
            <div className="timer-value">{formatNumber(timeLeft.hours)}</div>
            <div className="timer-label">Hours</div>
          </div>
          <div className="timer-separator">:</div>
          <div className="timer-card">
            <div className="timer-value">{formatNumber(timeLeft.minutes)}</div>
            <div className="timer-label">Minutes</div>
          </div>
          <div className="timer-separator">:</div>
          <div className="timer-card">
            <div className="timer-value">{formatNumber(timeLeft.seconds)}</div>
            <div className="timer-label">Seconds</div>
          </div>
        </div>

        <div className="info-section">
          <div className="info-card">
            <div className="info-icon">🛡️</div>
            <h3>Safety First</h3>
            <p>Enhanced security protocols during AI model deployment</p>
          </div>
          <div className="info-card">
            <div className="info-icon">⚡</div>
            <h3>Optimizing Performance</h3>
            <p>Fine-tuning neural networks for lightning-fast responses</p>
          </div>
          <div className="info-card">
            <div className="info-icon">🎯</div>
            <h3>Quality Assurance</h3>
            <p>Validating AI accuracy across all presentation formats</p>
          </div>
        </div>

        <div className="footer-message">
          <p>We appreciate your patience as we ensure the highest quality AI experience.</p>
          <p className="footer-note">
            Please check back shortly. The application will be available once propagation is complete.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownPage;