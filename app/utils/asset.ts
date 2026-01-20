export const assetUrl = (path: string): string => {
  const base = useRuntimeConfig().public.assetBaseUrl || ''
  return `${base}${path.replace(/^\/+/, '')}`
}