// Vercel Speed Insights initialization
// This script loads and initializes Vercel Speed Insights for performance monitoring
import { injectSpeedInsights } from 'https://cdn.jsdelivr.net/npm/@vercel/speed-insights@2/+esm';

// Initialize Speed Insights
injectSpeedInsights({
  debug: false, // Set to true for development debugging
  // sampleRate: 1, // 100% of events sent (default)
  // beforeSend: (event) => event, // Optional: modify events before sending
});
