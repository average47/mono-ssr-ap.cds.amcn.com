import { promises as fs } from 'fs';

export async function getOfflineData(filename: string): Promise<any> {
  const file = await fs.readFile(process.cwd() + `/public/data/${filename}.json`, 'utf8');
  return JSON.parse(file);
}
