export function trackClick(eventType, targetId) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventType, { target_id: targetId });
  }
}

