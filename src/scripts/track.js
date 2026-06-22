export function trackClick(eventType, targetId) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventType,
    target_id: targetId
  });
}
