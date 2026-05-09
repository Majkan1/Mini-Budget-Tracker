import type Transaction from '../Transaction';

interface TransactionListProps {
    transactions: Transaction[];
}

export default function List(props:TransactionListProps) {
  if (props.transactions.length === 0) {
    return (
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(248,250,252,0.98) 100%)',
        marginTop: '0px',
        borderRadius: '20px',
        padding: '24px',
        width: '272px',
        textAlign: 'center',
        border: '1px solid #e5e7eb',
        boxShadow: '0 18px 40px rgba(15, 23, 42, 0.10)'
      }}>
        <div style={{
          position: 'absolute',
          top: '-28px',
          right: '-18px',
          width: '96px',
          height: '96px',
          borderRadius: '999px',
          background: 'radial-gradient(circle, rgba(251,191,36,0.28) 0%, rgba(251,191,36,0) 72%)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-34px',
          left: '-24px',
          width: '110px',
          height: '110px',
          borderRadius: '999px',
          background: 'radial-gradient(circle, rgba(20,184,166,0.20) 0%, rgba(20,184,166,0) 72%)'
        }} />
        <div style={{
          width: '58px',
          height: '58px',
          borderRadius: '18px',
          margin: '0 auto 14px auto',
          background: 'linear-gradient(135deg, #111827 0%, #334155 100%)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px',
          fontWeight: 'bold',
          boxShadow: '0 12px 24px rgba(15, 23, 42, 0.24)',
          position: 'relative'
        }}>
          $ 
        </div>
        <p style={{
          color: '#0f172a',
          margin: '6px 0',
          fontSize: '17px',
          fontWeight: 'bold',
          letterSpacing: '-0.02em',
          position: 'relative'
        }}>
          No transactions yet
        </p>
        <p style={{
          color: '#64748b',
          fontSize: '12px',
          lineHeight: '1.6',
          margin: '6px 0 0 0',
          position: 'relative'
        }}>
          Start building your budget story.
          <br />
          Add your first income or expense above.
        </p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: '0px', width: '100%', maxWidth: '320px' }}>
      <h5 style={{ margin: '10px 0', color: '#1f2937' }}>Recent Transactions</h5>
      {props.transactions.map((t) => (
        <div key={t.id} style={{
          background: 'rgba(255, 255, 255, 0.92)',
          borderRadius: '18px',
          padding: '14px',
          marginBottom: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderLeft: `5px solid ${t.type === 'income' ? '#06b6d4' : '#ef4444'}`,
          boxShadow: '0 12px 28px rgba(15, 23, 42, 0.08)'
        }}>
          <div>
            <p style={{ margin: '0 0 6px 0', fontWeight: 'bold', fontSize: '14px', color: '#0f172a' }}>{t.title}</p>
            <p style={{ margin: '0', fontSize: '12px', color: '#64748b' }}>{t.date} • {t.category}</p>
          </div>
          <div>
            <p style={{ 
              margin: '0', 
              fontWeight: 'bold', 
              color: t.type === 'income' ? '#0891b2' : '#dc2626' 
            }}>
              {t.type === 'income' ? '+' : '-'}${t.amount.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}