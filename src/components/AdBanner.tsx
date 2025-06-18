'use client';

import { useEffect, useRef } from 'react';

interface AdBannerProps {
  slot: string;
  format?: string;
  responsive?: boolean;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdBanner({
  slot,
  format = 'auto',
  responsive = true,
  className = ''
}: AdBannerProps) {
  const adRef = useRef<HTMLModElement>(null);
  const isAdLoaded = useRef(false);

  useEffect(() => {
    if (isAdLoaded.current) return;

    try {
      if (typeof window !== 'undefined' && window.adsbygoogle && adRef.current) {
        // Check if this ad element already has an ad
        const hasAd = adRef.current.getAttribute('data-adsbygoogle-status');

        if (!hasAd) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          isAdLoaded.current = true;
        }
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className={className}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2591708616273466"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
}
