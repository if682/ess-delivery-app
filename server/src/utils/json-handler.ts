import * as fs from 'fs';
import * as path from 'path';
import Identifiable from './identifiable';
import { v4 as uuidv4 } from 'uuid';

export default class JsonHandler<T extends Identifiable> {
  private filePath: string;

  constructor(fileName: string) {
    this.filePath = path.join(__dirname, '..', 'data', `${fileName}`);
  }

  async writeJsonFile(newObject: T): Promise<T | undefined> {
    try {
      const jsonData: T[] | void = await this.readJsonFile();

      if (jsonData) {
        let updatedObject = {
          ...newObject,
          id: uuidv4(),
        };

        jsonData.push(updatedObject);

        const updatedData = JSON.stringify(jsonData);

        await fs.promises.writeFile(this.filePath, updatedData, 'utf-8');

        return newObject;
      }
    } catch (e) {
      throw e;
    }
  }

  async readJsonFile(): Promise<T[] | undefined> {
    try {
      if (fs.existsSync(this.filePath)) {
        const rawData = await fs.promises.readFile(this.filePath, 'utf-8');
        const jsonData: T[] = JSON.parse(rawData);

        return jsonData;
      } else {
        console.error(`[readJsonFile]: File not found: ${this.filePath}`);
      }
    } catch (e) {
      throw e;
    }
  }
}
