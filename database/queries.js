const categories = `categories_table`;

const wallapaper = "wallpaper_table";
const CREATE_CATEGORY_TABLE = `CREATE TABLE IF NOT EXISTS ${categories} (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    thumbnail VARCHAR(200),
    uuid VARCHAR(255),
    image VARCHAR(200)
)`;
const INSERT_INTO_CATEGORY = `INSERT INTO ${categories} (name, thumbnail, image  , uuid) VALUES (?, ?, ? , ?)`;

const GET_ALL_CATEGORY = `SELECT * FROM ${categories}`;

const DELETE_CATEGORY = `DELETE FROM ${categories} WHERE uuid = ?`;

const CREATE_WALLPAPER_TABLE = `CREATE TABLE IF NOT EXISTS ${wallapaper} (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    thumbnail VARCHAR(200),
    uuid VARCHAR(255),
    category VARCHAR(20),
    image VARCHAR(200)
)`;
const INSERT_INTO_WALLPAPER = `INSERT INTO ${wallapaper} (name, thumbnail, uuid, category, image) VALUES (?, ?, ?, ?, ?)`;

const GET_RECENT = `SELECT * FROM ${wallapaper} ORDER BY id DESC LIMIT 400`;

const GET_WALLPAPER_BY_CATEGORY = `SELECT * FROM ${wallapaper} WHERE category = ? ORDER BY id DESC`;

const DELETE_WALLPAPER = `DELETE FROM ${wallapaper} WHERE uuid = ?`;


module.exports = {
  CREATE_CATEGORY_TABLE,
  INSERT_INTO_CATEGORY,
  GET_ALL_CATEGORY,
  DELETE_CATEGORY,
  CREATE_WALLPAPER_TABLE,
  INSERT_INTO_WALLPAPER,
  GET_RECENT,
  DELETE_WALLPAPER,
  GET_WALLPAPER_BY_CATEGORY,
};
