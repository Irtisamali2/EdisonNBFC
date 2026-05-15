const pool = require('./db');

async function ensureTables() {
  await pool.execute(`
    CREATE TABLE IF NOT EXISTS applications (
      id            INT AUTO_INCREMENT PRIMARY KEY,
      ref_id        VARCHAR(20) NOT NULL,
      full_name     VARCHAR(255),
      cnic          VARCHAR(20),
      phone         VARCHAR(30),
      city          VARCHAR(100),
      product       VARCHAR(100),
      finance_type  VARCHAR(50),
      amount        INT,
      tenure        INT,
      income        INT,
      employer      VARCHAR(255),
      collateral    VARCHAR(255),
      consent       TINYINT(1),
      created_at    DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  await pool.execute(`
    CREATE TABLE IF NOT EXISTS contacts (
      id         INT AUTO_INCREMENT PRIMARY KEY,
      name       VARCHAR(255),
      email      VARCHAR(255),
      subject    VARCHAR(255),
      message    TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

ensureTables().catch(err =>
  console.warn('DB table init skipped (no DB configured):', err.message)
);

async function saveApplication(data) {
  const refId = 'EDF-' + Date.now().toString(36).toUpperCase();
  await pool.execute(
    `INSERT INTO applications
      (ref_id, full_name, cnic, phone, city, product, finance_type, amount, tenure, income, employer, collateral, consent)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      refId,
      data.fullName   || null,
      data.cnic       || null,
      data.phone      || null,
      data.city       || null,
      data.product    || null,
      data.financeType|| null,
      data.amount     || null,
      data.tenure     || null,
      data.income     || null,
      data.employer   || null,
      data.collateral || null,
      data.consent    ? 1 : 0,
    ]
  );
  return { refId };
}

async function saveContact(data) {
  await pool.execute(
    'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)',
    [data.name || null, data.email || null, data.subject || null, data.message || null]
  );
  return { ok: true };
}

module.exports = { saveApplication, saveContact };
