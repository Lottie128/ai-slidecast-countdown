import React, { useState, useEffect } from 'react';
import './CountdownPage.css';

const CountdownPage = () => {
  const COUNTDOWN_KEY = 'ai_slidecast_launch_time';
  const TOTAL_HOURS = 8;

  const getInitialTime = () => {
    const savedLaunchTime = localStorage.getItem(COUNTDOWN_KEY);
    
    if (savedLaunchTime) {
      const launchTime = parseInt(savedLaunchTime, 10);
      const now = Date.now();
      const elapsed = Math.floor((now - launchTime) / 1000);
      const totalSeconds = TOTAL_HOURS * 3600;
      const remaining = totalSeconds - elapsed;
      
      if (remaining > 0) {
        return {
          hours: Math.floor(remaining / 3600),
          minutes: Math.floor((remaining % 3600) / 60),
          seconds: remaining % 60
        };
      }
    }
    
    // First time visitor - set launch time
    localStorage.setItem(COUNTDOWN_KEY, Date.now().toString());
    return {
      hours: TOTAL_HOURS,
      minutes: 0,
      seconds: 0
    };
  };

  const [timeLeft, setTimeLeft] = useState(getInitialTime);

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
        } else {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
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
        <div className="logo-section fade-in">
          <div className="logo-icon">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="26" stroke="url(#gradient)" strokeWidth="3"/>
              <path d="M30 16V30L38 38" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h1 className="app-title">AI Slidecast</h1>
          <p className="app-subtitle">by IQ Didactic</p>
        </div>

        <div className="status-card glass-strong scale-in">
          <div className="status-icon">
            <div className="pulse-circle"></div>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 5L25 15L35 17.5L27.5 25L30 35L20 30L10 35L12.5 25L5 17.5L15 15L20 5Z" 
                    fill="currentColor" opacity="0.9"/>
            </svg>
          </div>
          <h2 className="status-title">AI Technology Propagation in Progress</h2>
          <p className="status-message">
            Our advanced AI models are currently being deployed and optimized across our 
            distributed infrastructure. This enhanced propagation process ensures maximum 
            safety, accuracy, and performance for your presentation experience.
          </p>
        </div>

        <div className="countdown-timer slide-in">
          <div className="timer-card glass">
            <div className="timer-value">{formatNumber(timeLeft.hours)}</div>
            <div className="timer-label">Hours</div>
          </div>
          <div className="timer-separator">:</div>
          <div className="timer-card glass">
            <div className="timer-value">{formatNumber(timeLeft.minutes)}</div>
            <div className="timer-label">Minutes</div>
          </div>
          <div className="timer-separator">:</div>
          <div className="timer-card glass">
            <div className="timer-value">{formatNumber(timeLeft.seconds)}</div>
            <div className="timer-label">Seconds</div>
          </div>
        </div>

        <div className="info-section">
          <div className="info-card glass fade-in" style={{animationDelay: '0.1s'}}>
            <div className="info-icon">🛡️</div>
            <h3>Safety First</h3>
            <p>Enhanced security protocols during AI model deployment</p>
          </div>
          <div className="info-card glass fade-in" style={{animationDelay: '0.2s'}}>
            <div className="info-icon">⚡</div>
            <h3>Optimizing Performance</h3>
            <p>Fine-tuning neural networks for lightning-fast responses</p>
          </div>
          <div className="info-card glass fade-in" style={{animationDelay: '0.3s'}}>
            <div className="info-icon">🎯</div>
            <h3>Quality Assurance</h3>
            <p>Validating AI accuracy across all presentation formats</p>
          </div>
        </div>

        <div className="footer-message glass fade-in" style={{animationDelay: '0.4s'}}>
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