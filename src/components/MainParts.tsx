interface MainPartProps {
  income: number;
  expenses: number;
  total: number;
} 
export default function MainPart(props:MainPartProps){

  return (
    <div style={{
      width: '100%',
      maxWidth: '320px',
      borderRadius: '24px',
      padding: '20px',
      border: '1px solid rgba(255,255,255,0.7)',
      boxShadow: '0 18px 45px rgba(15, 23, 42, 0.12)'
    }}>

      <h6 style={{
        marginTop: '0px', marginLeft: "0px", fontSize: "12px",
        color: "#64748b", marginBottom: "8px", letterSpacing: '0.08em', textTransform: 'uppercase'
      }}>Total Balance</h6>

      <p style={{
        color: "#0f172a", fontSize: "36px", marginTop: "0px",
        marginBottom: "18px", fontWeight: "bold", letterSpacing: '-0.05em'
      }}>${props.total.toFixed(2)}</p>

      <div style={{ display: "flex", gap: "12px", marginTop: "0px" }}>
        <div style={{ width: 'calc(50% - 6px)', borderRadius: '18px', background: '#fff7ed', border: '1px solid #fed7aa', padding: '12px' }}>
          <p style={{ fontSize: '11px', color: '#9a3412', margin: 0, marginBottom: '6px', fontWeight: 'bold' }}>Expenses</p>
          <p style={{ color: '#dc2626', margin: 0, fontWeight: 'bold', fontSize: '18px' }}>${props.expenses.toFixed(2)}</p>
        </div>
        <div style={{
          width: 'calc(50% - 6px)', borderRadius: '18px',
          background: '#ecfeff', border: '1px solid #a5f3fc', padding: '12px'
        }}>
          <p style={{ fontSize: '11px', color: '#155e75', margin: 0, marginBottom: '6px', fontWeight: 'bold' }}>Income</p>
          <p style={{ color: '#0891b2', margin: 0, fontWeight: 'bold', fontSize: '18px' }}>${props.income.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}