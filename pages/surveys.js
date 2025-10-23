import Head from "next/head";

export default function Surveys() {
  const surveys = [
    {
      name: "Triaba",
      description: "Nigeria-supported surveys with fair payouts.",
      link: "https://www.triaba.com",
    },
    {
      name: "OpinionWorld",
      description: "Get paid for sharing your opinions on trending topics.",
      link: "https://www.opinionworld.com",
    },
    {
      name: "YouGov",
      description: "Participate in surveys about brands, politics, and culture.",
      link: "https://ng.yougov.com/",
    },
    {
      name: "SurveyTime",
      description: "Instant $1 rewards for each completed survey — no waiting.",
      link: "https://surveytime.io/",
    },
  ];

  return (
    <>
      <Head>
        <title>CashPilot Surveys</title>
        <meta
          name="description"
          content="Discover legit survey platforms that pay daily."
        />
      </Head>

      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-blue-400">
          💸 Trusted Survey Platforms
        </h1>
        <p className="text-gray-300 text-center max-w-xl mb-6">
          Choose from verified, high-paying survey sites that work worldwide —
          start earning daily with honest platforms we’ve tested.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          {surveys.map((survey, index) => (
            <a
              key={index}
              href={survey.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-700 rounded-2xl p-6 hover:bg-blue-900 transition-all duration-300"
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-300">
                {survey.name}
              </h2>
              <p className="text-gray-400">{survey.description}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          CashPilot.link © {new Date().getFullYear()} | Built for honest earnings 💠
        </div>
      </div>
    </>
  );
            }    autoRefresh: false,
    link: "https://surveytime.io/alextrimnell",
  },
];

export default function Surveys() {
  return (
    <div
      style={{
        background: "#000",
        color: "#C0C0C0",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <h1 style={{ color: "#00BFFF" }}>🧩 CashPilot Survey Hub</h1>
      <p>Your curated list of trusted online earning platforms:</p>

      <div style={{ marginTop: "2rem" }}>
        {platforms.map((platform) => (
          <div
            key={platform.name}
            style={{
              border: "1px solid #333",
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "1.5rem",
              backgroundColor: "#111",
            }}
          >
            <h2 style={{ color: "#00BFFF" }}>{platform.name}</h2>
            <p>{platform.description}</p>
            <p>
              Referral Link:{" "}
              {platform.referral ? "✅ Active" : "❌ Not Supported"}
            </p>
            <p>
              Auto-Refresh:{" "}
              {platform.autoRefresh ? "🔄 Enabled" : "🚫 Manual"}
            </p>
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
                marginTop: "0.5rem",
              }}
            >
              Visit Platform
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}              border: "1px solid #333",
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "1.5rem",
              backgroundColor: "#111",
            }}
          >
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
                marginTop: "0.5rem",
              }}
            >
              Visit Platform
            </a>
          </div>
        ))}
      </div>
    </div>
  );
            }            padding: "1rem",
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
