'use client';

import { useReportWebVitals } from 'next/web-vitals';

export default function WebVitals() {
  useReportWebVitals((metric) => {
    // Send to Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', metric.name, {
        custom_map: { metric_id: 'custom_metric' },
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vital:', metric);
    }
  });

  return null;
}
