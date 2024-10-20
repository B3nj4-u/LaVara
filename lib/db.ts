import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let db: any = null;

async function openDb() {
  if (!db) {
    db = await open({
      filename: './mydb.sqlite',
      driver: sqlite3.Database
    });
    await db.exec(`
      CREATE TABLE IF NOT EXISTS news (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        content TEXT,
        date TEXT
      );
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
      );
    `);
  }
  return db;
}

export async function getNews() {
  const db = await openDb();
  return db.all('SELECT * FROM news ORDER BY date DESC');
}

export async function addNews(title: string, content: string) {
  const db = await openDb();
  const date = new Date().toISOString().split('T')[0];
  return db.run('INSERT INTO news (title, content, date) VALUES (?, ?, ?)', [title, content, date]);
}

export async function updateNews(id: number, title: string, content: string) {
  const db = await openDb();
  return db.run('UPDATE news SET title = ?, content = ? WHERE id = ?', [title, content, id]);
}

export async function deleteNews(id: number) {
  const db = await openDb();
  return db.run('DELETE FROM news WHERE id = ?', [id]);
}

export async function getUser(username: string) {
  const db = await openDb();
  return db.get('SELECT * FROM users WHERE username = ?', [username]);
}

export async function createUser(username: string, password: string) {
  const db = await openDb();
  return db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
}