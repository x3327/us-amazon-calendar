import { useState, useEffect } from 'react';

const CATEGORIES = {
  all: 'All Events',
  federal: 'US Holidays',
  'amazon-sale': 'Amazon Sales',
  aws: 'AWS Events',
  amazon: 'Amazon Events'
};

const TIMEZONES = {
  US: { label: 'US Time (EST)', offset: -5 },
  IST: { label: 'India Time (IST)', offset: 5.5 }
};

function App() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timezone, setTimezone] = useState('US');
  const [filter, setFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events');
      if (!response.ok) throw new Error('Failed to fetch events');
      const data = await response.json();
      setEvents(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDateUS = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatDateIST = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getISTDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const filteredEvents = events.filter(event => 
    filter === 'all' || event.category === filter
  );

  const getICalUrl = () => {
    const baseUrl = window.location.origin;
    return `${baseUrl}/calendar.ics`;
  };

  const stats = {
    federal: events.filter(e => e.category === 'federal').length,
    'amazon-sale': events.filter(e => e.category === 'amazon-sale').length,
    aws: events.filter(e => e.category === 'aws').length,
    amazon: events.filter(e => e.category === 'amazon').length
  };

  if (loading) return <div className="loading">Loading events...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>🇺🇸 US Holidays & Amazon Events Calendar</h1>
          <div className="header-actions">
            <div className="timezone-toggle">
              <button 
                className={timezone === 'US' ? 'active' : ''}
                onClick={() => setTimezone('US')}
              >
                US Time
              </button>
              <button 
                className={timezone === 'IST' ? 'active' : ''}
                onClick={() => setTimezone('IST')}
              >
                IST Time
              </button>
            </div>
            <button className="subscribe-btn" onClick={() => setShowModal(true)}>
              📅 Add to Google Calendar
            </button>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="stats">
          <div className="stat">
            <span className="stat-value">{stats.federal}</span>
            <span className="stat-label">US Holidays</span>
          </div>
          <div className="stat">
            <span className="stat-value">{stats['amazon-sale']}</span>
            <span className="stat-label">Amazon Sales</span>
          </div>
          <div className="stat">
            <span className="stat-value">{stats.aws}</span>
            <span className="stat-label">AWS Events</span>
          </div>
          <div className="stat">
            <span className="stat-value">{stats.amazon}</span>
            <span className="stat-label">Amazon Events</span>
          </div>
        </div>

        <div className="filters">
          {Object.entries(CATEGORIES).map(([key, label]) => (
            <button
              key={key}
              className={`filter-btn ${filter === key ? 'active' : ''}`}
              onClick={() => setFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="calendar-grid">
          {filteredEvents.map(event => (
            <div key={event.id} className={`event-card ${event.category}`}>
              <div className="event-date">
                <span className="event-date-badge">
                  {timezone === 'US' ? formatDateUS(event.startDate) : formatDateIST(event.startDate)}
                </span>
                {event.startDate !== event.endDate && (
                  <span className="event-date-badge" style={{ background: '#666' }}>
                    to {timezone === 'US' ? formatDateUS(event.endDate) : formatDateIST(event.endDate)}
                  </span>
                )}
              </div>
              {timezone === 'IST' && (
                <div className="event-date-ist">
                  🇮🇳 {getISTDate(event.startDate)}
                </div>
              )}
              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">{event.description}</p>
              <div className="event-meta">
                <span className="event-location">📍 {event.location}</span>
                <span className={`event-category ${event.category}`}>
                  {CATEGORIES[event.category] || event.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>📅 Add to Google Calendar</h2>
            <p>Subscribe to this calendar in Google Calendar:</p>
            <div className="modal-code">{getICalUrl()}</div>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
              <strong>Steps:</strong><br/>
              1. Open Google Calendar<br/>
              2. Click "Add calendar" → "From URL"<br/>
              3. Paste the URL above<br/>
              4. Click "Add calendar"
            </p>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
