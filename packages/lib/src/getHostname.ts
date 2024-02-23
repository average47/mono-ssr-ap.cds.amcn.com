const hostnames = [
  {
    domain: 'acorn.tv',
    networkPath: 'acorntv',
    location: 'us',
  },
  {
    domain: 'allblk.tv',
    networkPath: 'allblk',
    location: 'us',
  },
  {
    domain: 'amc.com',
    networkPath: 'amc',
    location: 'us',
  },
  {
    domain: 'amcplus.com',
    networkPath: 'amcplus',
    defaultForPreview: true,
    location: 'us',
  },
  {
    domain: 'bbcamerica.com',
    networkPath: 'bbca',
    location: 'us',
  },
  {
    domain: 'hidive.com',
    networkPath: 'hidive',
    location: 'us',
  },
  {
    domain: 'ifc.com',
    networkPath: 'ifc',
    location: 'us',
  },
  {
    domain: 'shudder.com',
    networkPath: 'shudder',
    location: 'us',
  },
  {
    domain: 'sundancenow.com',
    networkPath: 'sundancenow',
    location: 'us',
  },
  {
    domain: 'sundancetv.com',
    networkPath: 'sundancetv',
    location: 'us',
  },
  {
    domain: 'wetv.com',
    networkPath: 'wetv',
    location: 'us',
  },
];
const DEFAULT_HOST = hostnames.find((h) => h.defaultForPreview);

export async function getHostname(host?: string) {
  if (!host) return DEFAULT_HOST;
  return (
    hostnames.find((item) => {
      return item.domain === host;
    }) ?? DEFAULT_HOST
  );
}
