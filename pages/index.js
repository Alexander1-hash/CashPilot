// pages/index.js

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#000',
      color: '#C0C0C0',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1 style={{
        color: '#00BFFF',
        fontSize: '3rem',
        marginBottom: '0.5rem'
      }}>
        Host CashPilot 🚀
      </h1>

      <p style={{ fontSize: '1.2rem', maxWidth: '600px', textAlign: 'center' }}>
        Welcome to <strong>CashPilot</strong> — your trusted launchpad for smart, honest online earnings.
        We guide you through real platforms, surveys, and strategies that work.
      </p>

      <a
        href="https://chat.whatsapp.com/C0DnJ9yMRMoHHiWdRVhl8v?mode=ac_t"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: '2rem',
          backgroundColor: '#00BFFF',
          color: '#000',
          padding: '0.8rem 1.5rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1rem'
        }}
      >
        Join WhatsApp Group
      </a>

      <a
        href="/surveys"
        style={{
          marginTop: '1.5rem',
          backgroundColor: '#C0C0C0',
          color: '#000',
          padding: '0.6rem 1.2rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        Explore Survey Platforms
      </a>

      <p style={{ marginTop: '2rem', fontSize: '1rem', textAlign: 'center' }}>
        More trusted platforms and auto-survey alerts coming soon. Stay connected with CashPilot.
      </p>

      <footer style={{ marginTop: '4rem', fontSize: '0.9rem', color: '#777' }}>
        © {new Date().getFullYear()} CashPilot by Alex Trimnell. All rights reserved.
      </footer>
    </div>
  );
}
