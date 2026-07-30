const W3CLAW_BASE = 'https://w3claw.xyz/e2pdao'

function withTracking(url: string, source: string, campaign: string) {
  const separator = url.includes('?') ? '&' : '?'
  return `${url}${separator}utm_source=e2pdao&utm_medium=website&utm_campaign=${campaign}&utm_content=${source}`
}

export const E2P_LINKS = {
  kol: (source = 'general') => withTracking(W3CLAW_BASE, source, 'kol_application'),
  ambassador: (source = 'general') => withTracking(`${W3CLAW_BASE}?type=ambassador`, source, 'ambassador_application'),
  project: (source = 'general') => withTracking(`${W3CLAW_BASE}?type=project`, source, 'project_application'),
  partner: (source = 'general') => withTracking(`${W3CLAW_BASE}?type=partner`, source, 'partner_application'),
  telegram: 'https://t.me/+RcB2FVha7bo4N2Nk',
  businessTelegram: 'https://t.me/BitEsq',
  tradingAgent: 'https://yegidawir.xyz/',
}
