async function updateGADataLayer(
  eventName,
  eventCategory,
  eventAction,
  eventLabel,
  sectionName,
  link,
  additional,
) {
  if (window.dataLayer) {
    const dataLayer = window.dataLayer;
    dataLayer.push({
      event: eventName,
      eventCategory: eventCategory,
      eventAction: eventAction,
      eventLabel: eventLabel,
      sectionName: sectionName,
      link: link,
      ...additional,
    });
  }
}
