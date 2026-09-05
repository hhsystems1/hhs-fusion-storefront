import { v4 as uuidv4 } from 'uuid';

export interface TrackingContext {
  visitorId: string;
  sessionId: string;
  landingPage: string;
  referrer: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  gclid?: string;
  fbclid?: string;
}

export const getVisitorId = (): string => {
  if (typeof window === 'undefined') return '';
  
  let visitorId = localStorage.getItem('hhs_visitor_id') || '';
  if (!visitorId) {
    visitorId = uuidv4();
    localStorage.setItem('hhs_visitor_id', visitorId);
  }
  return visitorId;
};

export const getSessionId = (): string => {
  if (typeof window === 'undefined') return '';
  
  let sessionId = sessionStorage.getItem('hhs_session_id') || '';
  if (!sessionId) {
    sessionId = uuidv4();
    sessionStorage.setItem('hhs_session_id', sessionId);
  }
  return sessionId;
};

export const captureTrackingContext = (): TrackingContext => {
  if (typeof window === 'undefined') {
    return { visitorId: '', sessionId: '', landingPage: '', referrer: '' };
  }

  const urlParams = new URLSearchParams(window.location.search);

  return {
    visitorId: getVisitorId(),
    sessionId: getSessionId(),
    landingPage: window.location.pathname,
    referrer: document.referrer,
    utmSource: urlParams.get('utm_source') || undefined,
    utmMedium: urlParams.get('utm_medium') || undefined,
    utmCampaign: urlParams.get('utm_campaign') || undefined,
    utmContent: urlParams.get('utm_content') || undefined,
    utmTerm: urlParams.get('utm_term') || undefined,
    gclid: urlParams.get('gclid') || undefined,
    fbclid: urlParams.get('fbclid') || undefined,
  };
};
