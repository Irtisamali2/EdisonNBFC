const crypto = require('crypto');
const { ensureSchema, getPool } = require('./mysql');

function normalizeBody(body) {
  if (!body) return {};
  if (typeof body === 'string') {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return body;
}

function makeReferenceId() {
  return `EDF-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;
}

async function saveContact(body) {
  const payload = normalizeBody(body);
  const name = String(payload.name || '').trim();
  const email = String(payload.email || '').trim();
  const phone = String(payload.phone || '').trim() || null;
  const reason = String(payload.reason || '').trim() || null;
  const message = String(payload.message || '').trim();

  if (!name || !email || !message) {
    const error = new Error('name, email, and message are required');
    error.statusCode = 400;
    throw error;
  }

  await ensureSchema();
  const db = getPool();
  const [result] = await db.execute(
    'INSERT INTO contacts (name, email, phone, reason, message, meta) VALUES (?, ?, ?, ?, ?, ?)',
    [name, email, phone, reason, message, JSON.stringify(payload)]
  );

  return { ok: true, saved: true, id: result.insertId };
}

async function saveApplication(body) {
  const payload = normalizeBody(body);
  const consent = Boolean(payload.consent);

  if (!consent) {
    const error = new Error('consent is required');
    error.statusCode = 400;
    throw error;
  }

  await ensureSchema();
  const db = getPool();
  const referenceId = makeReferenceId();

  const [result] = await db.execute(
    `INSERT INTO applications (
      reference_id, name, cnic, phone, city, product_mode, product_type,
      amount, tenor, purpose, sector, monthly_income, employment, consent, meta
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      referenceId,
      String(payload.name || '').trim() || null,
      String(payload.cnic || '').trim() || null,
      String(payload.phone || '').trim() || null,
      String(payload.city || '').trim() || null,
      String(payload.productMode || '').trim() || null,
      String(payload.productType || '').trim() || null,
      payload.amount !== undefined && payload.amount !== '' ? Number(payload.amount) : null,
      payload.tenor !== undefined && payload.tenor !== '' ? Number(payload.tenor) : null,
      String(payload.purpose || '').trim() || null,
      String(payload.sector || '').trim() || null,
      payload.monthlyIncome !== undefined && payload.monthlyIncome !== '' ? Number(payload.monthlyIncome) : null,
      String(payload.employment || '').trim() || null,
      consent ? 1 : 0,
      JSON.stringify(payload)
    ]
  );

  return { ok: true, saved: true, refId: referenceId, id: result.insertId };
}

module.exports = { saveContact, saveApplication };
