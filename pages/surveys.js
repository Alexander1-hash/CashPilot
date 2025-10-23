// pages/surveys.js

const platforms = [
  {
    name: "DigiOpinion",
    description: "Quick paid surveys; global reach",
    referral: false,
    autoRefresh: true,
    link: "https://www.digiopinion.com",
  },
  {
    name: "ySense",
    description: "Surveys, tasks, and offers",
    referral: true,
    autoRefresh: true,
    link: "https://www.ysense.com/?ref=alextrimnell",
  },
  {
    name: "Swagbucks",
    description: "Surveys + cashback + gift cards",
    referral: true,
    autoRefresh: false,
    link: "https://www.swagbucks.com/p/register?rb=alextrimnell",
  },
  {
    name: "Toluna Influencers",
    description: "Survey community with product testing",
    referral: true,
    autoRefresh: false,
    link: "https://www.toluna.com/ref/alextrimnell",
  },
  {
    name: "TimeBucks",
    description: "Tasks, TikTok follows, microjobs",
    referral: true,
    autoRefresh: true,
    link: "https://timebucks.com/?referral=alextrimnell",
  },
  {
    name: "Triaba",
    description: "Nigeria-supported surveys",
    referral: true,
    autoRefresh: false,
    link: "https://www.triaba.com/?ref=alextrimnell",
  },
  {
    name: "Surveytime",
    description: "$1 instantly per survey",
    referral: true,
    autoRefresh: false,
    link: "https://surveytime.io/alextrimnell",
  },
];

export default function Surveys() {
  return (
    <div style={{ background: "#000", color: "#C0C0C0", minHeight: "100vh", padding: "2rem" }}>
      <h1 style={{ color: "#00BFFF" }}>🧩 CashPilot Survey Hub</h1>
      <p>Your curated list of trusted online earning platforms:</p>

      <div style={{ marginTop: "2rem" }}>
        {platforms.map((platform) => (
          <div key={platform.name} style={{
            border: "1px solid #333",
            borderRadius: "10px",
            padding: "1rem",
            marginBottom: "1.5rem",
            backgroundColor: "#111"
          }}>
            <h2 style={{ color: "#00BFFF" }}>{platform.name}</h2>
            <p>{platform.description}</p>
            <p>Referral Link: {platform.referral ? "✅ Active" : "❌ Not Supported"}</p>
            <p>Auto-Refresh: {platform.autoRefresh ? "🔄 Enabled" : "🚫 Manual"}</p>
            <a
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#00BFFF",
                color: "#000",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "bold",
                marginTop: "0.5rem"
              }}
            >
              Visit Platform
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}    link: "https://timebucks.com/?referral=alextrimnell",
  },
  
export default function Surveys() {
  return (
    <div style={{ background: "#000", color: "#C0C0C0", minHeight: "100vh", padding: "2rem" }}>
      <h1 style={{ color: "#00BFFF" }}>🧩 CashPilot Survey Hub</h1>
      <p>Your curated list of trusted online earning platforms:</p>

      <div style={{ marginTop: "2rem" }}>
        {platforms.map((platform) => (
          <div key={platform.name} style={{
            border: "1px solid #333",
            borderRadius: "10px",
            padding: "1rem",
            marginBottom: "1.5rem",
            backgroundColor: "#111"
          }}>
            <h2 style={{ color: "#00BFFF" }}>{platform.name}</h2>
            <p>{platform.description}</p>
            <p>Referral Link: {platform.referral ? "✅ Active" : "❌ Not Supported"}</p>
            <p>Auto-Refresh: {platform.autoRefresh ? "🔄 Enabled" : "🚫 Manual"}</p>
            <a
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#00BFFF",
                color: "#000",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "bold",
                marginTop: "0.5rem"
              }}
            >
              Visit Platform
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
